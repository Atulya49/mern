const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://atulyagupta49:atulya@cluster03.zt5knni.mongodb.net/SPEEDFOOD?retryWrites=true&w=majority";

// current version of mongodb does not support callback so we use async await try catch instead of callback
const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");

    const fetched_data = mongoose.connection.db.collection("FOODITEMS");
    fetched_data
      .find({})
      .toArray()
      .then((data) => {
        const foodCategory = mongoose.connection.db.collection("CATEGORY");
        foodCategory
          .find({})
          .toArray()
          .then((catData) => {
            global.FOODITEMS = data;
            global.CATEGORY = catData;
          });
      })
      .catch((error) => {
        console.error("Error fetching data from MongoDB:", error);
      });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Ensure that the error is propagated to the caller
  }
};

module.exports = mongoDB;
