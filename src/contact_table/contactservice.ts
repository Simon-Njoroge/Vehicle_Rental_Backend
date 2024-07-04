import { eq, getOrderByOperators } from "drizzle-orm" 
import  {db}from '../drizzle/db'
import { contact_table,TIcontact,TScontact} from "../drizzle/schema"

export const contactservice = async (limit?: number)=>{
    if(limit){
        return await db.query.contact_table.findMany({
            limit: limit,
        });
     }
     return await db.query.contact_table.findMany()
}
export const getcontactservice =async(id: number)=>{
    return await db.query.contact_table.findFirst({
        where: eq(contact_table.id,id),
        
    })
 }

 export const createcontact = async<T>(con: TIcontact):Promise<any>=>{
    await db.insert(contact_table).values(con)
    return "ordermenu created successfiully"
 }

 export const updatecontact = async<T>(id:number ,cons:TIcontact):Promise<any>=>{
    await db.update(contact_table).set(cons).where(eq(contact_table.id,id))
    return "updated successfully"
 }

 export const deletecons= async<T>(id:number):Promise<any>=>{
    await db.delete(contact_table).where(eq(contact_table.id,id))
    return "deleted successfully"
 }