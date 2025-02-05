"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.navbarrouter = void 0;
const hono_1 = require("hono");
const navbar_controller_1 = require("./navbar.controller");
exports.navbarrouter = new hono_1.Hono();
exports.navbarrouter.get("/navbarall", navbar_controller_1.navbarservices);
exports.navbarrouter.get("/navbar/:id", navbar_controller_1.getnavbar);
exports.navbarrouter.post("/navbaradd", navbar_controller_1.createnavbar);
exports.navbarrouter.put("/updatenavbar/:id", navbar_controller_1.updatenavbar);
exports.navbarrouter.delete("/deletenavbar/:id", navbar_controller_1.deletenavbar);
