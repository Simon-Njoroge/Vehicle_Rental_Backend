import "dotenv/config"
import {neon} from "@neondatabase/serverless"
import {drizzle, NeonHttpDatabase} from "drizzle-orm/neon-http"
import * as schema from "./schema"
const databaseUrl = process.env.DATABASE_URL as string
if(!databaseUrl) throw new Error("DATBASE_URL IS NOT SET")
const sql = neon(databaseUrl)

export const db: NeonHttpDatabase<typeof schema> = drizzle(sql,{schema,logger:true})