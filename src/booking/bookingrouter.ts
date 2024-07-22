import { Hono } from "hono"
import { bookingservices, getbooking,getbookeds, createbook, updatebook, deletebook } from './bookingcontroller'
import { adminAuth, bothauth, userAuth } from '../middleware/bearAuth'
import { zValidator } from "@hono/zod-validator"
import { Tbtable } from "../validatot"
export const bookingrouters = new Hono();
bookingrouters.get("/bookall",  bookingservices)
bookingrouters.get("/book/:id", getbooking)
bookingrouters.get("/booked/:id", getbookeds)
bookingrouters.post("/bookadd", createbook)
bookingrouters.put("/updatebook/:id", bothauth, updatebook)
bookingrouters.delete("/deletebook/:id", bothauth, deletebook)