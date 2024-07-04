import {Hono} from "hono"
import {homeservices,gethome,createhomes,updatehomes,deletehomes} from './homecontroller'

export const homerouters=new Hono();
homerouters.get("/homeall",homeservices)
homerouters.get("/home/:id",gethome)
homerouters.post("/homeadd",createhomes)
homerouters.put("/updatehome/:id",updatehomes)
homerouters.delete("/deletehome/:id",deletehomes)