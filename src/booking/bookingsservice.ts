import { eq, getOrderByOperators ,and} from "drizzle-orm"
import { db } from '../drizzle/db'
import { booking_table, TIBsta, TSBsta,Vehicle_specification_table} from "../drizzle/schema"
const status="pending"
const booked="confirmed"
export const bookingservice = async (limit?: number) => {
   if (limit) {
      return await db.query.booking_table.findMany({
         limit: limit,
      });
   }
   return await db.query.booking_table.findMany()
}
export const getbookservice = async (id: number) => {
   return await db.query.booking_table.findMany({
      where: and( eq(booking_table.user_id, id), eq(booking_table.booking_status,status) ),

   })
}
export const getbooked = async (id: number) => {
   return await db.query.booking_table.findMany({
      where: and( eq(booking_table.user_id, id), eq(booking_table.booking_status,booked) ),

   })
}

export const creatbooking = async<T>(bok: TIBsta): Promise<any> => {
   await db.insert(booking_table).values(bok)
   return "ordermenu created successfiully"
}

export const updatebooking = async<T>(id: number, book: any): Promise<any> => {
   await db.update(booking_table).set(book).where(eq(booking_table.booking_id, id))
   return "updated successfully"
}

export const deletebooking = async<T>(id: number): Promise<any> => {
   await db.delete(booking_table).where(eq(booking_table.booking_id, id))
   return "deleted successfully"
}