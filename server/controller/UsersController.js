// aqui vai o código que acessa o banco de dados
//Seviço - funções a serem executadas


// GET /users
const getAllUsers = (req, res) => {
    console.log("get/users")
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

// GET /users/:uid
const getUserUid = (req, res) => {
    const uid = req.params.uid
    res.send("Request get feita com o uid: " + uid)
} 

// POST /users
const postUser = (req, res) => {
    console.log("post/users")
    res.send("Request feita post")
} 

// PUT /users/:uid
const putUserUid = (req, res) => {
    const uid = req.params.uid
    res.send("Request put feita com o uid: " + uid)
} 

// DELETE /users/:uid
const deleteUserUid = (req, res) => {
    const uid = req.params.uid
    res.send("Request delete feita com o uid: " + uid)
} 

module.exports = {
    getAllUsers,
    getUserUid,
    postUser,
    putUserUid,
    deleteUserUid
}