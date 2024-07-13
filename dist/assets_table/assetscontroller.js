"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteassetss = exports.updateassetss = exports.createassetss = exports.getassets = exports.assetsservices = void 0;
const assetsservice_1 = require("./assetsservice");
const supercontroller_1 = require("../server/supercontroller");
const assetsservices = async (c) => {
    try {
        const books = await (0, assetsservice_1.assetsservice)();
        if (books == null || books.length == 0) {
            return c.text("user not found", 404);
        }
        return c.json(books, 200);
    }
    catch (err) {
        return c.json({ err: err?.message }, 400);
    }
};
exports.assetsservices = assetsservices;
exports.getassets = (0, supercontroller_1.getallController)(assetsservice_1.getaboutassets);
exports.createassetss = (0, supercontroller_1.createallController)(assetsservice_1.createassets);
exports.updateassetss = (0, supercontroller_1.updateallController)(assetsservice_1.getaboutassets, assetsservice_1.updateassets);
exports.deleteassetss = (0, supercontroller_1.deleteallController)(assetsservice_1.getaboutassets, assetsservice_1.deleteassets);
