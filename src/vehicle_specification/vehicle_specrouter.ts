import { Hono } from "hono"
import { vehiclespecervices, getvehiclespec, createspecs, updatespecs, deletevehspec } from './vehicle_speccontroller'
import { adminAuth, bothauth } from '../middleware/bearAuth'
import { zValidator } from "@hono/zod-validator"
import { Tvehspec } from "../validatot"
export const Vehiclespecrouter = new Hono();
Vehiclespecrouter.get("/vehiclespecall", vehiclespecervices)
Vehiclespecrouter.get("/vehiclespec/:id", getvehiclespec)
Vehiclespecrouter.post("/vehiclespecadd", adminAuth, zValidator("json", Tvehspec, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}), createspecs)
Vehiclespecrouter.put("/updatevehiclespec/:id", adminAuth, updatespecs)
Vehiclespecrouter.delete("/deletevehiclespec/:id", adminAuth, deletevehspec)
