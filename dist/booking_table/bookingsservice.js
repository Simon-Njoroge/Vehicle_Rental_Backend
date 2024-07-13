"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletebooking = exports.updatebooking = exports.creatbooking = exports.getbookservice = exports.bookingservice = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const bookingservice = async (limit) => {
    if (limit) {
        return await db_1.db.query.booking_table.findMany({
            limit: limit,
        });
    }
    return await db_1.db.query.booking_table.findMany();
};
exports.bookingservice = bookingservice;
const getbookservice = async (id) => {
    return await db_1.db.query.booking_table.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.booking_table.booking_id, id),
    });
};
exports.getbookservice = getbookservice;
const creatbooking = async (bok) => {
    await db_1.db.insert(schema_1.booking_table).values(bok);
    return "ordermenu created successfiully";
};
exports.creatbooking = creatbooking;
const updatebooking = async (id, book) => {
    await db_1.db.update(schema_1.booking_table).set(book).where((0, drizzle_orm_1.eq)(schema_1.booking_table.booking_id, id));
    return "updated successfully";
};
exports.updatebooking = updatebooking;
const deletebooking = async (id) => {
    await db_1.db.delete(schema_1.booking_table).where((0, drizzle_orm_1.eq)(schema_1.booking_table.booking_id, id));
    return "deleted successfully";
};
exports.deletebooking = deletebooking;
