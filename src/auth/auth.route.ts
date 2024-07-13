import { Hono } from "hono";
import {registerauth,loginuser} from './auth.controller'

export const authRouter = new Hono();
authRouter.post('/register', registerauth)

authRouter.post('/login',loginuser)