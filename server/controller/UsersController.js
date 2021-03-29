// aqui vai o código que acessa o banco de dados
//Seviço - funções a serem executadas
const dataBase = require("../db/models");

class UsersController {
  // GET /users
  static async getAllUsers(req, res) {
    try {
      const users = await dataBase.User.findAll({
        attributes: {
          exclude: ["password"],
        },
      });
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // GET /users/:uid
  static async getUserUid(req, res) {
    const { uid } = req.params;
    try {
      const userId = await dataBase.User.findAll({
        where: {
          id: Number(uid),
        },
        attributes: {
          exclude: ["password"],
        },
      });
      return res.status(200).json(userId);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // POST /users
  static async postUser(req, res) {
    try {
      const newUser = await dataBase.User.create(req.body);
      return res.status(200).json(newUser);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

//   // PUT /users/:uid
//   const putUserUid = (req, res) => {
//       const uid = req.params.uid
//       res.send("Request put feita com o uid: " + uid)
//   }

//   // DELETE /users/:uid
//   const deleteUserUid = (req, res) => {
//       const uid = req.params.uid
//       res.send("Request delete feita com o uid: " + uid)
//   }
}

module.exports = UsersController;

// module.exports = {
//     getAllUsers,
//     getUserUid,
//     postUser,
//     putUserUid,
//     deleteUserUid
// }
