const Router = require("express");
const adminRouter = Router();

post.adminRouter("/signup", (req, res) => {
  res.json({
    message: "success",
  });
});

post.adminRouter("/signin", (req, res) => {
  res.json({
    message: "success",
  });
});

//create a course
post.adminRouter("course", (req, res) => {
  res.json({
    message: "success",
  });
});

//change course
put.adminRouter("course", (req, res) => {
  res.json({
    message: "success",
  });
});

//give all courses which is created
get.adminRouter("/course/bulk", (req, res) => {
  res.json({
    message: "success",
  });
});

module.exports = {
  adminRouter,
};
