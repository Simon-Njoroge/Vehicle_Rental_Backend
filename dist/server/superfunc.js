"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchEntity = exports.updateEntity = exports.deleteEntity = exports.createEntity = exports.getEntity = void 0;
const getEntity = async (id, getFunction) => {
    return await getFunction(id);
};
exports.getEntity = getEntity;
const createEntity = async (data, createFunction) => {
    return await createFunction(data);
};
exports.createEntity = createEntity;
const deleteEntity = async (id, deleteFunction) => {
    return await deleteFunction(id);
};
exports.deleteEntity = deleteEntity;
const updateEntity = async (id, data, updateFunction) => {
    return await updateFunction(id, data);
};
exports.updateEntity = updateEntity;
const searchEntity = async (id, searchFunction) => {
    return await searchFunction(id);
};
exports.searchEntity = searchEntity;
