"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletefaq = exports.updatefaq = exports.createfaq = exports.getfaqs = exports.faqsservices = void 0;
const faqsservice_1 = require("./faqsservice");
const supercontroller_1 = require("../server/supercontroller");
const faqsservices = async (c) => {
    try {
        const books = await (0, faqsservice_1.faqsservice)();
        if (books == null || books.length == 0) {
            return c.text("user not found", 404);
        }
        return c.json(books, 200);
    }
    catch (err) {
        return c.json({ err: err?.message }, 400);
    }
};
exports.faqsservices = faqsservices;
exports.getfaqs = (0, supercontroller_1.getallController)(faqsservice_1.getfaqsservice);
exports.createfaq = (0, supercontroller_1.createallController)(faqsservice_1.createfaqs);
exports.updatefaq = (0, supercontroller_1.updateallController)(faqsservice_1.getfaqsservice, faqsservice_1.updatefaqs);
exports.deletefaq = (0, supercontroller_1.deleteallController)(faqsservice_1.getfaqsservice, faqsservice_1.deletefaqs);
