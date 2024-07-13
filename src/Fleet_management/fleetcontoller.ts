import { fleetservice, getfleetservice, createfleet, updatefleet, deletefleet } from './fleetservice'
import { getallController, createallController, deleteallController, updateallController } from '../server/supercontroller'
import { Context } from 'hono'
export const fleetservices = async (c: Context) => {
    try {
        const books = await fleetservice()
        if (books == null || books.length == 0) {
            return c.text("user not found", 404)
        }
        return c.json(books, 200)
    }
    catch (err: any) {
        return c.json({ err: err?.message }, 400)
    }
}
export const getfleet = getallController(getfleetservice)
export const createfleets = createallController(createfleet)
export const updatefleets = updateallController(getfleetservice, updatefleet)
export const deletefleets = deleteallController(getfleetservice, deletefleet)