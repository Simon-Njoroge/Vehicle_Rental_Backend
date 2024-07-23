import { db } from "../drizzle/db";
import { booking_table, payment_table } from "../drizzle/schema";
import { eq } from "drizzle-orm";
import Stripe from "stripe";
import dotenv from 'dotenv/config';
import { date } from "drizzle-orm/mysql-core";


const stripe = new Stripe(process.env.STRIPE as string, {
    apiVersion: '2024-06-20',
});

export const createPaymentIntent = async (amount: number, currency: string, booking_id: number) => {
    const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency,
    });

    const amountAsString = amount.toString();


    await db.insert(payment_table).values({
        booking_id,
        amount: amountAsString,
        payment_status: 'Pending',
        payment_method: 'card',
        transaction_id: paymentIntent.id,
        created_at: "2025-10-01",
        updated_at: '2025-10-2'
    }).execute();

    return paymentIntent;
};

export const createCheckoutSession = async (amount: number, currency: string, booking_id: number) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: currency,
                    product_data: {
                        name: 'Nazarene Vehicle rental',
                    },
                    unit_amount: Math.round(amount),
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: 'https://brave-forest-03edfb90f.5.azurestaticapps.net/success',
        cancel_url: 'https://brave-forest-03edfb90f.5.azurestaticapps.net/cancel',
    });

    const amountAsString = amount.toString();
    await db.insert(payment_table).values({
        booking_id,
        amount: amountAsString,
        payment_status: 'Pending',
        payment_method: 'card',
        transaction_id: session.id,
    }).execute();

    return session;
};

export const handleWebhook = async (payload: string, sig: string, webhookSecret: string) => {
    try {
        const event = stripe.webhooks.constructEvent(payload, sig, webhookSecret);
        if (event.type === 'checkout.session.completed') {
            const session = event.data.object as Stripe.Checkout.Session;

            await db.update(payment_table).set({
                payment_status: 'Succeeded',
                created_at: new Date(session.created * 1000).toISOString(),
            }).where(eq(payment_table.transaction_id, session.id)).execute();

            const payment = await db.query.payment_table.findFirst({
                where: eq(payment_table.transaction_id, session.id)});
            if (payment) {
                await db.update(booking_table).set({
                    booking_status: 'Succeeded',
                }).where(eq(booking_table.booking_id, payment_table.booking_id)).execute();
            }
        }
        return event;

    } catch (err: any) {
        throw new Error(`Webhook Error: ${err.message}`);
 }
};