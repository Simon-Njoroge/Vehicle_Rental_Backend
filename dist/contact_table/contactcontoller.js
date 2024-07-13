"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletevehicles = exports.updatevehs = exports.createvehicles = exports.getvehicle = exports.contactserviceS = void 0;
const contactservice_1 = require("./contactservice");
const supercontroller_1 = require("../server/supercontroller");
const contactserviceS = async (c) => {
    try {
        const books = await (0, contactservice_1.contactservice)();
        if (books == null || books.length == 0) {
            return c.text("user not found", 404);
        }
        return c.json(books, 200);
    }
    catch (err) {
        return c.json({ err: err?.message }, 400);
    }
};
exports.contactserviceS = contactserviceS;
exports.getvehicle = (0, supercontroller_1.getallController)(contactservice_1.getcontactservice);
exports.createvehicles = (0, supercontroller_1.createallController)(contactservice_1.createcontact);
exports.updatevehs = (0, supercontroller_1.updateallController)(contactservice_1.getcontactservice, contactservice_1.updatecontact);
exports.deletevehicles = (0, supercontroller_1.deleteallController)(contactservice_1.getcontactservice, contactservice_1.deletecons);
