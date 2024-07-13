"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteaboutuss = exports.updateaboutuss = exports.createaboutuss = exports.getaboutuss = exports.aboutusservices = void 0;
const aboutservice_1 = require("./aboutservice");
const supercontroller_1 = require("../server/supercontroller");
const aboutusservices = async (c) => {
    try {
        const books = await (0, aboutservice_1.aboutusservice)();
        if (books == null || books.length == 0) {
            return c.text("user not found", 404);
        }
        return c.json(books, 200);
    }
    catch (err) {
        return c.json({ err: err?.message }, 400);
    }
};
exports.aboutusservices = aboutusservices;
exports.getaboutuss = (0, supercontroller_1.getallController)(aboutservice_1.getaboutus);
exports.createaboutuss = (0, supercontroller_1.createallController)(aboutservice_1.createaboutus);
exports.updateaboutuss = (0, supercontroller_1.updateallController)(aboutservice_1.getaboutus, aboutservice_1.updateaboutus);
exports.deleteaboutuss = (0, supercontroller_1.deleteallController)(aboutservice_1.getaboutus, aboutservice_1.deleteaboutus);
