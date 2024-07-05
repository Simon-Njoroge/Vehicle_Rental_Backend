import {assetsservice,getaboutassets,createassets,updateassets,deleteassets} from './assetsservice'
import {getallController,createallController,deleteallController,updateallController} from '../server/supercontroller'
import { Context } from 'hono'
export const assetsservices= async (c:Context)=>{
    try{
        const books = await assetsservice()
        if(books == null || books.length ==0){
            return c.text("user not found", 404)
        }
        return c.json(books,200)
    }
    catch(err:any){
        return c.json({err: err?.message},400)
    }
}
export const getassets=getallController(getaboutassets)
export const createassetss=createallController(createassets)
export const updateassetss=updateallController(getaboutassets,updateassets)
export const deleteassetss=deleteallController(getaboutassets,deleteassets)