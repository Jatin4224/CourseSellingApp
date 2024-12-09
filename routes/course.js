const { Router } = require("express");
const courseRouter = Router();

//when user wants to purchase a course
courseRouter.post("/purchase", (req, res) => {
  res.json({
    message: "success",
  });
});

//all courses
courseRouter.get("/preview", (req, res) => {
  res.send("hello");
  console.log("fine");
});

module.exports = {
  courseRouter,
};
