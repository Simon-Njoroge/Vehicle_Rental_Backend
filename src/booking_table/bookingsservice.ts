import { eq, getOrderByOperators } from "drizzle-orm" 
import  {db}from '../drizzle/db'
import { booking_table,TIBsta,TSBsta} from "../drizzle/schema"

export const bookingservice = async (limit?: number)=>{
    if(limit){
        return await db.query.booking_table.findMany({
            limit: limit,
        });
     }
     return await db.query.booking_table.findMany()
}
export const getbookservice =async(id: number)=>{
    return await db.query.booking_table.findFirst({
        where: eq(booking_table.booking_id,id),
        
    })
 }

 export const creatbooking = async<T>(bok: TIBsta):Promise<any>=>{
    await db.insert(booking_table).values(bok)
    return "ordermenu created successfiully"
 }

 export const updatebooking= async<T>(id:number ,book:TIBsta):Promise<any>=>{
    await db.update(booking_table).set(book).where(eq(booking_table.booking_id,id))
    return "updated successfully"
 }

 export const deletebooking= async<T>(id:number):Promise<any>=>{
    await db.delete(booking_table).where(eq(booking_table.booking_id,id))
    return "deleted successfully"
 }