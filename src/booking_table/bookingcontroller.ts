import {bookingservice,getbookservice,creatbooking,updatebooking,deletebooking} from './bookingsservice'
import {getallController,createallController,deleteallController,updateallController} from '../server/supercontroller'
import { Context } from 'hono'
export const bookingservices= async (c:Context)=>{
    try{
        const books = await bookingservice()
        if(books == null || books.length ==0){
            return c.text("user not found", 404)
        }
        return c.json(books,200)
    }
    catch(err:any){
        return c.json({err: err?.message},400)
    }
}
export const getbooking=getallController(getbookservice)
export const createbook=createallController(creatbooking)
export const updatebook=updateallController(getbookservice,updatebooking)
export const deletebook=deleteallController(getbookservice,deletebooking)