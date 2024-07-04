import { eq, getOrderByOperators } from "drizzle-orm" 
import  {db}from '../drizzle/db'
import { vehicles_table,TIVeh,TSVeh} from "../drizzle/schema"

export const vehicleservice = async (limit?: number)=>{
    if(limit){
        return await db.query.vehicles_table.findMany({
            limit: limit,
        });
     }
     return await db.query.vehicles_table.findMany()
}
export const getvehicleservice =async(id: number)=>{
    return await db.query.vehicles_table.findFirst({
        where: eq(vehicles_table.vehicles_id,id),
        
    })
 }

 export const createvehicle = async<T>(Veh: TIVeh):Promise<any>=>{
    await db.insert(vehicles_table).values(Veh)
    return "ordermenu created successfiully"
 }

 export const updateveh = async<T>(id:number ,veh1:TIVeh):Promise<any>=>{
    await db.update(vehicles_table).set(veh1).where(eq(vehicles_table.vehicles_id,id))
    return "updated successfully"
 }

 export const deleteveh= async<T>(id:number):Promise<any>=>{
    await db.delete(vehicles_table).where(eq(vehicles_table.vehicles_id,id))
    return "deleted successfully"
 }