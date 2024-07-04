import { eq, getOrderByOperators } from "drizzle-orm" 
import  {db}from '../drizzle/db'
import { Vehicle_specification_table,TIVspec,TSVspec} from "../drizzle/schema"

export const vehiclespecservice = async (limit?: number)=>{
    if(limit){
        return await db.query.Vehicle_specification_table.findMany({
            limit: limit,
        });
     }
     return await db.query.Vehicle_specification_table.findMany()
}
export const getvehiclespecservice =async(id: number)=>{
    return await db.query.Vehicle_specification_table.findFirst({
        where: eq(Vehicle_specification_table.vehiclesspec_id,id),
        
    })
 }

 export const createspecvehicle = async<T>(Vehs: TIVspec):Promise<any>=>{
    await db.insert(Vehicle_specification_table).values(Vehs)
    return "ordermenu created successfiully"
 }

 export const updatespecveh = async<T>(id:number ,vehs:TIVspec):Promise<any>=>{
    await db.update(Vehicle_specification_table).set(vehs).where(eq(Vehicle_specification_table.vehiclesspec_id,id))
    return "updated successfully"
 }

 export const deletespecveh= async<T>(id:number):Promise<any>=>{
    await db.delete(Vehicle_specification_table).where(eq(Vehicle_specification_table,id))
    return "deleted successfully"
 }