"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const hono_1 = require("hono");
const auth_controller_1 = require("./auth.controller");
exports.authRouter = new hono_1.Hono();
exports.authRouter.post('/register', auth_controller_1.registerauth);
exports.authRouter.post('/login', auth_controller_1.loginuser);
