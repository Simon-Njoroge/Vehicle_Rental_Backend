import { Hono } from "hono"
import { locationservices, getlocations, createlocation, updatelocation, deletelocations } from './loactioncontroller'
import { adminAuth, bothauth } from '../middleware/bearAuth'
import { zValidator } from "@hono/zod-validator"
import { TLoc } from "../validatot"
export const locationrouter = new Hono();
locationrouter.get("/locationall", adminAuth, locationservices)
locationrouter.get("/location/:id", bothauth, getlocations)
locationrouter.post("/locationadd", zValidator("json", TLoc, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}), createlocation)
locationrouter.put("/updatelocation/:id", adminAuth, updatelocation)
locationrouter.delete("/deletenavbar/:id", adminAuth, deletelocations)