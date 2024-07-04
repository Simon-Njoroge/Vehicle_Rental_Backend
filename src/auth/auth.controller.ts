// import { Context } from "hono";
// import {createauthservice,authloginservice} from './auth.service'
// import bcrypt from 'bcrypt'
// import "dotenv/config" 
// import{sign} from "hono/jwt"
// export const registerauth = async(c:Context)=>{
//     try{
//         const auth=await c.req.json();
//         const pass =auth.password;
//         const hashedPassword = await bcrypt.hash(pass,10);
//         auth.password = hashedPassword
//         const createauth= await createauthservice(auth);
//         if(!createauth){
//             return c.text("Failed to create user", 400)
//         }

//         return c.json({msg: createauth},201)
//     }
//     catch(err:any){
//         return c.json({err: err?.message},400)
// }}
// export const loginauth = async(c:Context)=>{
//     try{
//         const auth=await c.req.json();
//         const authlogin = await authloginservice(auth);
//         const authmatch= await bcrypt.compare(auth.password as string , authlogin?.password as string)
//         if(!authmatch){
//             return c.text("Invalid credentials", 401)
//         }else{ 
//         let payload ={
//             authname: authlogin?.authname,
//             role: authlogin?.role,
//             authid: authlogin?.auth?.user_id,
//             exp: Math.floor(Date.now() / 1000 +(60*180))   
//         }
//         let secret = process.env.JWT_SECRET as string;
//         const token = await sign(payload,secret)
//         let password = authlogin?.password;
//         let auth = authlogin?.auth;
//         let role =authlogin?.role;
//         let passsword = authlogin?.password;

//         return c.json({token,auth:{role,auth ,passsword}},200)
//     } 
//         return c.json({auth:authlogin, match: authmatch},200)
//         console.log(authlogin)
//     }
//     catch (err: any){
//         return c.json({err: err?.message},400)
//     }
// }