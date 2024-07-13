"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletenavbar = exports.updatenavbar = exports.createnavbar = exports.getnavbar = exports.navbarservices = void 0;
const navbar_service_1 = require("./navbar.service");
const supercontroller_1 = require("../server/supercontroller");
const navbarservices = async (c) => {
    try {
        const books = await (0, navbar_service_1.navbarservice)();
        if (books == null || books.length == 0) {
            return c.text("user not found", 404);
        }
        return c.json(books, 200);
    }
    catch (err) {
        return c.json({ err: err?.message }, 400);
    }
};
exports.navbarservices = navbarservices;
exports.getnavbar = (0, supercontroller_1.getallController)(navbar_service_1.getnavservice);
exports.createnavbar = (0, supercontroller_1.createallController)(navbar_service_1.creatnav);
exports.updatenavbar = (0, supercontroller_1.updateallController)(navbar_service_1.getnavservice, navbar_service_1.updatenav);
exports.deletenavbar = (0, supercontroller_1.deleteallController)(navbar_service_1.getnavservice, navbar_service_1.deletenav);
