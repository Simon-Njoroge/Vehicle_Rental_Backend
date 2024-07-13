import{aboutusservices,getaboutuss,createaboutuss,updateaboutuss,deleteaboutuss} from './aboutcontoller'
import {Hono} from 'hono'


export const aboutusrouter=new Hono();
aboutusrouter.get("/aboutusall",aboutusservices)
aboutusrouter.get("/aboutus/:id",getaboutuss)
aboutusrouter.post("/aboutusadd",createaboutuss)
aboutusrouter.put("/updateaboutus/:id",updateaboutuss)
aboutusrouter.delete("/deleteaboutus/:id",deleteaboutuss)