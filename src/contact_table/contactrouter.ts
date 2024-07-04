import {Hono} from "hono"
import {contactserviceS,getvehicle,createvehicles,updatevehs,deletevehicles} from './contactcontoller'

export const contactrouters=new Hono();
contactrouters.get("/contall",contactserviceS)
contactrouters.get("/cont/:id",getvehicle)
contactrouters.post("/contadd",createvehicles)
contactrouters.put("/updatecont/:id",updatevehs)
contactrouters.delete("/deletecont/:id",deletevehicles)