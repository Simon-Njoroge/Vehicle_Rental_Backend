"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletepayment = exports.updatepayment = exports.createpayment = exports.getpaymentservice = exports.paymentservice = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const paymentservice = async (limit) => {
    if (limit) {
        return await db_1.db.query.payment_table.findMany({
            limit: limit,
        });
    }
    return await db_1.db.query.payment_table.findMany();
};
exports.paymentservice = paymentservice;
const getpaymentservice = async (id) => {
    return await db_1.db.query.payment_table.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.payment_table.payment_id, id),
    });
};
exports.getpaymentservice = getpaymentservice;
const createpayment = async (pay) => {
    await db_1.db.insert(schema_1.payment_table).values(pay);
    return "ordermenu created successfiully";
};
exports.createpayment = createpayment;
const updatepayment = async (id, pays) => {
    await db_1.db.update(schema_1.payment_table).set(pays).where((0, drizzle_orm_1.eq)(schema_1.payment_table.payment_id, id));
    return "updated successfully";
};
exports.updatepayment = updatepayment;
const deletepayment = async (id) => {
    await db_1.db.delete(schema_1.payment_table).where((0, drizzle_orm_1.eq)(schema_1.payment_table.payment_id, id));
    return "deleted successfully";
};
exports.deletepayment = deletepayment;
