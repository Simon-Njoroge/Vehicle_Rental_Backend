import { eq, getOrderByOperators } from "drizzle-orm" 
import  {db}from '../drizzle/db'
import { faqs_table, TIfaqs,TSfaqs} from "../drizzle/schema"

export const faqsservice = async (limit?: number)=>{
    if(limit){
        return await db.query.faqs_table.findMany({
            limit: limit,
        });
     }
     return await db.query.faqs_table.findMany()
}
export const getfaqsservice =async(id: number)=>{
    return await db.query.faqs_table.findFirst({
        where: eq(faqs_table.id,id),
        
    })
 }

 export const createfaqs = async<T>(faqs: TIfaqs):Promise<any>=>{
    await db.insert(faqs_table).values(faqs)
    return "ordermenu created successfiully"
 }

 export const updatefaqs = async<T>(id:number ,fqs:TIfaqs):Promise<any>=>{
    await db.update(faqs_table).set(fqs).where(eq(faqs_table.id,id))
    return "updated successfully"
 }

 export const deletefaqs= async<T>(id:number):Promise<any>=>{
    await db.delete(faqs_table).where(eq(faqs_table.id,id))
    return "deleted successfully"
 }