import {Hono} from "hono"
import {faqsservices,getfaqs,createfaq,updatefaq,deletefaq} from './faqscontroller'

export const faqsrouters=new Hono();
faqsrouters.get("/faqsall",faqsservices)
faqsrouters.get("/faqs/:id",getfaqs)
faqsrouters.post("/homeadd",createfaq)
faqsrouters.put("/updatefaq/:id",updatefaq)
faqsrouters.delete("/deletefaq/:id",deletefaq)