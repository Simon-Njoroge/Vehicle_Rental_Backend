"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletebook = exports.updatebook = exports.createbook = exports.getbooking = exports.bookingservices = void 0;
const bookingsservice_1 = require("./bookingsservice");
const supercontroller_1 = require("../server/supercontroller");
const bookingservices = async (c) => {
    try {
        const books = await (0, bookingsservice_1.bookingservice)();
        if (books == null || books.length == 0) {
            return c.text("user not found", 404);
        }
        return c.json(books, 200);
    }
    catch (err) {
        return c.json({ err: err?.message }, 400);
    }
};
exports.bookingservices = bookingservices;
exports.getbooking = (0, supercontroller_1.getallController)(bookingsservice_1.getbookservice);
exports.createbook = (0, supercontroller_1.createallController)(bookingsservice_1.creatbooking);
exports.updatebook = (0, supercontroller_1.updateallController)(bookingsservice_1.getbookservice, bookingsservice_1.updatebooking);
exports.deletebook = (0, supercontroller_1.deleteallController)(bookingsservice_1.getbookservice, bookingsservice_1.deletebooking);
