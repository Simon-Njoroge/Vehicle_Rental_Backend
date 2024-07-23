import { eq, getOrderByOperators } from "drizzle-orm"
import { db, stripe } from '../drizzle/db'
import {  booking_table, payment_table, TSPaymet } from "../drizzle/schema"
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

export const createpayment = async<T>(pay: any): Promise<any> => {
    await db.insert(payment_table).values(pay)
    return "ordermenu created successfiully"
}

export const updatepayment = async<T>(id: number, pays: any): Promise<any> => {
    await db.update(payment_table).set(pays).where(eq(payment_table.payment_id, id))
    return "updated successfully"
}

export const deletepayment = async<T>(id: number): Promise<any> => {
    await db.delete(payment_table).where(eq(payment_table.payment_id, id))
    return "deleted successfully"
}


 


// Service to fetch payments
export const paymentsService = async (limit?: number): Promise<any[] | null> => {
    if (limit) {
        return await db.query.payment_table.findMany({
            limit: limit,
          with: {
            booking:{
              columns: {
                bookingId: true,
              },
              with: {
                user: true,
              }
            }
          }
        });
    }
    return await db.query.payment_table.findMany({
      with: {
            booking:{
              columns: {
                bookingId: true,
              },
              with: {
                user: true,
              }
            }
          }}
    );
}

// Service to fetch a single payment by ID
export const getPaymentService = async (id: number): Promise<any | undefined> => {
    return await db.query.payment_table.findFirst({
        where: eq(payment_table.payment_id, id),
        with: {
            booking:{
              columns: {
                bookingId: true,
              },
              with: {
                user: {
                  columns:{
                    userId: true,
                  }
                },
              }
            }
          }
    });
}

// Service to fetch payments by booking ID
export const getPaymentsByBookingIdService = async (bookingId: number): Promise<any[] | null> => {
    return await db.query.payment_table.findMany({
        where: eq(payment_table.booking_id, bookingId),
        with: {
            booking:{
              columns: {
                bookingId: true,
              },
              with: {
                user: true,
              }
            }
          }
    });
}


interface TPaymentResponse {
  message: string;
  client_secret: string | null;
}



interface TIPayment {
  bookingId: number;
  amount: number;
  paymentMethod: string;
  transactionId?: string;
}

interface TPaymentResponse {
  sessionUrl: string;
}

    


export const createPaymentService = () => {
  return {
    async createCheckoutSession(booking_id: number, amount: number) {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "Car Booking",
              },
              unit_amount: amount * 100, // Stripe expects amount in cents
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${process.env.FRONTEND_URL}/booking-success`,
        cancel_url: `${process.env.FRONTEND_URL}/booking-cancelled`,
        metadata: {
          bookingId: booking_id.toString(),
        },
      });

      const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount) * 100, // Convert amount to cents
      currency: 'usd',
      metadata: { booking_id }, // Ensure booking_id is a string
    });
    // Update booking status
          await db
            .update(booking_table)
            .set({ booking_status: "confirmed" })
            .where(eq(booking_table.booking_id, booking_id));

    // Insert payment record into the database
    await db.insert(payment_table).values({
    //   booking_id,
      // bookingId,
    //   paymentDate: new Date() ,
      amount : amount ,
      payment_status: 'confirmed',
      payment_method: 'credit_card',
      transaction_id: paymentIntent.id ,
      booking_id,
    }).execute();

      return session;
    },

    async handleSuccessfulPayment(sessionId: string) {
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      const bookingId = parseInt(session.metadata!.bookingId);

      // Handle possible null value for session.amount_total
      const amountTotal = session.amount_total;
      if (amountTotal === null) {
        throw new Error("session.amount_total is null");
      }

      // Update booking status
      await db
        .update(booking_table)
        .set({ booking_status: "confirmed" })
        .where(eq(booking_table.booking_id, bookingId));

      // Create payment record
    //   await db
    //     .insert(payment_table)
    //     .values({
    //     //   booking_id,
    //     //   booking_id, 
    //     //   amount: amountTotal as unknown as string, 
    //       payment_status: "confirmed",
    //       payment_method: session.payment_method_types[0],
    //       transaction_id: 45 ,
         
    //     })
    //     .returning();
    },
  };
};









// Service to update a payment by ID
export const updatePaymentService = async (id: number, payment: any): Promise<string> => {
    await db.update(payment_table).set(payment).where(eq(payment_table.payment_id, id));
    return "Payment updated successfully";
}

// Service to delete a payment by ID
export const deletePaymentService = async (id: number): Promise<string> => {
    await db.delete(payment_table).where(eq(payment_table.payment_id, id));
    return "Payment deleted successfully";
}