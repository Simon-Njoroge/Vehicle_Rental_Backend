import {homeservice,gethomeservice,createhome,updatehome,deletehome} from './homeservice'
import {getallController,createallController,deleteallController,updateallController} from '../server/supercontroller'
import {Context} from "hono"
export const homeservices = async (c:Context)=>{
    try{
        const books = await homeservice()
        if(books == null || books.length ==0){
            return c.text("user not found", 404)
        }
        return c.json(books,200)
    }
    catch(err:any){
        return c.json({err: err?.message},400)
    }
}
export const gethome=getallController(gethomeservice)
export const createhomes=createallController(createhome)
export const updatehomes=updateallController(gethomeservice,updatehome)
export const deletehomes=deleteallController(gethomeservice,deletehome)