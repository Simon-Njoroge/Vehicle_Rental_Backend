import {locationservice,getlocationservice,createlocations,updateLocation,deletelocation} from "./locationservice"
import {getallController,createallController,deleteallController,updateallController} from '../server/supercontroller'

import {Context} from "hono"
export const locationservices = async (c:Context)=>{
    try{
        const books = await locationservice()
        if(books == null || books.length ==0){
            return c.text("user not found", 404)
        }
        return c.json(books,200)
    }
    catch(err:any){
        return c.json({err: err?.message},400)
    }
}
export const getlocations=getallController(getlocationservice)
export const createlocation=createallController(createlocations)
export const updatelocation=updateallController(getlocationservice,updateLocation)
export const deletelocations=deleteallController(getlocationservice,deletelocation)