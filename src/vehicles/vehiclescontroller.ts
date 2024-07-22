import { vehicleservice, getvehicleservice, createVehicleWithSpecification, updateveh, deleteveh } from "./vehiclesservice"
import { getallController, createallController, deleteallController, updateallController } from '../server/supercontroller'
import { Context } from "hono"
import { vehicles_table } from "../drizzle/schema"
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
export const createVehicleWithSpecController = async (c: Context) => {
    try {
      const requestBody = await c.req.json();
      const Vehiclespec = requestBody.Vehiclespec;
      const vehicle = requestBody.vehicle;
 
      if (!Vehiclespec || !vehicle) {
        throw new Error('vehicleSpec and vehicle are required.');
      }
 
      console.log('Received vehicleSpec:', Vehiclespec);
      console.log('Received vehicle:', vehicle);
 
      const result = await createVehicleWithSpecification(Vehiclespec, vehicle);
      return c.json(result, 201);
    } catch (error: any) {
      console.error('Error in createVehicleWithSpecController:', error);
      return c.json({ error: error.message }, 500);
    }
  };
export const updatevehs = updateallController(getvehicleservice, updateveh)
export const deletevehicles = deleteallController(getvehicleservice, deleteveh)