"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateallController = exports.deleteallController = exports.createallController = exports.getallController = void 0;
const superfunc_1 = require("./superfunc");
const getallController = (getFunction) => async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const entity = await (0, superfunc_1.getEntity)(id, getFunction);
    if (entity === undefined) {
        return c.text("Entity not found", 404);
    }
    return c.json(entity, 200);
};
exports.getallController = getallController;
const createallController = (createFunction) => async (c) => {
    try {
        const data = await c.req.json();
        const createdEntity = await (0, superfunc_1.createEntity)(data, createFunction);
        if (!createdEntity)
            return c.text("Entity not created", 404);
        return c.json({ msg: createdEntity }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createallController = createallController;
const deleteallController = (getFunction, deleteFunction) => async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    try {
        const entity = await (0, superfunc_1.getEntity)(id, getFunction);
        if (entity === undefined)
            return c.text("Entity not found", 404);
        const deleted = await (0, superfunc_1.deleteEntity)(id, deleteFunction);
        if (!deleted)
            return c.text("Entity not deleted", 404);
        return c.json({ msg: entity }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteallController = deleteallController;
const updateallController = (getFunction, updateFunction) => async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const data = await c.req.json();
    try {
        const entity = await (0, superfunc_1.getEntity)(id, getFunction);
        if (entity === undefined)
            return c.text("Entity not found", 404);
        const updatedEntity = await (0, superfunc_1.updateEntity)(id, data, updateFunction);
        if (!updatedEntity)
            return c.text("Entity not updated", 404);
        return c.json({ msg: updatedEntity }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateallController = updateallController;
