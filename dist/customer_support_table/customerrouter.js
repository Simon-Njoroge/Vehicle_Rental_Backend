"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerrouters = void 0;
const hono_1 = require("hono");
const customercontoller_1 = require("./customercontoller");
exports.customerrouters = new hono_1.Hono();
exports.customerrouters.get("/suppll", customercontoller_1.customerservices);
exports.customerrouters.get("/supp/:id", customercontoller_1.getcustomersup);
exports.customerrouters.post("/suppadd", customercontoller_1.createcustm);
exports.customerrouters.put("/updatesupp/:id", customercontoller_1.updatecust);
exports.customerrouters.delete("/deletesupp/:id", customercontoller_1.deletecust);
