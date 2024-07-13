import { vehicleservice, getvehicleservice, createvehicle, updateveh, deleteveh } from "./vehiclesservice"
import { getallController, createallController, deleteallController, updateallController } from '../server/supercontroller'
import { Context } from "hono"
export const vehicleservices = async (c: Context) => {
    try {
        const books = await vehicleservice()
        if (books == null || books.length == 0) {
            return c.text("user not found", 404)
        }
        return c.json(books, 200)
    }
    catch (err: any) {
        return c.json({ err: err?.message }, 400)
    }
}
export const getvehicle = getallController(getvehicleservice)
export const createvehicles = createallController(createvehicle)
export const updatevehs = updateallController(getvehicleservice, updateveh)
export const deletevehicles = deleteallController(getvehicleservice, deleteveh)