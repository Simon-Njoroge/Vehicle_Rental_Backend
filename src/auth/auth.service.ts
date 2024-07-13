import{VehicleRentalauth,users_table,TSAuth,TIAuth} from '../drizzle/schema'
import {db} from '../drizzle/db'
import {sql} from "drizzle-orm"
import { eq } from "drizzle-orm" 
import bcrypt from 'bcrypt'
import { TUsers , TAuth,Tlogin} from '../validatot'
const secret = process.env.JWT_SECRET;
const expiresIn = process.env.JWT_EXPIRES_IN;
const jwt = require('jsonwebtoken');
export const registerUser = async (user: any) => {
    TUsers.parse(user);
    TAuth.parse(user);
 
  
    const existingUser = await db.select().from(users_table).where(eq(users_table.email, user.email)).execute();
 
    if(existingUser.length > 0){
        throw new Error("User already exists");
    }
 
    const hashedPassword = await bcrypt.hash(user.password, 10);
 
  
    const newUser = await db.insert(users_table)
    .values({
        full_name: user.full_name,
        email: user.email,
        contact_phone: user.contact_phone,
        address: user.address,
        profileImage: user.profileImage,
        role: user.role
    })
    .returning({id: users_table.user_id})
    .execute();
 

    const userId = newUser[0].id;
 
    try {
        await db.insert(VehicleRentalauth)
        .values({
            auth_id: userId,
            users_id:userId,
            password: hashedPassword
        })
        .execute();
        return 'User registered successfully';
    } catch (error) {
    
        await db.delete(users_table).where(eq(users_table.user_id, userId)).execute();
        throw new Error('Registration failed. Please try again.');
    }
}
        

export const authLoginService = async (email: string, password: string) => {
    try {

        const users = await db.select().from(users_table).where(eq(users_table.email, email)).execute();

        if (users.length === 0) {
            throw new Error('User not found! Try Again');
        }

        const user = users[0];

     
        const auths = await db.select().from(VehicleRentalauth).where(eq(VehicleRentalauth.auth_id, user.user_id)).execute();

        if (auths.length === 0) {
            throw new Error('Invalid credentials! Try again');
        }

        const auth = auths[0];


        const isPasswordValid = await bcrypt.compare(password, auth.password);

        if (!isPasswordValid) {
            throw new Error('Invalid credentials! Try again');
        }

        const token = jwt.sign(
            { id: user.user_id, email: user.email, role: user.role },
            secret!,
            { expiresIn }
        );
    

        return { token, user };
    } catch (error) {
        throw error;  
    }
};