import { eq, getOrderByOperators } from "drizzle-orm" 
import  {db}from '../drizzle/db'
import { about_leadership_table,TIabout,TSabout} from "../drizzle/schema"

export const aboutservice = async (limit?: number)=>{
    if(limit){
        return await db.query.about_leadership_table.findMany({
            limit: limit,
        });
     }
     return await db.query.about_leadership_table.findMany()
}
export const getaboutservice =async(id: number)=>{
    return await db.query.about_leadership_table.findFirst({
        where: eq(about_leadership_table.id,id),
        
    })
 }

 export const createabout = async<T>(about: TIabout):Promise<any>=>{
    await db.insert(about_leadership_table).values(about)
    return "ordermenu created successfiully"
 }

 export const updateabout = async<T>(id:number ,abt:TIabout):Promise<any>=>{
    await db.update(about_leadership_table).set(abt).where(eq(about_leadership_table,id))
    return "updated successfully"
 }

 export const deleteabout= async<T>(id:number):Promise<any>=>{
    await db.delete(about_leadership_table).where(eq(about_leadership_table.id,id))
    return "deleted successfully"
 }