"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletevehspec = exports.updatespecs = exports.createspecs = exports.getvehiclespec = exports.vehiclespecervices = void 0;
const vehicle_specservice_1 = require("./vehicle_specservice");
const supercontroller_1 = require("../server/supercontroller");
const vehiclespecervices = async (c) => {
    try {
        const books = await (0, vehicle_specservice_1.vehiclespecservice)();
        if (books == null || books.length == 0) {
            return c.text("user not found", 404);
        }
        return c.json(books, 200);
    }
    catch (err) {
        return c.json({ err: err?.message }, 400);
    }
};
exports.vehiclespecervices = vehiclespecervices;
exports.getvehiclespec = (0, supercontroller_1.getallController)(vehicle_specservice_1.getvehiclespecservice);
exports.createspecs = (0, supercontroller_1.createallController)(vehicle_specservice_1.createspecvehicle);
exports.updatespecs = (0, supercontroller_1.updateallController)(vehicle_specservice_1.getvehiclespecservice, vehicle_specservice_1.updatespecveh);
exports.deletevehspec = (0, supercontroller_1.deleteallController)(vehicle_specservice_1.getvehiclespecservice, vehicle_specservice_1.deletespecveh);
