"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authrelation = exports.VehicleRentalauth = exports.RoleEnum = exports.assets_table = exports.contact_table = exports.faqs_table = exports.aboutus_table = exports.about_leadership_table = exports.navbar_table = exports.Homedata2 = exports.booking_location_relations = exports.locationrelations = exports.booking_vehicle_relations = exports.vehiclespecificationrelations2 = exports.fleet_vehicle_relations = exports.vehiclespecificationrelations = exports.bookin_user_relations = exports.usersRelations2 = exports.Customer_user_Relations = exports.usersRelations = exports.Location_and_Branches_table = exports.booking_table = exports.vehicles_table = exports.Customer_support_Tickets_table = exports.Vehicle_specification_table = exports.Fleet_management_table = exports.payment_table = exports.users_table = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_orm_1 = require("drizzle-orm");
exports.users_table = (0, pg_core_1.pgTable)("users_table", {
    user_id: (0, pg_core_1.serial)("users_id").primaryKey(),
    full_name: (0, pg_core_1.varchar)("full_name"),
    email: (0, pg_core_1.varchar)("email"),
    contact_phone: (0, pg_core_1.varchar)("contact_phone"),
    address: (0, pg_core_1.varchar)("address"),
    role: (0, pg_core_1.varchar)("role"),
    created_at: (0, pg_core_1.timestamp)("created_at").defaultNow(),
    updated_at: (0, pg_core_1.timestamp)("updated_at").defaultNow(),
});
exports.payment_table = (0, pg_core_1.pgTable)("payment_table", {
    payment_id: (0, pg_core_1.serial)("payment_id").primaryKey(),
    booking_id: (0, pg_core_1.integer)("booking_id").references(() => exports.booking_table.booking_id, { onDelete: "cascade" }),
    amount: (0, pg_core_1.integer)("amount"),
    payment_status: (0, pg_core_1.varchar)("payment_status"),
    payment_method: (0, pg_core_1.varchar)("payment_method"),
    transaction_id: (0, pg_core_1.integer)("transaction_id"),
    created_at: (0, pg_core_1.timestamp)("created_at").defaultNow(),
    updated_at: (0, pg_core_1.timestamp)("updated_at").defaultNow(),
});
exports.Fleet_management_table = (0, pg_core_1.pgTable)("Fleet_Management_table", {
    fleet_id: (0, pg_core_1.serial)("fleet_id").primaryKey(),
    vehicles_id: (0, pg_core_1.integer)("vehicles_id").references(() => exports.Vehicle_specification_table.vehicle_id, { onDelete: "cascade" }),
    acquisition_date: (0, pg_core_1.varchar)("acquisition_date"),
    description_rate: (0, pg_core_1.varchar)("description_rate"),
    current_value: (0, pg_core_1.varchar)("current_value"), // Corrected field name to "current_value"
    Maintenance_cost: (0, pg_core_1.decimal)("Maintenance_cost"),
    status: (0, pg_core_1.varchar)("status"),
    created_at: (0, pg_core_1.timestamp)("created_at").defaultNow(),
    updated_at: (0, pg_core_1.timestamp)("updated_at").defaultNow(),
});
exports.Vehicle_specification_table = (0, pg_core_1.pgTable)("Vehicle_specification_table", {
    vehicle_id: (0, pg_core_1.serial)("vehicle_id").primaryKey(),
    vehiclespec_id: (0, pg_core_1.integer)("vehiclespec_id"),
    manufacturer: (0, pg_core_1.varchar)("manufacturer"), // Corrected field name to "manufacturer"
    model: (0, pg_core_1.varchar)("model"),
    year: (0, pg_core_1.varchar)("year"),
    fuel_type: (0, pg_core_1.varchar)("fuel_type"),
    status: (0, pg_core_1.varchar)("status"),
    engine_capacity: (0, pg_core_1.varchar)("engine_capacity"),
    transmission: (0, pg_core_1.varchar)("transmission"),
    seating_capacity: (0, pg_core_1.varchar)("seating_capacity"),
    color: (0, pg_core_1.varchar)("color"),
    features: (0, pg_core_1.varchar)("features"),
    image: (0, pg_core_1.varchar)("image"),
    rating: (0, pg_core_1.varchar)("rating"),
    amount: (0, pg_core_1.decimal)("amount"),
});
exports.Customer_support_Tickets_table = (0, pg_core_1.pgTable)("Customer_support_Tickets_table", {
    ticket_id: (0, pg_core_1.serial)("ticket_id").primaryKey(),
    user_id: (0, pg_core_1.integer)("user_id").references(() => exports.users_table.user_id, { onDelete: "cascade" }),
    subject: (0, pg_core_1.varchar)("subject"),
    model: (0, pg_core_1.varchar)("model"),
    description: (0, pg_core_1.varchar)("description"),
    status: (0, pg_core_1.varchar)("status"),
    created_at: (0, pg_core_1.timestamp)("created_at").defaultNow(),
    updated_at: (0, pg_core_1.timestamp)("updated_at").defaultNow(),
});
exports.vehicles_table = (0, pg_core_1.pgTable)("vehicles_table", {
    VehicleSpec_id: (0, pg_core_1.serial)("VehicleSpec_id").primaryKey(),
    vehicles_id: (0, pg_core_1.integer)("vehicles_id").references(() => exports.Vehicle_specification_table.vehicle_id, { onDelete: "cascade" }),
    rental_rate: (0, pg_core_1.varchar)("rental_rate"),
    created_at: (0, pg_core_1.timestamp)("created_at").defaultNow(),
    updated_at: (0, pg_core_1.timestamp)("updated_at").defaultNow(),
});
exports.booking_table = (0, pg_core_1.pgTable)("Booking_table", {
    booking_id: (0, pg_core_1.serial)("booking_id").primaryKey(),
    user_id: (0, pg_core_1.integer)("user_id").references(() => exports.users_table.user_id, { onDelete: "cascade" }),
    vehicle_id: (0, pg_core_1.integer)("vehicle_id").references(() => exports.Vehicle_specification_table.vehicle_id, { onDelete: "cascade" }),
    location_id: (0, pg_core_1.integer)("location_id").references(() => exports.Location_and_Branches_table.Location_id, { onDelete: "cascade" }),
    book_date: (0, pg_core_1.varchar)("book_date"), // Corrected field name to "book_date"
    return_date: (0, pg_core_1.varchar)("return_date"),
    total_amount: (0, pg_core_1.decimal)("total_amount"),
    booking_status: (0, pg_core_1.varchar)("booking_status"),
    created_at: (0, pg_core_1.timestamp)("created_at").defaultNow(),
    updated_at: (0, pg_core_1.timestamp)("updated_at").defaultNow(),
});
exports.Location_and_Branches_table = (0, pg_core_1.pgTable)("Location_and_Branches_table", {
    Location_id: (0, pg_core_1.serial)("location_id").primaryKey(),
    name: (0, pg_core_1.varchar)("name"),
    address: (0, pg_core_1.varchar)("address"),
    contact_phone: (0, pg_core_1.varchar)("contact_phone"),
    created_at: (0, pg_core_1.timestamp)("created_at").defaultNow(),
    updated_at: (0, pg_core_1.timestamp)("updated_at").defaultNow(),
});
// Relationships
exports.usersRelations = (0, drizzle_orm_1.relations)(exports.users_table, ({ one }) => ({
    orderStatus: one(exports.Customer_support_Tickets_table, {
        fields: [exports.users_table.user_id],
        references: [exports.Customer_support_Tickets_table.user_id],
    }),
}));
exports.Customer_user_Relations = (0, drizzle_orm_1.relations)(exports.Customer_support_Tickets_table, ({ one, many }) => ({
    orders: many(exports.users_table),
}));
exports.usersRelations2 = (0, drizzle_orm_1.relations)(exports.users_table, ({ one }) => ({
    orderStatus: one(exports.booking_table, {
        fields: [exports.users_table.user_id],
        references: [exports.booking_table.user_id],
    }),
}));
exports.bookin_user_relations = (0, drizzle_orm_1.relations)(exports.booking_table, ({ one, many }) => ({
    orders: many(exports.users_table),
}));
exports.vehiclespecificationrelations = (0, drizzle_orm_1.relations)(exports.Vehicle_specification_table, ({ one }) => ({
    orderStatus: one(exports.Fleet_management_table, {
        fields: [exports.Vehicle_specification_table.vehicle_id],
        references: [exports.Fleet_management_table.vehicles_id],
    }),
}));
exports.fleet_vehicle_relations = (0, drizzle_orm_1.relations)(exports.Fleet_management_table, ({ one, many }) => ({
    orders: many(exports.Vehicle_specification_table),
}));
exports.vehiclespecificationrelations2 = (0, drizzle_orm_1.relations)(exports.Vehicle_specification_table, ({ one }) => ({
    orderStatus: one(exports.booking_table, {
        fields: [exports.Vehicle_specification_table.vehicle_id],
        references: [exports.booking_table.vehicle_id],
    }),
}));
exports.booking_vehicle_relations = (0, drizzle_orm_1.relations)(exports.booking_table, ({ one, many }) => ({
    orders: many(exports.Vehicle_specification_table),
}));
exports.locationrelations = (0, drizzle_orm_1.relations)(exports.Location_and_Branches_table, ({ one }) => ({
    orderStatus: one(exports.booking_table, {
        fields: [exports.Location_and_Branches_table.Location_id],
        references: [exports.booking_table.location_id],
    }),
}));
exports.booking_location_relations = (0, drizzle_orm_1.relations)(exports.booking_table, ({ one, many }) => ({
    orders: many(exports.Location_and_Branches_table),
}));
// Pages data tables
exports.Homedata2 = (0, pg_core_1.pgTable)("alldata", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    logo: (0, pg_core_1.varchar)("Logo"),
    brand: (0, pg_core_1.varchar)("brand"),
    dec: (0, pg_core_1.varchar)("desc"),
    Hpic: (0, pg_core_1.varchar)("Hpic"),
    phone: (0, pg_core_1.varchar)("phone"),
    wheelname2: (0, pg_core_1.varchar)("wheelname2"),
    wheelpic2: (0, pg_core_1.varchar)("2wheelpic"),
    wheelpicedesc: (0, pg_core_1.varchar)("2wheeldesc"),
    wheelname4: (0, pg_core_1.varchar)("wheelname4"),
    wheelpic4: (0, pg_core_1.varchar)("4wheelpic"),
    wheelpicedesc4: (0, pg_core_1.varchar)("4wheeldesc"),
});
exports.navbar_table = (0, pg_core_1.pgTable)("navbar_table", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    Home: (0, pg_core_1.varchar)("Home"),
    About: (0, pg_core_1.varchar)("About"),
    faqs: (0, pg_core_1.varchar)("faqs"),
    contacts: (0, pg_core_1.varchar)("contacts"), // Corrected field name to "contacts"
    register: (0, pg_core_1.varchar)("register"), // Corrected field name to "register"
    signin: (0, pg_core_1.varchar)("signin"),
});
exports.about_leadership_table = (0, pg_core_1.pgTable)("homodata", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    Name: (0, pg_core_1.varchar)("name"),
    position: (0, pg_core_1.varchar)("position"),
    pic: (0, pg_core_1.varchar)("picture"),
    desc: (0, pg_core_1.varchar)("description"),
});
exports.aboutus_table = (0, pg_core_1.pgTable)("aboutus", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    type: (0, pg_core_1.varchar)("type"),
    desc: (0, pg_core_1.varchar)("desc"),
});
exports.faqs_table = (0, pg_core_1.pgTable)("faqs_table", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    question: (0, pg_core_1.varchar)("question"), // Corrected field name to "question"
    answers: (0, pg_core_1.varchar)("answers"),
});
exports.contact_table = (0, pg_core_1.pgTable)("contact_table", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    email: (0, pg_core_1.varchar)("email"),
    phone: (0, pg_core_1.varchar)("phone"),
    location: (0, pg_core_1.varchar)("location"),
});
exports.assets_table = (0, pg_core_1.pgTable)("assets", {
    assets_id: (0, pg_core_1.serial)("assets_id").primaryKey(),
    name: (0, pg_core_1.varchar)("name"),
    item: (0, pg_core_1.varchar)("item"), // Corrected field name to "item"
});
// Authentication table
exports.RoleEnum = (0, pg_core_1.pgEnum)("role", ["admin", "user"]);
exports.VehicleRentalauth = (0, pg_core_1.pgTable)("auths", {
    auth_id: (0, pg_core_1.serial)("auth_id").primaryKey(),
    users_id: (0, pg_core_1.integer)("users_id").references(() => exports.users_table.user_id, { onDelete: "cascade" }),
    password: (0, pg_core_1.varchar)("password"),
    authname: (0, pg_core_1.varchar)("authname"),
    created_at: (0, pg_core_1.timestamp)("created_at").defaultNow(),
    updated_at: (0, pg_core_1.timestamp)("updated_at").defaultNow(),
    role: (0, exports.RoleEnum)("role").default("user"),
});
exports.authrelation = (0, drizzle_orm_1.relations)(exports.VehicleRentalauth, ({ one }) => ({
    user: one(exports.users_table, {
        fields: [exports.VehicleRentalauth.users_id],
        references: [exports.users_table.user_id]
    })
}));
