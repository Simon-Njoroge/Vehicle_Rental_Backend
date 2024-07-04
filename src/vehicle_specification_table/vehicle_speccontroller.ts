import {vehiclespecservice,getvehiclespecservice,createspecvehicle,updatespecveh,deletespecveh} from './vehicle_specservice'
import {getallController,createallController,deleteallController,updateallController} from '../server/supercontroller'
import { Context } from "hono"
export const vehiclespecervices = async (c:Context)=>{
    try{
        const books = await vehiclespecservice()
        if(books == null || books.length ==0){
            return c.text("user not found", 404)
        }
        return c.json(books,200)
    }
    catch(err:any){
        return c.json({err: err?.message},400)
    }
}
export const getvehiclespec=getallController(getvehiclespecservice)
export const createspecs=createallController(createspecvehicle)
export const updatespecs=updateallController(getvehiclespecservice,updatespecveh)
export const deletevehspec=deleteallController(getvehiclespecservice,deletespecveh)