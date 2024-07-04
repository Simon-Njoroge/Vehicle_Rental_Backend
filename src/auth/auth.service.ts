import{VehicleRentalauth,TSAuth,TIAuth} from '../drizzle/schema'
import {db} from '../drizzle/db'
import {sql} from "drizzle-orm"



export const createauthservice = async (auth: TIAuth): Promise< string | null> => {
    await db.insert(VehicleRentalauth).values(auth)
    return "owner created successfully"
}
        
export const authloginservice = async<T>(auths: TIAuth):Promise<string | any> =>{
 const {authname,password} =auths;
 return db.query.VehicleRentalauth.findFirst({
    columns:{
        authname: true,
        role:true,
        password:true
    }, where: sql`${VehicleRentalauth.authname}=${authname}`,
    with:{
        authss:{
        columns:{
            id:true,
            users_id:true,
            fullname:true,
            email:true,
            role:true
        }
    }
}
 })
}