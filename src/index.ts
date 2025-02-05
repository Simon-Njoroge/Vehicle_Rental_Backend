import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { Vehiclerouter } from './vehicles/vehiclesrouter'
import {Vehiclespecrouter} from './vehicle_specification/vehicle_specrouter'
import {userrouter} from "./users_table/userrouter"
import {paymentrouter} from "./payment_table/paymentrouter"
import{navbarrouter} from "./navbar_table/navbarrouter"
import {locationrouter} from "./location_branches/locationrouter"
import {homerouters} from "./homedata/homerouter"
import {fleetrouters} from "./Fleet_management/fleetrouter"
import{faqsrouters} from "./faqs_table/faqsrouter"
import{customerrouters} from "./customer_support/customerrouter"
import{contactrouters} from "./contact_table/contactrouter"
import{bookingrouters} from './booking/bookingrouter'
import {aboutrouters} from "./about/aboutrouter"
import {assetsrouters} from "./assets/assetsrouter"
import {aboutusrouter} from './about_us/aboutrouter'
import { cors } from 'hono/cors'
import {authRouter} from './auth/auth.route'
const app = new Hono()

app.use('/api/*', cors())
app.get('/', (c) => {
  return c.text('Hello Hono!')
})
app.route("/api",Vehiclerouter)
app.route("/api",Vehiclespecrouter)
app.route("/api",userrouter)
app.route("/api",paymentrouter)
app.route("/api",navbarrouter)
app.route("/api",locationrouter)
app.route("/api",homerouters)
app.route("/api",fleetrouters)
app.route("api",faqsrouters)
app.route("/api",customerrouters)
app.route('/api',contactrouters)
app.route('/api',bookingrouters)
app.route("/api",aboutrouters)
app.route("/api",assetsrouters)
app.route("/api",aboutusrouter)
app.route("api/auth",authRouter)
const port = 8000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT)
})
