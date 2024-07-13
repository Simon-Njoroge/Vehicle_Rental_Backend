"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletepayments = exports.updatepayments = exports.createpayments = exports.getpayment = exports.paymentservices = void 0;
const paymentservice_1 = require("./paymentservice");
const supercontroller_1 = require("../server/supercontroller");
const paymentservices = async (c) => {
    try {
        const books = await (0, paymentservice_1.paymentservice)();
        if (books == null || books.length == 0) {
            return c.text("user not found", 404);
        }
        return c.json(books, 200);
    }
    catch (err) {
        return c.json({ err: err?.message }, 400);
    }
};
exports.paymentservices = paymentservices;
exports.getpayment = (0, supercontroller_1.getallController)(paymentservice_1.getpaymentservice);
exports.createpayments = (0, supercontroller_1.createallController)(paymentservice_1.createpayment);
exports.updatepayments = (0, supercontroller_1.updateallController)(paymentservice_1.getpaymentservice, paymentservice_1.updatepayment);
exports.deletepayments = (0, supercontroller_1.deleteallController)(paymentservice_1.getpaymentservice, paymentservice_1.deletepayment);
