import { eq, getOrderByOperators } from "drizzle-orm"
import { db } from '../drizzle/db'
import { users_table, TIuser, Tsuser } from "../drizzle/schema"

export const usersservice = async (limit?: number) => {
   if (limit) {
      return await db.query.users_table.findMany({
         limit: limit,
      });
   }
   return await db.query.users_table.findMany({
      columns: {
         user_id: false,
      }
   })
}
export const getusersservice = async (id: number) => {
   return await db.query.users_table.findFirst({
      where: eq(users_table.user_id, id),

   })
}

export const createuser = async<T>(user: TIuser): Promise<any> => {
   await db.insert(users_table).values(user)
   return "ordermenu created successfiully"
}

export const updateuser = async<T>(id: number, use: TIuser): Promise<any> => {
   await db.update(users_table).set(use).where(eq(users_table.user_id, id))
   return "updated successfully"
}

export const deleteuser = async<T>(id: number): Promise<any> => {
   await db.delete(users_table).where(eq(users_table.user_id, id))
   return "deleted successfully"
}