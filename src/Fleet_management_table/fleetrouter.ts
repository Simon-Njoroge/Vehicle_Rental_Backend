import {Hono} from "hono"
import {fleetservices,getfleet,createfleets,updatefleets,deletefleets} from './fleetcontoller'

export const fleetrouters=new Hono();
fleetrouters.get("/fleetall",fleetservices)
fleetrouters.get("/fleet/:id",getfleet)
fleetrouters.post("/fleetadd",createfleets)
fleetrouters.put("/updatefleet/:id",updatefleets)
fleetrouters.delete("/deletefleet/:id",deletefleets)