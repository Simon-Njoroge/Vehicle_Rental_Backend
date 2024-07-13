"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletenav = exports.updatenav = exports.creatnav = exports.getnavservice = exports.navbarservice = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const navbarservice = async (limit) => {
    if (limit) {
        return await db_1.db.query.navbar_table.findMany({
            limit: limit,
        });
    }
    return await db_1.db.query.navbar_table.findMany();
};
exports.navbarservice = navbarservice;
const getnavservice = async (id) => {
    return await db_1.db.query.navbar_table.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.navbar_table.id, id),
    });
};
exports.getnavservice = getnavservice;
const creatnav = async (nav) => {
    await db_1.db.insert(schema_1.navbar_table).values(nav);
    return "ordermenu created successfiully";
};
exports.creatnav = creatnav;
const updatenav = async (id, navs) => {
    await db_1.db.update(schema_1.navbar_table).set(navs).where((0, drizzle_orm_1.eq)(schema_1.navbar_table.id, id));
    return "updated successfully";
};
exports.updatenav = updatenav;
const deletenav = async (id) => {
    await db_1.db.delete(schema_1.navbar_table).where((0, drizzle_orm_1.eq)(schema_1.navbar_table.id, id));
    return "deleted successfully";
};
exports.deletenav = deletenav;
