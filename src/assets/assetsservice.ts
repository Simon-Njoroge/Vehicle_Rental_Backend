import { eq, getOrderByOperators } from "drizzle-orm" 
import  {db}from '../drizzle/db'
import { assets_table} from "../drizzle/schema"

export const assetsservice = async (limit?: number)=>{
    if(limit){
        return await db.query.assets_table.findMany({
            limit: limit,
        });
     }
     return await db.query.assets_table.findMany()
}
export const getaboutassets =async(id: number)=>{
    return await db.query.assets_table.findFirst({
        where: eq(assets_table.assets_id,id),
        
    })
 }

 export const createassets = async<T>(assets: any):Promise<any>=>{
    await db.insert(assets_table).values(assets)
    return "ordermenu created successfiully"
 }

 export const updateassets = async<T>(id:number ,assets:any):Promise<any>=>{
    await db.update(assets_table).set(assets).where(eq(assets_table.assets_id,id))
    return "updated successfully"
 }

 export const deleteassets= async<T>(id:number):Promise<any>=>{
    await db.delete(assets_table).where(eq(assets_table.assets_id,id))
    return "deleted successfully"
 }