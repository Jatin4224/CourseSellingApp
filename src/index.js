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

//user able to see his purchased courses
app.get("/user/purchases", (req, res) => {
  res.json({
    message: "success",
  });
});
//when user wants to purchase a course
app.post("/user/purchase", (req, res) => {
  res.json({
    message: "success",
  });
});

//all courses
app.get("/couses", (req, res) => {
  res.json({
    message: "successs",
  });
});
app.listen(3000, (req, res) => {
  console.log("server running fine");
});
