"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteassets = exports.updateassets = exports.createassets = exports.getaboutassets = exports.assetsservice = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const assetsservice = async (limit) => {
    if (limit) {
        return await db_1.db.query.assets_table.findMany({
            limit: limit,
        });
    }
    return await db_1.db.query.assets_table.findMany();
};
exports.assetsservice = assetsservice;
const getaboutassets = async (id) => {
    return await db_1.db.query.assets_table.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.assets_table.assets_id, id),
    });
};
exports.getaboutassets = getaboutassets;
const createassets = async (assets) => {
    await db_1.db.insert(schema_1.assets_table).values(assets);
    return "ordermenu created successfiully";
};
exports.createassets = createassets;
const updateassets = async (id, assets) => {
    await db_1.db.update(schema_1.assets_table).set(assets).where((0, drizzle_orm_1.eq)(schema_1.assets_table.assets_id, id));
    return "updated successfully";
};
exports.updateassets = updateassets;
const deleteassets = async (id) => {
    await db_1.db.delete(schema_1.assets_table).where((0, drizzle_orm_1.eq)(schema_1.assets_table.assets_id, id));
    return "deleted successfully";
};
exports.deleteassets = deleteassets;
