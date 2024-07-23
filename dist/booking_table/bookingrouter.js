"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingrouters = void 0;
const hono_1 = require("hono");
const bookingcontroller_1 = require("./bookingcontroller");
exports.bookingrouters = new hono_1.Hono();
exports.bookingrouters.get("/bookall", bookingcontroller_1.bookingservices);
exports.bookingrouters.get("/book/:id", bookingcontroller_1.getbooking);
exports.bookingrouters.post("/bookadd", bookingcontroller_1.createbook);
exports.bookingrouters.put("/updatebook/:id", bookingcontroller_1.updatebook);
exports.bookingrouters.delete("/deletebook/:id", bookingcontroller_1.deletebook);