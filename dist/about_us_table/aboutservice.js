"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteaboutus = exports.updateaboutus = exports.createaboutus = exports.getaboutus = exports.aboutusservice = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const aboutusservice = async (limit) => {
    if (limit) {
        return await db_1.db.query.aboutus_table.findMany({
            limit: limit,
        });
    }
    return await db_1.db.query.aboutus_table.findMany();
};
exports.aboutusservice = aboutusservice;
const getaboutus = async (id) => {
    return await db_1.db.query.aboutus_table.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.aboutus_table.id, id),
    });
};
exports.getaboutus = getaboutus;
const createaboutus = async (about) => {
    await db_1.db.insert(schema_1.aboutus_table).values(about);
    return "ordermenu created successfiully";
};
exports.createaboutus = createaboutus;
const updateaboutus = async (id, assets) => {
    await db_1.db.update(schema_1.aboutus_table).set(assets).where((0, drizzle_orm_1.eq)(schema_1.aboutus_table.id, id));
    return "updated successfully";
};
exports.updateaboutus = updateaboutus;
const deleteaboutus = async (id) => {
    await db_1.db.delete(schema_1.aboutus_table).where((0, drizzle_orm_1.eq)(schema_1.aboutus_table.id, id));
    return "deleted successfully";
};
exports.deleteaboutus = deleteaboutus;
