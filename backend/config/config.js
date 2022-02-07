const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // const url = process.env.MONGO_URL;
    const url =
      "mongodb+srv://vidhishpanchal:vidhishpanchal@cluster0.d78xu.mongodb.net/internshala?retryWrites=true&w=majority";

    mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Database Successfully Connected");
      });
  } catch (error) {
    console.log("Error connecting to Database");
    process.exit(1);
  }
};

module.exports = connectDB;
