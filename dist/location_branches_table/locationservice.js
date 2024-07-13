"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletelocation = exports.updateLocation = exports.createlocations = exports.getlocationservice = exports.locationservice = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const locationservice = async (limit) => {
    if (limit) {
        return await db_1.db.query.Location_and_Branches_table.findMany({
            limit: limit,
        });
    }
    return await db_1.db.query.Location_and_Branches_table.findMany();
};
exports.locationservice = locationservice;
const getlocationservice = async (id) => {
    return await db_1.db.query.Location_and_Branches_table.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.Location_and_Branches_table.Location_id, id),
    });
};
exports.getlocationservice = getlocationservice;
const createlocations = async (loc) => {
    await db_1.db.insert(schema_1.Location_and_Branches_table).values(loc);
    return "ordermenu created successfiully";
};
exports.createlocations = createlocations;
const updateLocation = async (id, locs) => {
    await db_1.db.update(schema_1.Location_and_Branches_table).set(locs).where((0, drizzle_orm_1.eq)(schema_1.Location_and_Branches_table, id));
    return "updated successfully";
};
exports.updateLocation = updateLocation;
const deletelocation = async (id) => {
    await db_1.db.delete(schema_1.Location_and_Branches_table).where((0, drizzle_orm_1.eq)(schema_1.Location_and_Branches_table.Location_id, id));
    return "deleted successfully";
};
exports.deletelocation = deletelocation;
