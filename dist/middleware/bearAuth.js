"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAuth = exports.adminAuth = exports.bothauth = exports.authmiddleware = exports.verifyToken = void 0;
require("dotenv/config");
const jwt_1 = require("hono/jwt");
const verifyToken = async (token, secret) => {
    try {
        const decoded = await (0, jwt_1.verify)(token, secret);
        return decoded;
    }
    catch (error) {
        return null;
    }
};
exports.verifyToken = verifyToken;
const authmiddleware = async (c, next, requiredRole) => {
    const token = c.req.header('Authorization');
    if (!token) {
        return c.json({ message: "Unauthorized" }, 401);
    }
    const decoded = await (0, exports.verifyToken)(token, process.env.JWT_SECRET);
    if (!decoded)
        return c.json({ error: "invalid token" }, 401);
    if (decoded.role !== requiredRole)
        return c.json({ error: "unauthorised" }, 401);
    return next();
};
exports.authmiddleware = authmiddleware;
const bothauth = async (c, next) => await (0, exports.authmiddleware)(c, next, "[admin,user]");
exports.bothauth = bothauth;
const adminAuth = async (c, next) => await (0, exports.authmiddleware)(c, next, "admin");
exports.adminAuth = adminAuth;
const userAuth = async (c, next) => await (0, exports.authmiddleware)(c, next, "user");
exports.userAuth = userAuth;
