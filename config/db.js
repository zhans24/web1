const mongoose = require("mongoose");

MONGO_URI = "mongodb://localhost:27017/web1";

mongoose
    .connect(MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Failed to connect to MongoDB:", err));



module.exports = mongoose;


