"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletefleet = exports.updatefleet = exports.createfleet = exports.getfleetservice = exports.fleetservice = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const fleetservice = async (limit) => {
    if (limit) {
        return await db_1.db.query.Fleet_management_table.findMany({
            limit: limit,
        });
    }
    return await db_1.db.query.Fleet_management_table.findMany();
};
exports.fleetservice = fleetservice;
const getfleetservice = async (id) => {
    return await db_1.db.query.Fleet_management_table.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.Fleet_management_table.fleet_id, id),
    });
};
exports.getfleetservice = getfleetservice;
const createfleet = async (fleet) => {
    await db_1.db.insert(schema_1.Fleet_management_table).values(fleet);
    return "ordermenu created successfiully";
};
exports.createfleet = createfleet;
const updatefleet = async (id, flee) => {
    await db_1.db.update(schema_1.Fleet_management_table).set(flee).where((0, drizzle_orm_1.eq)(schema_1.Fleet_management_table.fleet_id, id));
    return "updated successfully";
};
exports.updatefleet = updatefleet;
const deletefleet = async (id) => {
    await db_1.db.delete(schema_1.Fleet_management_table).where((0, drizzle_orm_1.eq)(schema_1.Fleet_management_table.fleet_id, id));
    return "deleted successfully";
};
exports.deletefleet = deletefleet;
