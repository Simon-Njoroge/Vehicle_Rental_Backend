"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletelocations = exports.updatelocation = exports.createlocation = exports.getlocations = exports.locationservices = void 0;
const locationservice_1 = require("./locationservice");
const supercontroller_1 = require("../server/supercontroller");
const locationservices = async (c) => {
    try {
        const books = await (0, locationservice_1.locationservice)();
        if (books == null || books.length == 0) {
            return c.text("user not found", 404);
        }
        return c.json(books, 200);
    }
    catch (err) {
        return c.json({ err: err?.message }, 400);
    }
};
exports.locationservices = locationservices;
exports.getlocations = (0, supercontroller_1.getallController)(locationservice_1.getlocationservice);
exports.createlocation = (0, supercontroller_1.createallController)(locationservice_1.createlocations);
exports.updatelocation = (0, supercontroller_1.updateallController)(locationservice_1.getlocationservice, locationservice_1.updateLocation);
exports.deletelocations = (0, supercontroller_1.deleteallController)(locationservice_1.getlocationservice, locationservice_1.deletelocation);
