import "dotenv/config"
import { pgTable, varchar, serial, primaryKey, integer, decimal, pgEnum } from 'drizzle-orm/pg-core'
import{relations} from "drizzle-orm"
import {Many} from "drizzle-orm"

//tables
export const users_table = pgTable("users_table", {
    user_id: serial("users_id").primaryKey(),
    full_name: varchar("full_name"),
    email: varchar("email"),
    contact_phone: varchar("contact_phone"),
    adress: varchar("address"),
    role: varchar("role"),
    created_at: varchar("created_at"),
    updated_at: varchar("updated_at"),

})

export const payment_table = pgTable("payment_table", {
    payment_id: serial("payment_id").primaryKey(),
    booking_id: integer("booking_id").references(() => booking_table.booking_id, { onDelete: "cascade" }),
    amount: integer("amount"),
    payment_status: varchar("payment_status"),
    payment_method: varchar("payment_method"),
    transaction_id: integer("transaction_id"),
    created_at: varchar("created_at"),
    updated_at: varchar("updated_at"),
})

export const Fleet_management_table = pgTable("Fleet_Management_table", {
    fleet_id: serial("fleet_id").primaryKey(),
    vehicles_id: integer("vehicles_id").references(() => Vehicle_specification_table.vehicle_id, { onDelete: "cascade" }),
    acquisition_date: varchar("acquisition_date"),
    description_rate: varchar("description_rate"),
    current_value: varchar(" current_value"),
    Maintenance_cost: decimal("Maintenance_cost"),
    status: varchar("status"),
    created_at: varchar("created_at"),
    updated_at: varchar("updated_at"),
})

export const Vehicle_specification_table = pgTable("Vehicle_specification_table", {
    vehicle_id: serial("vehicle_id").primaryKey(),
    vehiclesspec_id: integer("vehiclespec_id"),
    manufucturer: varchar("manufucturer"),
    model: varchar("model"),
    year: varchar("year"),
    fuel_type: decimal("fuel_type"),
    status: varchar("status"),
    engine_capacity: varchar("engine_capacity"),
    transmission: varchar("transmisssion"),
    seating_capacity: varchar("seating_capacity"),
    color: varchar("color"),
    features: varchar("features"),
    image: varchar("image")
})

export const Customer_support_Tickets_table = pgTable("Customer_support_Tickets_table", {
    ticket_id: serial("ticket_id").primaryKey(),
    user_id: integer("user_id").references(() => users_table.user_id, { onDelete: "cascade" }),
    subject: varchar("subject"),
    model: varchar("model"),
    description: varchar("description"),
    status: varchar("status"),
    created_at: varchar("created_at"),
    updated_at: varchar("updated_at"),
})


export const vehicles_table = pgTable("vehicles_table", {
    VehicleSpec_id: serial("VehicleSpec_id").primaryKey(),
    vehicles_id: integer("vehcles_id_id").references(() => Vehicle_specification_table.vehicle_id, { onDelete: "cascade" }),
    rental_rate: varchar("rental_rate"),
    created_at: varchar("created_at"),
    updated_at: varchar("updated_at"),
})

export const booking_table = pgTable("Boking_table", {
    booking_id: serial("booking_id").primaryKey(),
    user_id: integer("user_id").references(() => users_table.user_id, { onDelete: "cascade" }),
    vehicle_id: integer("vehicele_id").references(() => Vehicle_specification_table.vehicle_id, { onDelete: "cascade" }),
    location_id: integer("location_id").references(() => Location_and_Branches_table.Location_id, { onDelete: "cascade" }),
    book_date: varchar("bookdate"),
    return_date: varchar("return_date"),
    total_amount: decimal("total_amount"),
    booking_status: varchar("booking_status"),
    created_at: varchar("created_at"),
    updated_at: varchar("updated_at"),
})


export const Location_and_Branches_table = pgTable("Location_and_Branches_table", {
    Location_id: serial("location_id").primaryKey(),
    name: varchar("name"),
    address: varchar("address"),
    contact_phone: varchar("contact_phone"),
    created_at: varchar("created_at"),
    updated_at: varchar("updated_at"),
})

//relationships

export const usersRelations = relations(users_table, ({ one }) => ({
    orderStatus: one(Customer_support_Tickets_table, {
        fields: [users_table.user_id],
        references: [Customer_support_Tickets_table.user_id]
    })
}))
export const Customer_user_Relations = relations(Customer_support_Tickets_table, ({ one, many }) => ({
    orders: many(users_table)
}))

export const usersRelations2 = relations(users_table, ({ one }) => ({
    orderStatus: one(booking_table, {
        fields: [users_table.user_id],
        references: [booking_table.user_id]
    })
}))
export const bookin_user_realations = relations(booking_table, ({ one, many }) => ({
    orders: many(users_table)
}))

export const vehiclespecificationrelations = relations(Vehicle_specification_table, ({ one }) => ({
    orderStatus: one(Fleet_management_table, {
        fields: [Vehicle_specification_table.vehicle_id],
        references: [Fleet_management_table.vehicles_id]
    })
}))
export const fleet_vehicle_relations = relations(Fleet_management_table, ({ one, many }) => ({
    orders: many(Vehicle_specification_table)
}))

export const vehiclespecificationrelations2= relations(Vehicle_specification_table,({ one }) => ({
    orderStatus: one(booking_table, {
        fields: [Vehicle_specification_table.vehicle_id],
        references: [booking_table.vehicle_id]
    })
}))
export const booking_vehicle_relations= relations(booking_table, ({ one, many }) => ({
    orders: many(Vehicle_specification_table)
}))

export const locationrelations= relations(Location_and_Branches_table,({ one }) => ({
    orderStatus: one(booking_table, {
        fields: [Location_and_Branches_table.Location_id],
        references: [booking_table.location_id]
    })
}))
export const bokking_location_relations= relations(booking_table, ({ one, many }) => ({
    orders: many(Location_and_Branches_table)
}))

//pages data tables

export const Homedata2=pgTable("alldata",{
    id:serial("id"),
    logo: varchar("Logo"),
    Hpic: varchar("Hpic"),
    phone:varchar("phone"),
    wheelpic2:varchar("2wheelpic"),
    wheelpicedesc:varchar("2wheeldesc"),
    wheelpic4:varchar("4wheelpic"),
    wheelpicedesc4:varchar("4wheeldesc")
   
})

export const navbar_table=pgTable("navbar_table",{
    id:serial("id").primaryKey(),
    Home:varchar("Home"),
    About:varchar("About"),
    faqs:varchar("faqs"),
    contats:varchar("contacts"),
    regester:varchar("regester"),
    signin:varchar("signin")
})
export const about_leadership_table=pgTable("homodata",{
    id: serial("id").primaryKey(),
    Name:varchar("name"),
    pic:varchar("picture"),
    desc:varchar("description")
})

export const faqs_table=pgTable("faqs_table",{
    id:serial("id").primaryKey(),
    question:varchar("qustions"),
    answers:varchar("answers"),
})

export const contact_table=pgTable("contact_table",{
    id:serial("id").primaryKey(),
    type:varchar("type"),
    details:varchar("details"),
})

export const assests_table=pgTable("assets",{
    assets_id:serial("assets_id").primaryKey(),
    name:varchar("name"),
    Item:varchar("item")
})
//authenticationtable
export const RoleEnum=pgEnum("role",["admin","user"])
export const VehicleRentalauth=pgTable("auths",{
    auth_id:serial("auth_id").primaryKey(),
    users_id: integer("users_id").references(()=>users_table.user_id,{onDelete:"cascade"}),
    password:varchar("password"),
    authname:varchar("authname"),
    created_at: varchar("created_at"),
    updated_at: varchar("updated_at"),
    role:RoleEnum("role").default("user")
})

export const authrelation= relations(users_table,({one})=>({
    owner:one(VehicleRentalauth,{
        fields:[users_table.user_id],
        references:[VehicleRentalauth.users_id]
    })
}))


//types
export type TIuser = typeof users_table.$inferInsert
export type Tsuser = typeof users_table.$inferSelect

export type TIPayment = typeof payment_table.$inferInsert
export type TSPaymet = typeof payment_table.$inferSelect


export type TIFleetm = typeof Fleet_management_table.$inferInsert
export type TSFleetm = typeof Fleet_management_table.$inferSelect


export type TIVspec = typeof Vehicle_specification_table.$inferInsert
export type TSVspec= typeof Vehicle_specification_table.$inferSelect



export type TICuss = typeof Customer_support_Tickets_table.$inferInsert
export type TSCuss = typeof Customer_support_Tickets_table.$inferSelect

export type TIVeh = typeof Customer_support_Tickets_table.$inferInsert
export type TSVeh = typeof Customer_support_Tickets_table.$inferSelect

export type TIBsta = typeof booking_table.$inferInsert
export type TSBsta = typeof booking_table.$inferSelect

export type TILbt = typeof Location_and_Branches_table.$inferInsert
export type TSLbt = typeof Location_and_Branches_table.$inferSelect

export type TIhome =typeof Homedata2.$inferInsert
export type TShome =typeof Homedata2.$inferInsert

export type TIabout =typeof about_leadership_table.$inferInsert
export type TSabout =typeof about_leadership_table.$inferInsert

export type TInavbar =typeof navbar_table.$inferInsert
export type TSnavbar =typeof navbar_table.$inferInsert

export type TIcontact =typeof contact_table.$inferInsert
export type TScontact =typeof contact_table.$inferInsert

export type TIfaqs=typeof faqs_table.$inferInsert
export type TSfaqs=typeof faqs_table.$inferInsert

export type TIAuth=typeof VehicleRentalauth.$inferInsert
export type TSAuth=typeof VehicleRentalauth.$inferInsert