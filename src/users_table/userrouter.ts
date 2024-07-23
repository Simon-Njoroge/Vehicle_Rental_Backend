import { Hono } from "hono"
import { usercervices, getusers, createusers, updateusers, deleteusers } from './usercontoller'
import { adminAuth, bothauth, userAuth } from '../middleware/bearAuth'
import { zValidator } from "@hono/zod-validator"
import { TUsers } from "../validatot"
export const userrouter = new Hono();
userrouter.get("/usersall", usercervices)
userrouter.get("/users/:id", bothauth, getusers)
userrouter.post("/usersadd",createusers)
userrouter.put("/updateusers/:id", updateusers)
userrouter.delete("/deleteusers/:id", deleteusers)
