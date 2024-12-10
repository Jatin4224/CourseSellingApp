const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const courseSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  creatorId: ObjectId,
});

const creatorSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const purchasesSchema = new Schema({
  courseId: ObjectId,
  userId: ObjectId,
});

const userModel = mongoose.model("User", userSchema);
const courseModel = mongoose.model("Course", courseSchema);
const creatorModel = mongoose.model("Creator", creatorSchema);
const purchasesModel = mongoose.model("purchases", purchasesSchema);

mongoose.export = {
  userModel,
  courseModel,
  creatorModel,
  purchasesModel,
};
