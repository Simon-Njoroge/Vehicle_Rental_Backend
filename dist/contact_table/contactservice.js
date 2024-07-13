"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletecons = exports.updatecontact = exports.createcontact = exports.getcontactservice = exports.contactservice = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const contactservice = async (limit) => {
    if (limit) {
        return await db_1.db.query.contact_table.findMany({
            limit: limit,
        });
    }
    return await db_1.db.query.contact_table.findMany();
};
exports.contactservice = contactservice;
const getcontactservice = async (id) => {
    return await db_1.db.query.contact_table.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.contact_table.id, id),
    });
};
exports.getcontactservice = getcontactservice;
const createcontact = async (con) => {
    await db_1.db.insert(schema_1.contact_table).values(con);
    return "ordermenu created successfiully";
};
exports.createcontact = createcontact;
const updatecontact = async (id, cons) => {
    await db_1.db.update(schema_1.contact_table).set(cons).where((0, drizzle_orm_1.eq)(schema_1.contact_table.id, id));
    return "updated successfully";
};
exports.updatecontact = updatecontact;
const deletecons = async (id) => {
    await db_1.db.delete(schema_1.contact_table).where((0, drizzle_orm_1.eq)(schema_1.contact_table.id, id));
    return "deleted successfully";
};
exports.deletecons = deletecons;
