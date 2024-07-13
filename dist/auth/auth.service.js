"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authloginservice = exports.createauthservice = void 0;
const schema_1 = require("../drizzle/schema");
const db_1 = require("../drizzle/db");
const drizzle_orm_1 = require("drizzle-orm");
const createauthservice = async (auth) => {
    const { authname, password, created_at, role } = auth;
    const insertdata = {
        authname: auth.authname,
        password: auth.password,
        created_at: auth.created_at,
        role: auth.role
    };
    await db_1.db.insert(schema_1.VehicleRentalauth).values(insertdata);
    return "owner created successfully";
};
exports.createauthservice = createauthservice;
const authloginservice = async (user) => {
    const { authname, password } = user;
    return db_1.db.query.VehicleRentalauth.findFirst({
        columns: {
            authname: true,
            role: true,
            password: true
        }, where: (0, drizzle_orm_1.sql) `${schema_1.VehicleRentalauth.authname}=${authname}`,
        with: {
            user: {
                columns: {
                    user_id: true,
                    full_name: true,
                    email: true,
                    role: true
                }
            }
        }
    });
};
exports.authloginservice = authloginservice;
