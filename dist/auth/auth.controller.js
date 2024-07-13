"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginuser = exports.registerauth = void 0;
const auth_service_1 = require("./auth.service");
const bcrypt_1 = __importDefault(require("bcrypt"));
require("dotenv/config");
const jwt_1 = require("hono/jwt");
const registerauth = async (c) => {
    try {
        const auth = await c.req.json();
        const pass = auth.password;
        const hashedPassword = await bcrypt_1.default.hash(pass, 10);
        auth.password = hashedPassword;
        const createauth = await (0, auth_service_1.createauthservice)(auth);
        if (!createauth) {
            return c.text("Failed to create user", 400);
        }
        return c.json({ msg: createauth }, 201);
    }
    catch (err) {
        return c.json({ err: err?.message }, 400);
    }
};
exports.registerauth = registerauth;
const loginuser = async (c) => {
    try {
        const user = await c.req.json();
        const userlogin = await (0, auth_service_1.authloginservice)(user);
        const usermatch = await bcrypt_1.default.compare(user.password, userlogin?.password);
        if (!usermatch) {
            return c.text("Invalid credentials", 401);
        }
        else {
            let payload = {
                authname: userlogin?.authname,
                role: userlogin?.role,
                id: userlogin?.owner?.user_id,
                exp: Math.floor(Date.now() / 1000 + (60 * 180))
            };
            let secret = process.env.JWT_SECRET;
            const token = await (0, jwt_1.sign)(payload, secret);
            let password = userlogin?.password;
            let user = userlogin?.user;
            let role = userlogin?.role;
            let passsword = userlogin?.password;
            return c.json({ token, owner: { role, user, passsword } }, 200);
        }
        return c.json({ user: userlogin, match: usermatch }, 200);
        console.log(userlogin);
    }
    catch (err) {
        return c.json({ err: err?.message }, 400);
    }
};
exports.loginuser = loginuser;
