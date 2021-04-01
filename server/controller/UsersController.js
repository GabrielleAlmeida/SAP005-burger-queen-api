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

  // PUT /users/:uid
  static async putUserUid(req, res) {
    try {
      const { uid } = req.params;
      const [updateUser] = await dataBase.User.update(req.body, {
        where: { id: uid },
      });
      if (updateUser) {
        const updatedUser = await dataBase.User.findAll({
          where: {
            id: Number(uid),
          },
        });
        return res.status(200).json({ user: updatedUser });
      }
      res.status(404).json({
        message: 'Usuário não encontrado'
      })
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  //   // DELETE /users/:uid
  static async deleteUserUid(req, res) {
    try {
      const { uid } = req.params;
      const destroyedUsers = await dataBase.User.destroy({
        where: { id: uid },
      });

      if (destroyedUsers > 0) {
        res.status(200).json({ 
          message: 'Usuário excluído com sucesso'
        })
      }

      res.status(404).json({
        message: 'Usuário não encontrado'
      })

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = UsersController;

// module.exports = {
//     getAllUsers,
//     getUserUid,
//     postUser,
//     putUserUid,
//     deleteUserUid
// }
