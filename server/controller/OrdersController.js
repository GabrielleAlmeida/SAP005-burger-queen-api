// aqui vai o código que acessa o banco de dados
//Seviço - funções a serem executadas


//  GET /orders
const getAllOrders = (req, res) => {
    const payload = [{
        data: {
            message: 'get orders feito com sucesso'
        }
    },{
        data: {
            message: 'get orders feito com sucesso'
        }
    },
    {
        data: {
            message: 'get orders feito com sucesso'
        }
    },
]
    res.send(payload)
} 

//  GET /orders/:orderid
const getOrderUid = (req, res) => {
    const uid = req.params.uid
    res.send("Request order get feita com o uid: " + uid)
} 

//  POST /orders
const postOrders = (req, res) => {
    console.log("post/users")
    res.send("Request order feita post")
} 

//  PUT /orders/:orderid
const putOrderUid = (req, res) => {
    const uid = req.params.uid
    res.send("Request order put feita com o uid: " + uid)
} 

//  DELETE /orders/:orderid
const deleteOrderUid = (req, res) => {
    const uid = req.params.uid
    res.send("Request orders delete feita com o uid: " + uid)
} 

module.exports = {
    getAllOrders,
    getOrderUid,
    postOrders,
    putOrderUid,
    deleteOrderUid
}