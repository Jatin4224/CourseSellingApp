const express = require("express");
const app = express();
app.use(express.json());

app.post("/user/signup", (req, res) => {
  res.json({
    message: "success",
  });
});

app.post("/user/signin", (req, res) => {
  res.json({
    message: "success",
  });
});

app.get("/user/courses", (req, res) => {
  res.json({
    message: "success",
  });
});

app.get("/user/purchasedcourses", (req, res) => {
  res.json({
    message: "successs",
  });
});
app.listen(3000, (req, res) => {
  console.log("server running fine");
});
