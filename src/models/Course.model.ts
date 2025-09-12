import { Schema, model } from "mongoose";

const courseSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, unique: true, required: true },
    status: { type: String, required: true, enum: ["Planned", "Active", "Finished"], default: "Planned" },
    imageUrl: String,
    degreeNames: [String],
    startDate: {type: Date, required: true},
    endDate: Date,
    numberOfHours: Number,
    teachers: [{ type: Schema.Types.ObjectId, ref: "User" }],
    classes: [{ type: Schema.Types.ObjectId, ref: "Class" }],
    price: Number
  }
);

courseSchema.pre("validate", function (next) {
  this.slug = `${this.name}:_:${this.startDate.toISOString().slice(0, 10)}`;
  next();
})

const Course = model("Course", courseSchema);

export default Course;