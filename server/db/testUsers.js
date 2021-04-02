const database = require("./models");

const getAllUsers = async () => {
  try {
    const allUsers = await database.User.findAll();
    console.log(allUsers);
    process.exit(0);
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
};

const createTestUser = async (userData) => {
  try {
    const newUser = await database.User.create(userData);
    console.log(newUser);
    process.exit(0);
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
};

// createTestUser({
//   first_name: "Psiu",
//   last_name: "Zinho",
//   email: "psiu@zinho.love",
//   password: "psiuzinhoS2",
//   role: "kitchen",
// });

getAllUsers();
