const { Router } = require("express");
const userRouter = Router();

userRouter.post("/signup", (req, res) => {
  res.json({
    message: "success",
  });
});

userRouter.post("/signin", (req, res) => {
  res.json({
    message: "success",
  });
});

//user able to see his purchased courses
userRouter.get("/purchases", (req, res) => {
  res.json({
    message: "success",
  });
});

module.exports = {
  userRouter,
};
