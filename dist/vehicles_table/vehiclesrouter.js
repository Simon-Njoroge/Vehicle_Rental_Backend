"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiclerouter = void 0;
const hono_1 = require("hono");
const vehiclescontroller_1 = require("./vehiclescontroller");
exports.Vehiclerouter = new hono_1.Hono();
exports.Vehiclerouter.get("/vehicleall", vehiclescontroller_1.vehicleservices);
exports.Vehiclerouter.get("/vehicle/:id", vehiclescontroller_1.getvehicle);
exports.Vehiclerouter.post("/vehicleadd", vehiclescontroller_1.createvehicles);
exports.Vehiclerouter.put("/updatevehicle/:id", vehiclescontroller_1.updatevehs);
exports.Vehiclerouter.delete("/deletevehicle/:id", vehiclescontroller_1.deletevehicles);
