import {Hono} from "hono"
import {customerservices,getcustomersup,createcustm,updatecust,deletecust} from './customercontoller'

export const customerrouters=new Hono();
customerrouters.get("/suppll",customerservices)
customerrouters.get("/supp/:id",getcustomersup)
customerrouters.post("/suppadd",createcustm)
customerrouters.put("/updatesupp/:id",updatecust)
customerrouters.delete("/deletesupp/:id",deletecust)