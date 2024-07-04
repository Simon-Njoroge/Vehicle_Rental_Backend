import { eq, getOrderByOperators } from "drizzle-orm" 
import  {db}from '../drizzle/db'
import { navbar_table,TInavbar,TSnavbar} from "../drizzle/schema"

export const navbarservice = async (limit?: number)=>{
    if(limit){
        return await db.query.navbar_table.findMany({
            limit: limit,
        });
     }
     return await db.query.navbar_table.findMany()
}
export const getnavservice =async(id: number)=>{
    return await db.query.navbar_table.findFirst({
        where: eq(navbar_table.id,id),
        
    })
 }

 export const creatnav = async<T>(nav: TInavbar):Promise<any>=>{
    await db.insert(navbar_table).values(nav)
    return "ordermenu created successfiully"
 }

 export const updatenav= async<T>(id:number ,navs:TInavbar):Promise<any>=>{
    await db.update(navbar_table).set(navs).where(eq(navbar_table.id,id))
    return "updated successfully"
 }

 export const deletenav= async<T>(id:number):Promise<any>=>{
    await db.delete(navbar_table).where(eq(navbar_table.id,id))
    return "deleted successfully"
 }