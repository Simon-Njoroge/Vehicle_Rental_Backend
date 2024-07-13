import { Hono } from "hono"
import { fleetservices, getfleet, createfleets, updatefleets, deletefleets } from './fleetcontoller'
import { adminAuth, bothauth } from '../middleware/bearAuth'
import { zValidator } from "@hono/zod-validator"
import { Tfleet } from "../validatot"
export const fleetrouters = new Hono();
fleetrouters.get("/fleetall", adminAuth, fleetservices)
fleetrouters.get("/fleet/:id", bothauth, getfleet)
fleetrouters.post("/fleetadd", bothauth, zValidator("json", Tfleet, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}), createfleets)
fleetrouters.put("/updatefleet/:id", adminAuth, updatefleets)
fleetrouters.delete("/deletefleet/:id", adminAuth, deletefleets)