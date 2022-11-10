const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/posts");
const PORT = 4000;
const mongoose = require("mongoose");

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers, *, Access-Control-Allow-Origin",
    "Origin, X-Requested-with, Content_Type,Accept,Authorization",
    "http://localhost:3000"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE,GET");
    return res.status(200).json({});
  }
  next();
});

app.use(cors());

// closed mongodb url
require("dotenv").config();

// connect database
mongoose
  .connect(process.env.MONGOURL)
  .then(() => {
    console.log("connect mongodb...");
  })
  .catch((error) => {
    console.log(error);
  });

//ミドルウェア
app.use(express.json()); //json形式でデータを格納
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

app.listen(PORT, () => console.log("loading server...."));
