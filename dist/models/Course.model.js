import { Schema, model } from "mongoose";
const courseSchema = new Schema({
    name: { type: String, required: true },
    slug: { type: String, unique: true, required: true },
    imageUrl: String,
    degreeNames: [String],
    startDate: Date,
    endDate: Date,
    numberOfHours: Number,
    teacher: [{ type: Schema.Types.ObjectId, ref: "User" }],
    class: [{ type: Schema.Types.ObjectId, ref: "Class" }],
    price: Number
});
const Course = model("Course", courseSchema);
export default Course;
//# sourceMappingURL=Course.model.js.map