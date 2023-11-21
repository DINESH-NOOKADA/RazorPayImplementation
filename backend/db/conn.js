const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connected to DATABASE");
  })
  .catch(() => {
    console.log("No Connection");
  });
