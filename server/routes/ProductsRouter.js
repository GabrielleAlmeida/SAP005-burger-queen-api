const { Router } = require('express')
const ProductsController = require('../controller/ProductsController')

const router = Router()


//  GET /products
router.get("/",ProductsController.getAllProducts);

//  GET /products/:productid
router.get("/productid/:uid",ProductsController.getProductUid);

//  POST /products
router.post("/",ProductsController.postProducts);

//  PUT /products/:productid
router.put("/productid/:uid",ProductsController.putProductUid);

//  DELETE /products/:productid
router.delete("/productid/:uid",ProductsController.deleteProductUid);

module.exports = router

