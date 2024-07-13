import { Hono } from "hono"
import { vehicleservices, getvehicle, createvehicles, updatevehs, deletevehicles } from './vehiclescontroller'
import { adminAuth, bothauth } from '../middleware/bearAuth'
import { zValidator } from "@hono/zod-validator"
import { Tveh } from "../validatot"
export const Vehiclerouter = new Hono();
Vehiclerouter.get("/vehicleall", bothauth, vehicleservices)
Vehiclerouter.get("/vehicle/:id", bothauth, getvehicle)
Vehiclerouter.post("/vehicleadd", zValidator("json", Tveh, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}), createvehicles)
Vehiclerouter.put("/updatevehicle/:id", adminAuth, updatevehs)
Vehiclerouter.delete("/deletevehicle/:id", adminAuth, deletevehicles)
