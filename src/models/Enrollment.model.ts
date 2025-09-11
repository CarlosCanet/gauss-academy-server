import { Schema, model } from "mongoose";

const enrollmentSchema = new Schema(
  {
    student: { type: Schema.Types.ObjectId, ref: "User" },
    course: { type: Schema.Types.ObjectId, ref: "Course" },
    startDate: Date,
    endDate: Date,
    discountPercent: Number
  }
);

const Enrollment = model("Enrollment", enrollmentSchema);

export default Enrollment;