import {Hono} from "hono"
import {aboutservices,getabout,createabouts,updateabouts,deleteabouts} from './aboutcontroller'

export const aboutrouters=new Hono();
aboutrouters.get("/aboutall",aboutservices)
aboutrouters.get("/about/:id",getabout)
aboutrouters.post("/aboutadd",createabouts)
aboutrouters.put("/updateabout/:id",updateabouts)
aboutrouters.delete("/deleteabout/:id",deleteabouts)