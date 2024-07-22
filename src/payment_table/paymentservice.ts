import { eq, getOrderByOperators } from "drizzle-orm"
import { db, stripe } from '../drizzle/db'
import {  booking_table, payment_table, TIPayment, TSPaymet } from "../drizzle/schema"
import { Context } from "hono"
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


 
// export const createPayments = {
//   async createCheckoutSession(c: Context) {
//     try {
//       const { bookingId, amount } = await c.req.json();
   
//       const session = await paymentService.createCheckoutSession(
//         bookingId,
//         amount
//       );
 
//       return c.json({ sessionId: session.id, checkoutUrl: session.url });
//     } catch (error) {
//       console.error("Error creating checkout session:", error);
//       return c.json(
//         { success: false, error: "Failed to create checkout session" },
//         500
//       );
//     }
//   },
 
//   async handleWebhook(c: Context) {
//     const sig = c.req.header("stripe-signature");
//     const rawBody = await c.req.raw.text();
 
//     try {
//       const event = stripes.webhooks.constructEvent(
//         rawBody,
//         sig!,
//         process.env.STRIPE_WEBHOOK_SECRET!
//       );
 
//       if (event.type === "checkout.session.completed") {
//         const session = event.data.object;
//         await paymentService.handleSuccessfulPayment(session.id);
//       }
 
//       return c.json({ received: true });
//     } catch (err) {
//       console.error(err);
//       return c.json({ error: "Webhook error" }, 400);
//     }
//   },
// };
   
// export const createPayment = () => {
//     return {
//       async createCheckoutSession(bookingId: number, amount: number){
//         const session = await stripes.checkout.sessions.create({
//           payment_method_types: ["card"],
//           line_items: [
//             {
//               price_data: {
//                 currency: "usd",
//                 product_data: {
//                   name: "Car Rental Payment"
//                 },
//                 unit_amount: amount * 100, // Stripe expects amount in cents
//               },
//               quantity: 1,
//             },
//           ],
//           mode: "payment",
//           success_url: `http://localhost:5173/success?session_id={CHECKOUT_SESSION_ID}`,
//           cancel_url: `http://localhost:5173/cancel`,
//           metadata: {
//             bookingId: bookingId,
//           },
//         });
 
//         return session;
//       },
 
//       async handleSuccessfulPayment(sessionId: string) {
//         const session = await stripes.checkout.sessions.retrieve(sessionId);
//         const bookingId = parseInt(session.metadata!.bookingId);
 
//         // Handle possible null value for session.amount_total
//         const amountTotal = session.amount_total;
//         if (amountTotal === null) {
//           throw new Error("session.amount_total is null");
//         }
 
//         // Update booking status
//         await db
//           .update(booking_table)
//           .set({ booking_status: "Approved" })
//           .where(eq(booking_table.booking_id, bookingId));
 
//         // Create payment record
//         await db
//           .insert(payment_table)
//           .values({
//             booking_id: bookingId,
//             amount: amountTotal / 100,
//             payment_status: "Approved",
//             payment_method: session.payment_method_types[0],
//             transaction_id: session.payment_intent as unknown as number ,
//             // pa:new Date()
//           })
//           .returning();
//       },
//     };
//   };
 
 
// // // delete payment
// export const deletePayment = async (id:number):Promise<boolean>=>{
//     await db.delete(payment_table).where(eq(payment_table.payment_id,id))
//     return true
// }
