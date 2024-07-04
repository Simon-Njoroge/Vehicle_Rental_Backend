import {Hono} from "hono"
import {locationservices,getlocations,createlocation,updatelocation,deletelocations} from './loactioncontroller'

export const locationrouter=new Hono();
locationrouter.get("/locationall",locationservices)
locationrouter.get("/location/:id",getlocations)
locationrouter.post("/locationadd",createlocation)
locationrouter.put("/updatelocation/:id",updatelocation)
locationrouter.delete("/deletenavbar/:id",deletelocations)