const { Router } = require('express')
const OrdersController = require('../controller/OrdersController')

const router = Router()

//  GET /orders
router.get("/",OrdersController.getAllOrders);

//  GET /orders/:orderid
router.get("/orderid/:uid",OrdersController.getOrderUid);

//  POST /orders
router.post("/",OrdersController.postOrders);

//  PUT /orders/:orderid
router.put("/orderid/:uid",OrdersController.putOrderUid);

//  DELETE /orders/:orderid
router.delete("/orderid/:uid",OrdersController.deleteOrderUid);

module.exports = router    

