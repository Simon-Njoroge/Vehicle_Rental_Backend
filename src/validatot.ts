import { string, z } from "zod"

 export const TUsers =z.object({
    full_name: z.string(),
    email: z.string(),
    contact_phone: z.string(),
    address: z.string(), 
    role: z.string(),
  
 })
 export const  TAuth=z.object({

 password: z.string(),

 
})

export const Tlogin=z.object({
   email:z.string(),
   password:z.string()
})

export const Tpayment=z.object({
   payment_id:z.number(),
   booking_id: z.number(),
   amount: z.number(),
   payment_status: z.string(),
   payment_method: z.string(),
   transaction_id: z.number(),
   created_at: z.string(),
   updated_at: z.string(),
})


export const Tfleet=z.object({
   fleet_id:z.number(),
   vehicles_id: z.number(),
   acquisition_date: z.string(),
   description_rate: z.string(),
   current_value: z.string(),
   Maintenance_cost: z.number(),
   status: z.string(),
   created_at: z.string(),
   updated_at: z.string(),
})

export const  Tvehspec=z.object({
   manufacturer:z.string(), 
   model: z.string(),
   year: z.string(),
   fuel_type: z.string(),
   status: z.string(),
   engine_capacity: z.string(),
   transmission: z.string(),
   seating_capacity: z.string(),
   color: z.string(),
   features: z.string(),
   image: z.string(),
   rating: z.string(),
   amount: z.number(),
})

export const Tcustomer=z.object({
   ticket_id: z.number(),
   user_id: z.number(),
   subject: z.string(),
   model: z.string(),
   description: z.string(),
   status: z.string(),
   created_at: z.string(),
   updated_at: z.string(),
})

export const Tveh=z.object({
   rental_rate: z.string().optional(),
   availabillity:z.boolean().optional(),
   image:z.string().optional(),
   amount:z.number().optional()
})

export const Tbtable=z.object({
   booking_id: z.number().optional(),
   user_id: z.number().optional(),
   vehicle_id: z.number().optional(),
   location_id: z.number().optional(),
   book_date: z.string().optional(),
   return_date: z.string().optional(),
   total_amount: z.number().optional(),
   booking_status: z.string().optional(),
   created_at: z.string().optional(),
   updated_at: z.string().optional(),
})

export const TLoc=z.object({
   Location_id: z.number(),
   name: z.string(),
   address: z.string(),
   contact_phone: z.string(),
   created_at: z.string(),
   updated_at: z.string(),
})