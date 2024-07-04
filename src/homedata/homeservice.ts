import { eq, getOrderByOperators } from "drizzle-orm" 
import  {db}from '../drizzle/db'
import { Homedata2,TShome,TIhome} from "../drizzle/schema"

export const homeservice = async (limit?: number)=>{
    if(limit){
        return await db.query.Homedata2.findMany({
            limit: limit,
        });
     }
     return await db.query.Homedata2.findMany()
}
export const gethomeservice =async(id: number)=>{
    return await db.query.Homedata2.findFirst({
        where: eq(Homedata2.id,id),
        
    })
 }

 export const createhome= async<T>(hom: TIhome):Promise<any>=>{
    await db.insert(Homedata2).values(hom)
    return "ordermenu created successfiully"
 }

 export const updatehome = async(id:number ,hm:TIhome):Promise<any>=>{
    await db.update(Homedata2).set(hm).where(eq(Homedata2.id,id))
    return "updated successfully"
 }

 export const deletehome= async(id:number):Promise<any>=>{
    await db.delete(Homedata2).where(eq(Homedata2.id,id))
    return "deleted successfully"
 }