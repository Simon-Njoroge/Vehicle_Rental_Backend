"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletecust = exports.updatecust = exports.createcustm = exports.getcustomersup = exports.customerservices = void 0;
const customerservice_1 = require("./customerservice");
const supercontroller_1 = require("../server/supercontroller");
const customerservices = async (c) => {
    try {
        const books = await (0, customerservice_1.customerservice)();
        if (books == null || books.length == 0) {
            return c.text("user not found", 404);
        }
        return c.json(books, 200);
    }
    catch (err) {
        return c.json({ err: err?.message }, 400);
    }
};
exports.customerservices = customerservices;
exports.getcustomersup = (0, supercontroller_1.getallController)(customerservice_1.getcustomerservice);
exports.createcustm = (0, supercontroller_1.createallController)(customerservice_1.createcustmer);
exports.updatecust = (0, supercontroller_1.updateallController)(customerservice_1.getcustomerservice, customerservice_1.updatecustomer);
exports.deletecust = (0, supercontroller_1.deleteallController)(customerservice_1.getcustomerservice, customerservice_1.deletecustomer);
