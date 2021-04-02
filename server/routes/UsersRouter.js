const { Router } = require('express')
const UsersController = require('../controller/UsersController')

const router = Router()

//  GET /users
router.get("/",UsersController.getAllUsers);

//  GET /users/:uid
router.get("/user/:uid",UsersController.getUserUid);

//  POST /users
router.post("/",UsersController.postUser);

//  PUT /users/:uid
router.put("/user/:uid",UsersController.putUserUid);

//  DELETE /users/:uid
router.delete("/user/:uid",UsersController.deleteUserUid);   

module.exports = router

