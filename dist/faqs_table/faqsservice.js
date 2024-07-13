"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletefaqs = exports.updatefaqs = exports.createfaqs = exports.getfaqsservice = exports.faqsservice = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const faqsservice = async (limit) => {
    if (limit) {
        return await db_1.db.query.faqs_table.findMany({
            limit: limit,
        });
    }
    return await db_1.db.query.faqs_table.findMany();
};
exports.faqsservice = faqsservice;
const getfaqsservice = async (id) => {
    return await db_1.db.query.faqs_table.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.faqs_table.id, id),
    });
};
exports.getfaqsservice = getfaqsservice;
const createfaqs = async (faqs) => {
    await db_1.db.insert(schema_1.faqs_table).values(faqs);
    return "ordermenu created successfiully";
};
exports.createfaqs = createfaqs;
const updatefaqs = async (id, fqs) => {
    await db_1.db.update(schema_1.faqs_table).set(fqs).where((0, drizzle_orm_1.eq)(schema_1.faqs_table.id, id));
    return "updated successfully";
};
exports.updatefaqs = updatefaqs;
const deletefaqs = async (id) => {
    await db_1.db.delete(schema_1.faqs_table).where((0, drizzle_orm_1.eq)(schema_1.faqs_table.id, id));
    return "deleted successfully";
};
exports.deletefaqs = deletefaqs;
