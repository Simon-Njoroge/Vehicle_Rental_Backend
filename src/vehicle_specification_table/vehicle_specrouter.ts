import {Hono} from "hono"
import {vehiclespecervices,getvehiclespec,createspecs,updatespecs,deletevehspec} from './vehicle_speccontroller'

export const Vehiclespecrouter=new Hono();
Vehiclespecrouter.get("/vehiclespecall",vehiclespecervices)
Vehiclespecrouter.get("/vehiclespec/:id",getvehiclespec)
Vehiclespecrouter.post("/vehiclespecadd",createspecs)
Vehiclespecrouter.put("/updatevehiclespec/:id",updatespecs)
Vehiclespecrouter.delete("/deletevehiclespec/:id",deletevehspec)
