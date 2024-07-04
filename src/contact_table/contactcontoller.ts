import {contactservice,getcontactservice,createcontact,updatecontact,deletecons} from './contactservice'
import {getallController,createallController,deleteallController,updateallController} from '../server/supercontroller'
import { Context } from 'hono'
export const contactserviceS= async (c:Context)=>{
    try{
        const books = await contactservice()
        if(books == null || books.length ==0){
            return c.text("user not found", 404)
        }
        return c.json(books,200)
    }
    catch(err:any){
        return c.json({err: err?.message},400)
    }
}
export const getvehicle=getallController(getcontactservice)
export const createvehicles=createallController(createcontact)
export const updatevehs=updateallController(getcontactservice,updatecontact)
export const deletevehicles=deleteallController(getcontactservice,deletecons)