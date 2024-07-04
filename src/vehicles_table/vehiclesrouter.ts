import {Hono} from "hono"
import {vehicleservices,getvehicle,createvehicles,updatevehs,deletevehicles} from './vehiclescontroller'

export const Vehiclerouter=new Hono();
Vehiclerouter.get("/vehicleall",vehicleservices)
Vehiclerouter.get("/vehicle/:id",getvehicle)
Vehiclerouter.post("/vehicleadd",createvehicles)
Vehiclerouter.put("/updatevehicle/:id",updatevehs)
Vehiclerouter.delete("/deletevehicle/:id",deletevehicles)
