"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletefleets = exports.updatefleets = exports.createfleets = exports.getfleet = exports.fleetservices = void 0;
const fleetservice_1 = require("./fleetservice");
const supercontroller_1 = require("../server/supercontroller");
const fleetservices = async (c) => {
    try {
        const books = await (0, fleetservice_1.fleetservice)();
        if (books == null || books.length == 0) {
            return c.text("user not found", 404);
        }
        return c.json(books, 200);
    }
    catch (err) {
        return c.json({ err: err?.message }, 400);
    }
};
exports.fleetservices = fleetservices;
exports.getfleet = (0, supercontroller_1.getallController)(fleetservice_1.getfleetservice);
exports.createfleets = (0, supercontroller_1.createallController)(fleetservice_1.createfleet);
exports.updatefleets = (0, supercontroller_1.updateallController)(fleetservice_1.getfleetservice, fleetservice_1.updatefleet);
exports.deletefleets = (0, supercontroller_1.deleteallController)(fleetservice_1.getfleetservice, fleetservice_1.deletefleet);
