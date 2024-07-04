import { eq, getOrderByOperators } from "drizzle-orm" 
import  {db}from '../drizzle/db'
import { Location_and_Branches_table,TILbt,TSLbt} from "../drizzle/schema"

export const locationservice = async (limit?: number)=>{
    if(limit){
        return await db.query.Location_and_Branches_table.findMany({
            limit: limit,
        });
     }
     return await db.query.Location_and_Branches_table.findMany()
}
export const getlocationservice =async(id: number)=>{
    return await db.query.Location_and_Branches_table.findFirst({
        where: eq(Location_and_Branches_table.Location_id,id),
        
    })
 }

 export const createlocations = async<T>(loc: TILbt):Promise<any>=>{
    await db.insert(Location_and_Branches_table).values(loc)
    return "ordermenu created successfiully"
 }

 export const updateLocation = async<T>(id:number ,locs:TILbt):Promise<any>=>{
    await db.update(Location_and_Branches_table).set(locs).where(eq(Location_and_Branches_table,id))
    return "updated successfully"
 }

 export const deletelocation= async<T>(id:number):Promise<any>=>{
    await db.delete(Location_and_Branches_table).where(eq(Location_and_Branches_table.Location_id,id))
    return "deleted successfully"
 }