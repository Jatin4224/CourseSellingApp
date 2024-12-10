const Router = require("express");
const adminRouter = Router();

adminRouter.post("/signup", (req, res) => {
  res.json({
    message: "success",
  });
});

adminRouter.post("/signin", (req, res) => {
  res.json({
    message: "success",
  });
});

//create a course
adminRouter.post("course", (req, res) => {
  res.json({
    message: "success",
  });
});

//change course
adminRouter.put("course", (req, res) => {
  res.json({
    message: "success",
  });
});

//give all courses which is created
adminRouter.get("/course/bulk", (req, res) => {
  res.json({
    message: "success",
  });
});

module.exports = {
  adminRouter,
};
