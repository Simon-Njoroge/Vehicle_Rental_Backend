import { eq, getOrderByOperators } from "drizzle-orm" 
import  {db}from '../drizzle/db'
import { payment_table,TIPayment,TSPaymet} from "../drizzle/schema"

export const paymentservice = async (limit?: number)=>{
    if(limit){
        return await db.query.payment_table.findMany({
            limit: limit,
        });
     }
     return await db.query.payment_table.findMany()
}
export const getpaymentservice =async(id: number)=>{
    return await db.query.payment_table.findFirst({
        where: eq(payment_table.payment_id,id),
        
    })
 }

 export const createpayment = async<T>(pay: TIPayment):Promise<any>=>{
    await db.insert(payment_table).values(pay)
    return "ordermenu created successfiully"
 }

 export const updatepayment = async<T>(id:number ,pays:TIPayment):Promise<any>=>{
    await db.update(payment_table).set(pays).where(eq(payment_table.payment_id,id))
    return "updated successfully"
 }

 export const deletepayment= async<T>(id:number):Promise<any>=>{
    await db.delete(payment_table).where(eq(payment_table.payment_id,id))
    return "deleted successfully"
 }