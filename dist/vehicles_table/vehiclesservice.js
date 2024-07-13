"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteveh = exports.updateveh = exports.createvehicle = exports.getvehicleservice = exports.vehicleservice = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const vehicleservice = async (limit) => {
    if (limit) {
        return await db_1.db.query.vehicles_table.findMany({
            limit: limit,
        });
    }
    return await db_1.db.query.vehicles_table.findMany();
};
exports.vehicleservice = vehicleservice;
const getvehicleservice = async (id) => {
    return await db_1.db.query.vehicles_table.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.vehicles_table.vehicles_id, id),
    });
};
exports.getvehicleservice = getvehicleservice;
const createvehicle = async (Veh) => {
    await db_1.db.insert(schema_1.vehicles_table).values(Veh);
    return "ordermenu created successfiully";
};
exports.createvehicle = createvehicle;
const updateveh = async (id, veh1) => {
    await db_1.db.update(schema_1.vehicles_table).set(veh1).where((0, drizzle_orm_1.eq)(schema_1.vehicles_table.vehicles_id, id));
    return "updated successfully";
};
exports.updateveh = updateveh;
const deleteveh = async (id) => {
    await db_1.db.delete(schema_1.vehicles_table).where((0, drizzle_orm_1.eq)(schema_1.vehicles_table.vehicles_id, id));
    return "deleted successfully";
};
exports.deleteveh = deleteveh;
