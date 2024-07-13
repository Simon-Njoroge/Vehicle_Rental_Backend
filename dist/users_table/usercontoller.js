"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteusers = exports.updateusers = exports.createusers = exports.getusers = exports.usercervices = void 0;
const usersservice_1 = require("./usersservice");
const supercontroller_1 = require("../server/supercontroller");
const usercervices = async (c) => {
    try {
        const books = await (0, usersservice_1.usersservice)();
        if (books == null || books.length == 0) {
            return c.text("user not found", 404);
        }
        return c.json(books, 200);
    }
    catch (err) {
        return c.json({ err: err?.message }, 400);
    }
};
exports.usercervices = usercervices;
exports.getusers = (0, supercontroller_1.getallController)(usersservice_1.getusersservice);
exports.createusers = (0, supercontroller_1.createallController)(usersservice_1.createuser);
exports.updateusers = (0, supercontroller_1.updateallController)(usersservice_1.getusersservice, usersservice_1.updateuser);
exports.deleteusers = (0, supercontroller_1.deleteallController)(usersservice_1.getusersservice, usersservice_1.deleteuser);
