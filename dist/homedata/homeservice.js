"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletehome = exports.updatehome = exports.createhome = exports.gethomeservice = exports.homeservice = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const homeservice = async (limit) => {
    if (limit) {
        return await db_1.db.query.Homedata2.findMany({
            limit: limit,
        });
    }
    return await db_1.db.query.Homedata2.findMany();
};
exports.homeservice = homeservice;
const gethomeservice = async (id) => {
    return await db_1.db.query.Homedata2.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.Homedata2.id, id),
    });
};
exports.gethomeservice = gethomeservice;
const createhome = async (hom) => {
    await db_1.db.insert(schema_1.Homedata2).values(hom);
    return "ordermenu created successfiully";
};
exports.createhome = createhome;
const updatehome = async (id, hm) => {
    await db_1.db.update(schema_1.Homedata2).set(hm).where((0, drizzle_orm_1.eq)(schema_1.Homedata2.id, id));
    return "updated successfully";
};
exports.updatehome = updatehome;
const deletehome = async (id) => {
    await db_1.db.delete(schema_1.Homedata2).where((0, drizzle_orm_1.eq)(schema_1.Homedata2.id, id));
    return "deleted successfully";
};
exports.deletehome = deletehome;
