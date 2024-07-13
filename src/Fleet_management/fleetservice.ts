import { eq, getOrderByOperators } from "drizzle-orm"
import { db } from '../drizzle/db'
import { Fleet_management_table, TIFleetm, TSFleetm } from "../drizzle/schema"

export const fleetservice = async (limit?: number) => {
   if (limit) {
      return await db.query.Fleet_management_table.findMany({
         limit: limit,
      });
   }
   return await db.query.Fleet_management_table.findMany({
      columns: {
         fleet_id: false
      },

   })
}
export const getfleetservice = async (id: number) => {
   return await db.query.Fleet_management_table.findFirst({
      where: eq(Fleet_management_table.fleet_id, id),

   })
}

export const createfleet = async<T>(fleet: TIFleetm): Promise<any> => {
   await db.insert(Fleet_management_table).values(fleet)
   return "ordermenu created successfiully"
}

export const updatefleet = async<T>(id: number, flee: TIFleetm): Promise<any> => {
   await db.update(Fleet_management_table).set(flee).where(eq(Fleet_management_table.fleet_id, id))
   return "updated successfully"
}

export const deletefleet = async<T>(id: number): Promise<any> => {
   await db.delete(Fleet_management_table).where(eq(Fleet_management_table.fleet_id, id))
   return "deleted successfully"
}