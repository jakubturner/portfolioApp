const express = require("express");
const path = require("path");
const pug = require("pug");

const app = express();
app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname + "/index.html"));
// });

app.get("/", function (req, res) {
  res.render("index", { title: "Hey", message: "Hello there!" });
});

app.get("/portolio", function (req, res) {
  res.render("index", { title: "Hey", message: "Hello there!" });
});

app.listen(8080, () => {
  console.log(`Example app listening at http://localhost:8080`);
});
