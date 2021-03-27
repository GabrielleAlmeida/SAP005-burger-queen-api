// ARQUIVO INDICE DE ROTAS - ele é exportado para a Aplicação index.js
const { Router } = require('express')
const ExampleRouter = require("./ExampleRouter")
const UsersRouter = require("./UsersRouter")
const ProductsRouter = require("./ProductsRouter")
const OrdersRouter = require("./OrdersRouter")

const router = Router()

// aqui vai todas as rotas
router.use('/example', ExampleRouter);

// router.get("/", getAllExamples) 


//dividindo responsabilidade -aqui quero usar as rotas de users:
router.use('/users', UsersRouter); 

router.use('/products', ProductsRouter); 

router.use('/orders', OrdersRouter); 


module.exports = router
