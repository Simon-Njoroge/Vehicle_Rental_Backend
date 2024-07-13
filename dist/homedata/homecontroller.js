"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletehomes = exports.updatehomes = exports.createhomes = exports.gethome = exports.homeservices = void 0;
const homeservice_1 = require("./homeservice");
const supercontroller_1 = require("../server/supercontroller");
const homeservices = async (c) => {
    try {
        const books = await (0, homeservice_1.homeservice)();
        if (books == null || books.length == 0) {
            return c.text("user not found", 404);
        }
        return c.json(books, 200);
    }
    catch (err) {
        return c.json({ err: err?.message }, 400);
    }
};
exports.homeservices = homeservices;
exports.gethome = (0, supercontroller_1.getallController)(homeservice_1.gethomeservice);
exports.createhomes = (0, supercontroller_1.createallController)(homeservice_1.createhome);
exports.updatehomes = (0, supercontroller_1.updateallController)(homeservice_1.gethomeservice, homeservice_1.updatehome);
exports.deletehomes = (0, supercontroller_1.deleteallController)(homeservice_1.gethomeservice, homeservice_1.deletehome);
