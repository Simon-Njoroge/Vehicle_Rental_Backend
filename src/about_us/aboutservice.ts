import { eq, getOrderByOperators } from "drizzle-orm" 
import  {db}from '../drizzle/db'
import { aboutus_table} from "../drizzle/schema"

export const aboutusservice = async (limit?: number)=>{
    if(limit){
        return await db.query.aboutus_table.findMany({
            limit: limit,
        });
     }
     return await db.query.aboutus_table.findMany()
}
export const getaboutus =async(id: number)=>{
    return await db.query.aboutus_table.findFirst({
        where: eq(aboutus_table.id,id),
        
    })
 }

 export const createaboutus = async<T>(about: any):Promise<any>=>{
    await db.insert(aboutus_table).values(about)
    return "ordermenu created successfiully"
 }

 export const updateaboutus = async<T>(id:number ,assets:any):Promise<any>=>{
    await db.update(aboutus_table).set(assets).where(eq(aboutus_table.id,id))
    return "updated successfully"
 }

 export const deleteaboutus= async<T>(id:number):Promise<any>=>{
    await db.delete(aboutus_table).where(eq(aboutus_table.id,id))
    return "deleted successfully"
 }