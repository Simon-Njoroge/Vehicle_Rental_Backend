import {aboutservice,getaboutservice,createabout,updateabout,deleteabout} from './aboutservice'
import {getallController,createallController,deleteallController,updateallController} from '../server/supercontroller'
import { Context } from 'hono'
export const aboutservices= async (c:Context)=>{
    try{
        const books = await aboutservice()
        if(books == null || books.length ==0){
            return c.text("user not found", 404)
        }
        return c.json(books,200)
    }
    catch(err:any){
        return c.json({err: err?.message},400)
    }
}
export const getabout=getallController(getaboutservice)
export const createabouts=createallController(createabout)
export const updateabouts=updateallController(getaboutservice,updateabout)
export const deleteabouts=deleteallController(getaboutservice,deleteabout)