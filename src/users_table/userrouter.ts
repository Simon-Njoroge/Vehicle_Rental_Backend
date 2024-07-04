import {Hono} from "hono"
import {usercervices,getusers,createusers,updateusers,deleteusers} from './usercontoller'

export const userrouter=new Hono();
userrouter.get("/usersall",usercervices)
userrouter.get("/users/:id",getusers)
userrouter.post("/usersadd",createusers)
userrouter.put("/updateusers/:id",updateusers)
userrouter.delete("/deleteusers/:id",deleteusers)
