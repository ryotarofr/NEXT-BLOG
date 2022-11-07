const express = require("express");
const app = express();
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/posts");
const PORT = 4000;
const mongoose = require("mongoose");

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

app.get("/", (req, res) => {
  res.send("hello");
});

// app.get("/users", (req, res) => {
//   res.send("users");
// });

app.listen(PORT, () => console.log("loading server...."));
