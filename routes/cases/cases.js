import express from 'express';
import checkTokenGetUserID from "../../middlewares/validateToken.js"
import CreateCase from './CRUD/cases_create.js'
import ReadCase from './CRUD/cases_read.js'
import UpdateCase from './CRUD/cases_update.js'
import DeleteCase from './CRUD/cases_delete.js'


const route = express.Router();

// Create Case
route.post('/', checkTokenGetUserID, CreateCase)

// Read Cases
route.get('/:state', checkTokenGetUserID, ReadCase)

// Update Cases
route.put('/:case_id', checkTokenGetUserID, UpdateCase)

// Delete Cases
route.delete('/:case_id', checkTokenGetUserID, DeleteCase)

export default route
