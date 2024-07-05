import{assetsservices,getassets,createassetss,updateassetss,deleteassetss} from './assetscontroller'
import {Hono} from 'hono'


export const assetsrouters=new Hono();
assetsrouters.get("/assetsall",assetsservices)
assetsrouters.get("/asset/:id",getassets)
assetsrouters.post("/assetadd",createassetss)
assetsrouters.put("/updateassets/:id",updateassetss)
assetsrouters.delete("/deleteassets/:id",deleteassetss)