import {aboutusservice,getaboutus,createaboutus,updateaboutus,deleteaboutus} from './aboutservice'
import {getallController,createallController,deleteallController,updateallController} from '../server/supercontroller'
import { Context } from 'hono'
export const aboutusservices= async (c:Context)=>{
    try{
        const books = await aboutusservice()
        if(books == null || books.length ==0){
            return c.text("user not found", 404)
        }
        return c.json(books,200)
    }
    catch(err:any){
        return c.json({err: err?.message},400)
    }
}
export const getaboutuss=getallController(getaboutus)
export const createaboutuss=createallController(createaboutus)
export const updateaboutuss=updateallController(getaboutus,updateaboutus)
export const deleteaboutuss=deleteallController(getaboutus,deleteaboutus)