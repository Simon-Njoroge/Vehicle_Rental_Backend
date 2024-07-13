"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_server_1 = require("@hono/node-server");
const hono_1 = require("hono");
const vehiclesrouter_1 = require("./vehicles_table/vehiclesrouter");
const vehicle_specrouter_1 = require("./vehicle_specification_table/vehicle_specrouter");
const userrouter_1 = require("./users_table/userrouter");
const paymentrouter_1 = require("./payment_table/paymentrouter");
const navbarrouter_1 = require("./navbar_table/navbarrouter");
const locationrouter_1 = require("./location_branches_table/locationrouter");
const homerouter_1 = require("./homedata/homerouter");
const fleetrouter_1 = require("./Fleet_management_table/fleetrouter");
const faqsrouter_1 = require("./faqs_table/faqsrouter");
const customerrouter_1 = require("./customer_support_table/customerrouter");
const contactrouter_1 = require("./contact_table/contactrouter");
const bookingrouter_1 = require("./booking_table/bookingrouter");
const aboutrouter_1 = require("./about_table/aboutrouter");
const assetsrouter_1 = require("./assets_table/assetsrouter");
const aboutrouter_2 = require("./about_us_table/aboutrouter");
const cors_1 = require("hono/cors");
const auth_route_1 = require("./auth/auth.route");
const app = new hono_1.Hono();
app.use('/api/*', (0, cors_1.cors)());
app.get('/', (c) => {
    return c.text('Hello Hono!');
});
app.route("/api", vehiclesrouter_1.Vehiclerouter);
app.route("/api", vehicle_specrouter_1.Vehiclespecrouter);
app.route("/api", userrouter_1.userrouter);
app.route("/api", paymentrouter_1.paymentrouter);
app.route("/api", navbarrouter_1.navbarrouter);
app.route("/api", locationrouter_1.locationrouter);
app.route("/api", homerouter_1.homerouters);
app.route("/api", fleetrouter_1.fleetrouters);
app.route("api", faqsrouter_1.faqsrouters);
app.route("/api", customerrouter_1.customerrouters);
app.route('/api', contactrouter_1.contactrouters);
app.route('/api', bookingrouter_1.bookingrouters);
app.route("/api", aboutrouter_1.aboutrouters);
app.route("/api", assetsrouter_1.assetsrouters);
app.route("/api", aboutrouter_2.aboutusrouter);
app.route("api/auth", auth_route_1.authRouter);
const port = 8000;
console.log(`Server is running on port ${port}`);
(0, node_server_1.serve)({
    fetch: app.fetch,
    port: Number(process.env.PORT)
});
