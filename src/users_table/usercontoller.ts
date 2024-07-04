import{usersservice,getusersservice,createuser,updateuser,deleteuser} from './usersservice'
import {getallController,createallController,deleteallController,updateallController} from '../server/supercontroller'
import { Context } from "hono"
export const usercervices = async (c:Context)=>{
    try{
        const books = await usersservice()
        if(books == null || books.length ==0){
            return c.text("user not found", 404)
        }
        return c.json(books,200)
    }
    catch(err:any){
        return c.json({err: err?.message},400)
    }
}
export const getusers=getallController(getusersservice)
export const createusers=createallController(createuser)
export const updateusers=updateallController(getusersservice,updateuser)
export const deleteusers=deleteallController(getusersservice,deleteuser)