const express = require("express");
const { userRouter } = require("../routes/user");
const { courseRouter } = require("../routes/course");
const { adminRouter } = require("../routes/admin");
const app = express();
app.use(express.json());
app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

async function connectDb() {
  await mongoose.connect(
    "mongodb+srv://jatin4224:MyrigWDrXvTCGMeB@cluster4224.cctoa.mongodb.net/courseApp"
  );
  app.listen(3000, (req, res) => {
    console.log("server running fine");
  });
}

connectDb();
