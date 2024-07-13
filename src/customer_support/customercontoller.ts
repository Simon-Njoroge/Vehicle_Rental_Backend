import {customerservice,getcustomerservice,createcustmer,updatecustomer,deletecustomer} from "./customerservice"
import {getallController,createallController,deleteallController,updateallController} from '../server/supercontroller'
import { Context } from 'hono'
export const customerservices= async (c:Context)=>{
    try{
        const books = await customerservice()
        if(books == null || books.length ==0){
            return c.text("user not found", 404)
        }
        return c.json(books,200)
    }
    catch(err:any){
        return c.json({err: err?.message},400)
    }
}
export const getcustomersup=getallController(getcustomerservice)
export const createcustm=createallController(createcustmer)
export const updatecust=updateallController(getcustomerservice,updatecustomer)
export const deletecust=deleteallController(getcustomerservice,deletecustomer)