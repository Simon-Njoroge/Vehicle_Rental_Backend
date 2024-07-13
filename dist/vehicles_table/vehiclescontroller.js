"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletevehicles = exports.updatevehs = exports.createvehicles = exports.getvehicle = exports.vehicleservices = void 0;
const vehiclesservice_1 = require("./vehiclesservice");
const supercontroller_1 = require("../server/supercontroller");
const vehicleservices = async (c) => {
    try {
        const books = await (0, vehiclesservice_1.vehicleservice)();
        if (books == null || books.length == 0) {
            return c.text("user not found", 404);
        }
        return c.json(books, 200);
    }
    catch (err) {
        return c.json({ err: err?.message }, 400);
    }
};
exports.vehicleservices = vehicleservices;
exports.getvehicle = (0, supercontroller_1.getallController)(vehiclesservice_1.getvehicleservice);
exports.createvehicles = (0, supercontroller_1.createallController)(vehiclesservice_1.createvehicle);
exports.updatevehs = (0, supercontroller_1.updateallController)(vehiclesservice_1.getvehicleservice, vehiclesservice_1.updateveh);
exports.deletevehicles = (0, supercontroller_1.deleteallController)(vehiclesservice_1.getvehicleservice, vehiclesservice_1.deleteveh);
