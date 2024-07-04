import {Hono} from "hono"
import {paymentservices,getpayment,createpayments,updatepayments,deletepayments} from './paymentcontroller'

export const paymentrouter=new Hono();
paymentrouter.get("/paymentall",paymentservices)
paymentrouter.get("/payment/:id",getpayment)
paymentrouter.post("/paymentadd",createpayments)
paymentrouter.put("/updatepayment/:id",updatepayments)
paymentrouter.delete("/deletepayment/:id",deletepayments)
