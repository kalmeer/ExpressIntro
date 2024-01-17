const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://khal6757:<password>@khal6757.ufh3xzj.mongodb.net/"
    );
    console.log("Connected to DB!");
  } catch (error) {
    console.log(error);
    console.log("Could not connect to DB", error);
  }
};

module.exports = connectDb;
