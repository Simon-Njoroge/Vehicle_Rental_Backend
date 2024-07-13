import { Hono } from "hono"
import { usercervices, getusers, createusers, updateusers, deleteusers } from './usercontoller'
import { adminAuth, bothauth, userAuth } from '../middleware/bearAuth'
import { zValidator } from "@hono/zod-validator"
import { TUsers } from "../validatot"
export const userrouter = new Hono();
userrouter.get("/usersall", adminAuth, usercervices)
userrouter.get("/users/:id", bothauth, getusers)
userrouter.post("/usersadd", zValidator("json", TUsers, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}), createusers)
userrouter.put("/updateusers/:id", userAuth, updateusers)
userrouter.delete("/deleteusers/:id", bothauth, deleteusers)
