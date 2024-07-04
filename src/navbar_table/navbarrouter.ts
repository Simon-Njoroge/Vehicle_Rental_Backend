import {Hono} from "hono"
import {navbarservices,getnavbar,createnavbar,updatenavbar,deletenavbar} from './navbar.controller'

export const navbarrouter=new Hono();
navbarrouter.get("/paymentall",navbarservices)
navbarrouter.get("/navbar/:id",getnavbar)
navbarrouter.post("/navbaradd",createnavbar)
navbarrouter.put("/updatenavbar/:id",updatenavbar)
navbarrouter.delete("/deletenavbar/:id",deletenavbar)
