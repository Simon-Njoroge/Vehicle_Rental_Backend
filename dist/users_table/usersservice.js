"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteuser = exports.updateuser = exports.createuser = exports.getusersservice = exports.usersservice = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const usersservice = async (limit) => {
    if (limit) {
        return await db_1.db.query.users_table.findMany({
            limit: limit,
        });
    }
    return await db_1.db.query.users_table.findMany();
};
exports.usersservice = usersservice;
const getusersservice = async (id) => {
    return await db_1.db.query.users_table.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.users_table.user_id, id),
    });
};
exports.getusersservice = getusersservice;
const createuser = async (user) => {
    await db_1.db.insert(schema_1.users_table).values(user);
    return "ordermenu created successfiully";
};
exports.createuser = createuser;
const updateuser = async (id, use) => {
    await db_1.db.update(schema_1.users_table).set(use).where((0, drizzle_orm_1.eq)(schema_1.users_table.user_id, id));
    return "updated successfully";
};
exports.updateuser = updateuser;
const deleteuser = async (id) => {
    await db_1.db.delete(schema_1.users_table).where((0, drizzle_orm_1.eq)(schema_1.users_table.user_id, id));
    return "deleted successfully";
};
exports.deleteuser = deleteuser;
