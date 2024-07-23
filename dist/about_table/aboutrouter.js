"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aboutrouters = void 0;
const hono_1 = require("hono");
const aboutcontroller_1 = require("./aboutcontroller");
exports.aboutrouters = new hono_1.Hono();
exports.aboutrouters.get("/aboutall", aboutcontroller_1.aboutservices);
exports.aboutrouters.get("/about/:id", aboutcontroller_1.getabout);
exports.aboutrouters.post("/aboutadd", aboutcontroller_1.createabouts);
exports.aboutrouters.put("/updateabout/:id", aboutcontroller_1.updateabouts);
exports.aboutrouters.delete("/deleteabout/:id", aboutcontroller_1.deleteabouts);