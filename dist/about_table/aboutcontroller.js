"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteabouts = exports.updateabouts = exports.createabouts = exports.getabout = exports.aboutservices = void 0;
const aboutservice_1 = require("./aboutservice");
const supercontroller_1 = require("../server/supercontroller");
const aboutservices = async (c) => {
    try {
        const books = await (0, aboutservice_1.aboutservice)();
        if (books == null || books.length == 0) {
            return c.text("user not found", 404);
        }
        return c.json(books, 200);
    }
    catch (err) {
        return c.json({ err: err?.message }, 400);
    }
};
exports.aboutservices = aboutservices;
exports.getabout = (0, supercontroller_1.getallController)(aboutservice_1.getaboutservice);
exports.createabouts = (0, supercontroller_1.createallController)(aboutservice_1.createabout);
exports.updateabouts = (0, supercontroller_1.updateallController)(aboutservice_1.getaboutservice, aboutservice_1.updateabout);
exports.deleteabouts = (0, supercontroller_1.deleteallController)(aboutservice_1.getaboutservice, aboutservice_1.deleteabout);
