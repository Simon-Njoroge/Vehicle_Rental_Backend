import { eq, getOrderByOperators } from "drizzle-orm" 
import  {db}from '../drizzle/db'
import { Homedata,TShome,TIhome} from "../drizzle/schema"

export const homeservice = async (limit?: number)=>{
    if(limit){
        return await db.query.Homedata.findMany({
            limit: limit,
        });
     }
     return await db.query.Homedata.findMany()
}
export const gethomeservice =async(id: number)=>{
    return await db.query.Homedata.findFirst({
        where: eq(Homedata.id,id),
        
    })
 }

 export const createhome= async<T>(hom: TIhome):Promise<any>=>{
    await db.insert(Homedata).values(hom)
    return "ordermenu created successfiully"
 }

 export const updatehome = async(id:number ,hm:TIhome):Promise<any>=>{
    await db.update(Homedata).set(hm).where(eq(Homedata.id,id))
    return "updated successfully"
 }

 export const deletehome= async(id:number):Promise<any>=>{
    await db.delete(Homedata).where(eq(Homedata.id,id))
    return "deleted successfully"
 }