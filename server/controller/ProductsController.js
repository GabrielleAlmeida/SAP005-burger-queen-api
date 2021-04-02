// aqui vai o código que acessa o banco de dados
//Seviço - funções a serem executadas
const dataBase = require("../db/models");

class ProductsController {
  //  GET /products
    static async getAllProducts(req, res) {
        
    }

  //  GET /products/:productid
    static async getProductUid(req, res) {}

  //  POST /products
    static async postProducts(req, res) {}

  //  PUT /products/:productid
    static async putProductUid(req, res) {}

 //  DELETE /products/:productid
    static async deleteProductUid(req, res) {}
}

module.exports = ProductsController;

// module.exports = {
//     getAllProducts,
//     getProductUid,
//     postProducts,
//     putProductUid,
//     deleteProductUid
// }

// const uid = req.params.uid
// res.send("Request products delete feita com o uid: " + uid)
// }
