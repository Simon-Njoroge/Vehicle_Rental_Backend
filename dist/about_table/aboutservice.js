"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteabout = exports.updateabout = exports.createabout = exports.getaboutservice = exports.aboutservice = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const aboutservice = async (limit) => {
    if (limit) {
        return await db_1.db.query.about_leadership_table.findMany({
            limit: limit,
        });
    }
    return await db_1.db.query.about_leadership_table.findMany();
};
exports.aboutservice = aboutservice;
const getaboutservice = async (id) => {
    return await db_1.db.query.about_leadership_table.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.about_leadership_table.id, id),
    });
};
exports.getaboutservice = getaboutservice;
const createabout = async (about) => {
    await db_1.db.insert(schema_1.about_leadership_table).values(about);
    return "ordermenu created successfiully";
};
exports.createabout = createabout;
const updateabout = async (id, abt) => {
    await db_1.db.update(schema_1.about_leadership_table).set(abt).where((0, drizzle_orm_1.eq)(schema_1.about_leadership_table, id));
    return "updated successfully";
};
exports.updateabout = updateabout;
const deleteabout = async (id) => {
    await db_1.db.delete(schema_1.about_leadership_table).where((0, drizzle_orm_1.eq)(schema_1.about_leadership_table.id, id));
    return "deleted successfully";
};
exports.deleteabout = deleteabout;
