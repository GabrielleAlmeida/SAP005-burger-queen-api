const db = require("./models");

const testConnection = async () => {
  try {
    await db.sequelize.authenticate();
    console.log("Connection has been established successfully.");
    process.exit(0);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
};

testConnection();
