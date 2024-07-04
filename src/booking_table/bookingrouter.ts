import {Hono} from "hono"
import {bookingservices,getbooking,createbook,updatebook,deletebook} from './bookingcontroller'

export const bookingrouters=new Hono();
bookingrouters.get("/bookall",bookingservices)
bookingrouters.get("/book/:id",getbooking)
bookingrouters.post("/bookadd",createbook)
bookingrouters.put("/updatebook/:id",updatebook)
bookingrouters.delete("/deletebook/:id",deletebook)