import { eq, getOrderByOperators } from "drizzle-orm"
import { db, stripe } from '../drizzle/db'
import {  payment_table, TIPayment, TSPaymet } from "../drizzle/schema"
export const paymentservice = async (limit?: number) => {
    if (limit) {
        return await db.query.payment_table.findMany({
            limit: limit,
        });
    }
    return await db.query.payment_table.findMany({
        columns: {
            payment_id: false
        }
    })
}
export const getpaymentservice = async (id: number) => {
    return await db.query.payment_table.findFirst({
        where: eq(payment_table.payment_id, id),

    })
}

export const createpayment = async<T>(pay: TIPayment): Promise<any> => {
    await db.insert(payment_table).values(pay)
    return "ordermenu created successfiully"
}

export const updatepayment = async<T>(id: number, pays: TIPayment): Promise<any> => {
    await db.update(payment_table).set(pays).where(eq(payment_table.payment_id, id))
    return "updated successfully"
}

export const deletepayment = async<T>(id: number): Promise<any> => {
    await db.delete(payment_table).where(eq(payment_table.payment_id, id))
    return "deleted successfully"
}
export const createPaymentService = async <T>(payment_table:any) => {
    if (payment_table.booking_id === undefined) {
        throw new Error("Booking ID is required");
    }

    const paymentIntent = await stripe.paymentIntents.create({
        amount: Number(payment_table.amount) * 100,
        currency: 'usd',
        metadata: { booking: payment_table.booking_id },
    });


    await db.insert(payment_table).values({
        booking_id: payment_table.booking_id,
        amount: payment_table.amount,
        payment_status: 'Pending',
        payment_method: payment_table.payment_method,
        transaction_id: paymentIntent.id,
        payment_date: new Date(),
    }).execute();

    return { message: 'Payment created successfully', client_secret: paymentIntent.client_secret };
}
