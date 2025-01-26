const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));
app.use("/api/auth", authRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
});
