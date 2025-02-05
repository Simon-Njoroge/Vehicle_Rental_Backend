"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.faqsrouters = void 0;
const hono_1 = require("hono");
const faqscontroller_1 = require("./faqscontroller");
exports.faqsrouters = new hono_1.Hono();
exports.faqsrouters.get("/faqsall", faqscontroller_1.faqsservices);
exports.faqsrouters.get("/faqs/:id", faqscontroller_1.getfaqs);
exports.faqsrouters.post("/homeadd", faqscontroller_1.createfaq);
exports.faqsrouters.put("/updatefaq/:id", faqscontroller_1.updatefaq);
exports.faqsrouters.delete("/deletefaq/:id", faqscontroller_1.deletefaq);
