"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletecustomer = exports.updatecustomer = exports.createcustmer = exports.getcustomerservice = exports.customerservice = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const customerservice = async (limit) => {
    if (limit) {
        return await db_1.db.query.Customer_support_Tickets_table.findMany({
            limit: limit,
        });
    }
    return await db_1.db.query.Customer_support_Tickets_table.findMany();
};
exports.customerservice = customerservice;
const getcustomerservice = async (id) => {
    return await db_1.db.query.Customer_support_Tickets_table.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.Customer_support_Tickets_table.ticket_id, id),
    });
};
exports.getcustomerservice = getcustomerservice;
const createcustmer = async (cuss) => {
    await db_1.db.insert(schema_1.Customer_support_Tickets_table).values(cuss);
    return "ordermenu created successfiully";
};
exports.createcustmer = createcustmer;
const updatecustomer = async (id, tic) => {
    await db_1.db.update(schema_1.Customer_support_Tickets_table).set(tic).where((0, drizzle_orm_1.eq)(schema_1.Customer_support_Tickets_table.ticket_id, id));
    return "updated successfully";
};
exports.updatecustomer = updatecustomer;
const deletecustomer = async (id) => {
    await db_1.db.delete(schema_1.Customer_support_Tickets_table).where((0, drizzle_orm_1.eq)(schema_1.Customer_support_Tickets_table.ticket_id, id));
    return "deleted successfully";
};
exports.deletecustomer = deletecustomer;
