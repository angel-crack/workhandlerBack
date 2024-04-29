import express from 'express';
import checkTokenGetUserID from "../../middlewares/validateToken.js"
import create_user from "./CRUD/users_create.js"
import read_user from "./CRUD/users_read.js"
import update_user from "./CRUD/users_update.js"
import delete_user from "./CRUD/users_delete.js"


const route = express.Router();

// Create One User
route.post("/", create_user);

// Get User Info
route.get("/", checkTokenGetUserID, read_user);

// Delete User
route.delete("/", checkTokenGetUserID, delete_user);

// Update User
route.put("/", checkTokenGetUserID, update_user);

export default route;