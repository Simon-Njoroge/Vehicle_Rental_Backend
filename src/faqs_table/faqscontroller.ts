import {faqsservice,getfaqsservice,createfaqs,updatefaqs,deletefaqs} from "./faqsservice"
import {getallController,createallController,deleteallController,updateallController} from '../server/supercontroller'

import { Context } from 'hono'
export const faqsservices = async (c:Context)=>{
    try{
        const books = await faqsservice()
        if(books == null || books.length ==0){
            return c.text("user not found", 404)
        }
        return c.json(books,200)
    }
    catch(err:any){
        return c.json({err: err?.message},400)
    }
}
export const getfaqs=getallController(getfaqsservice)
export const createfaq=createallController(createfaqs)
export const updatefaq=updateallController(getfaqsservice,updatefaqs)
export const deletefaq=deleteallController(getfaqsservice,deletefaqs)