// aqui vai o código que acessa o banco de dados
//Seviço - funções a serem executadas

//  GET /products
const getAllProducts = (req, res) => {
    const payload = [{
        data: {
            message: 'get feito com sucesso'
        }
    },{
        data: {
            message: 'get feito com sucesso'
        }
    },
    {
        data: {
            message: 'get feito com sucesso'
        }
    },
]
    res.send(payload)
} 

//  GET /products/:productid
const getProductUid = (req, res) => {
    const uid = req.params.uid
    res.send("Request get product feita com o uid: " + uid)
} 

//  POST /products
const postProducts = (req, res) => {
    res.send("Request products feita: post")
} 

//  PUT /products/:productid
const putProductUid = (req, res) => {
    const uid = req.params.uid
    res.send("Request products put feita com o uid: " + uid)
} 

//  DELETE /products/:productid
const deleteProductUid = (req, res) => {
    const uid = req.params.uid
    res.send("Request products delete feita com o uid: " + uid)
} 

module.exports = {
    getAllProducts,
    getProductUid,
    postProducts,
    putProductUid,
    deleteProductUid
}