import { eq, getOrderByOperators } from "drizzle-orm"
import { db } from '../drizzle/db'
import { vehicles_table, TIVeh, TSVeh, Vehicle_specification_table } from "../drizzle/schema"
import { Tvehspec,Tveh } from "../validatot"
export const vehicleservice = async (limit?: number) => {
   if (limit) {
      return await db.query.vehicles_table.findMany({
         limit: limit,
      });
   }
   return await db.query.vehicles_table.findMany({
      // columns:{
      //    rental_rate:true,
      //    availabillity: true,
      //    image: true,
      //    amount: true
      // },
      // with:{
      //    Vehicle_specification_table:{
      //       columns:{
      //          manufacturer: false,
      //          model: true,
      //          year: true,
      //          fuel_type: true,
      //          status: true,
      //          engine_capacity: true,
      //          transmission: true,
      //          seating_capacity: true,
      //          color: true,
      //          features:true
               
      //       }
      //    }
      //  }
   })
}
export const getvehicleservice = async (id: number) => {
   return await db.query.vehicles_table.findFirst({
      where: eq(vehicles_table.vehicles_id, id),
      // columns: {
      //    rental_rate: true,
      // },
      // with: {
      //    : {
      //       columns: {
      //       vehicle_id:false
      //       }
      //    }
      // }
   })
}

export const createVehicleWithSpecification = async (Vehiclespec: any, vehicle: any) => {
   console.log('Vehicle Spec:', Vehiclespec);
   console.log('Vehicle:', vehicle);

  
   Tvehspec.parse(Vehiclespec);
   Tveh.parse(vehicle);

  
   const newVehicleSpec = await db.insert(Vehicle_specification_table)
     .values(Vehiclespec)
     .returning({ id: Vehicle_specification_table.vehicle_id })
     .execute();

   const vehicleSpecId = newVehicleSpec[0].id;
   try {
     await db.insert(vehicles_table)
       .values({
         vehicles_id: vehicleSpecId,
         rental_rate: vehicle.rental_rate,
         availabillity:vehicle.availabillity,
         image: vehicle.image,
         amount: vehicle.amount
       })
       .execute();

     return 'Vehicle with specifications created successfully';
   } catch (error) {
     await db.delete(Vehicle_specification_table).where(eq(Vehicle_specification_table.vehicle_id, vehicleSpecId)).execute();
     throw new Error('Creation failed. Please try again.');
   }
 };

export const updateveh = async<T>(id: number, veh1: any): Promise<any> => {
   await db.update(vehicles_table).set(veh1).where(eq(vehicles_table.vehicles_id, id))
   return "updated successfully"
}

export const deleteveh = async<T>(id: number): Promise<any> => {
   await db.delete(vehicles_table).where(eq(vehicles_table.vehicles_id, id))
   return "deleted successfully"
}