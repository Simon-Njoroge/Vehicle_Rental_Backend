import { Hono } from "hono"
import { bookingservices, getbooking, createbook, updatebook, deletebook } from './bookingcontroller'
import { adminAuth, bothauth } from '../middleware/bearAuth'
import { zValidator } from "@hono/zod-validator"
import { Tbtable } from "../validatot"
export const bookingrouters = new Hono();
bookingrouters.get("/bookall", adminAuth, bookingservices)
bookingrouters.get("/book/:id", bothauth, getbooking)
bookingrouters.post("/bookadd", bothauth, zValidator("json", Tbtable, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}), createbook)
bookingrouters.put("/updatebook/:id", bothauth, updatebook)
bookingrouters.delete("/deletebook/:id", bothauth, deletebook)