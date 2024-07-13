import { eq, getOrderByOperators } from "drizzle-orm" 
import  {db}from '../drizzle/db'
import { Customer_support_Tickets_table,TICuss,TSCuss} from "../drizzle/schema"

export const customerservice = async (limit?: number)=>{
    if(limit){
        return await db.query.Customer_support_Tickets_table.findMany({
            limit: limit,
        });
     }
     return await db.query.Customer_support_Tickets_table.findMany()
}
export const getcustomerservice =async(id: number)=>{
    return await db.query.Customer_support_Tickets_table.findFirst({
        where: eq(Customer_support_Tickets_table.ticket_id,id),
        
    })
 }

 export const createcustmer = async<T>(cuss: TICuss):Promise<any>=>{
    await db.insert(Customer_support_Tickets_table).values(cuss)
    return "ordermenu created successfiully"
 }

 export const updatecustomer = async<T>(id:number ,tic:TICuss):Promise<any>=>{
    await db.update(Customer_support_Tickets_table).set(tic).where(eq(Customer_support_Tickets_table.ticket_id,id))
    return "updated successfully"
 }

 export const deletecustomer= async<T>(id:number):Promise<any>=>{
    await db.delete(Customer_support_Tickets_table).where(eq(Customer_support_Tickets_table.ticket_id,id))
    return "deleted successfully"
 }