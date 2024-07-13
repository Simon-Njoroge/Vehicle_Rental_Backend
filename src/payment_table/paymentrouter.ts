import { Hono } from "hono"
import { paymentservices, getpayment, createpayments, updatepayments, deletepayments, Makepaymnets } from './paymentcontroller'
import { adminAuth } from '../middleware/bearAuth'
import { zValidator } from "@hono/zod-validator"
import { Tpayment } from "../validatot"
export const paymentrouter = new Hono();
paymentrouter.get("/paymentall", adminAuth, paymentservices)
paymentrouter.get("/payment/:id", getpayment)
paymentrouter.post("/paymentadd", zValidator("json", Tpayment, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}), createpayments)
paymentrouter.put("/updatepayment/:id", updatepayments)
paymentrouter.delete("/deletepayment/:id", deletepayments)
paymentrouter.post("/payments", Makepaymnets)