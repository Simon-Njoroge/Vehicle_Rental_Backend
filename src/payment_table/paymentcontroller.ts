import {paymentservice,getpaymentservice,createpayment,updatepayment,deletepayment} from './paymentservice'
import {getallController,createallController,deleteallController,updateallController} from '../server/supercontroller'
import {Context} from "hono"
export const paymentservices = async (c:Context)=>{
    try{
        const books = await paymentservice()
        if(books == null || books.length ==0){
            return c.text("user not found", 404)
        }
        return c.json(books,200)
    }
    catch(err:any){
        return c.json({err: err?.message},400)
    }
}
export const getpayment=getallController(getpaymentservice)
export const createpayments=createallController(createpayment)
export const updatepayments=updateallController(getpaymentservice,updatepayment)
export const deletepayments=deleteallController(getpaymentservice,deletepayment)