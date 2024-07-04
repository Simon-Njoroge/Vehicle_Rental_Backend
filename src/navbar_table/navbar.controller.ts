import {navbarservice,getnavservice,creatnav,updatenav,deletenav} from'./navbar.service'
import {getallController,createallController,deleteallController,updateallController} from '../server/supercontroller'
import {Context} from "hono"
export const navbarservices = async (c:Context)=>{
    try{
        const books = await navbarservice()
        if(books == null || books.length ==0){
            return c.text("user not found", 404)
        }
        return c.json(books,200)
    }
    catch(err:any){
        return c.json({err: err?.message},400)
    }
}
export const getnavbar=getallController(getnavservice)
export const createnavbar=createallController(creatnav)
export const updatenavbar=updateallController(getnavservice,updatenav)
export const deletenavbar=deleteallController(getnavservice,deletenav)