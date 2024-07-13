"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletespecveh = exports.updatespecveh = exports.createspecvehicle = exports.getvehiclespecservice = exports.vehiclespecservice = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const vehiclespecservice = async (limit) => {
    if (limit) {
        return await db_1.db.query.Vehicle_specification_table.findMany({
            limit: limit,
        });
    }
    return await db_1.db.query.Vehicle_specification_table.findMany();
};
exports.vehiclespecservice = vehiclespecservice;
const getvehiclespecservice = async (id) => {
    return await db_1.db.query.Vehicle_specification_table.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.Vehicle_specification_table.vehiclespec_id, id),
    });
};
exports.getvehiclespecservice = getvehiclespecservice;
const createspecvehicle = async (Vehs) => {
    await db_1.db.insert(schema_1.Vehicle_specification_table).values(Vehs);
    return "ordermenu created successfiully";
};
exports.createspecvehicle = createspecvehicle;
const updatespecveh = async (id, vehs) => {
    await db_1.db.update(schema_1.Vehicle_specification_table).set(vehs).where((0, drizzle_orm_1.eq)(schema_1.Vehicle_specification_table.vehiclespec_id, id));
    return "updated successfully";
};
exports.updatespecveh = updatespecveh;
const deletespecveh = async (id) => {
    await db_1.db.delete(schema_1.Vehicle_specification_table).where((0, drizzle_orm_1.eq)(schema_1.Vehicle_specification_table, id));
    return "deleted successfully";
};
exports.deletespecveh = deletespecveh;
