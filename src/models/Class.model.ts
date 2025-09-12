import { Schema, model } from "mongoose";

const classSchema = new Schema(
  {
    course: { type: Schema.Types.ObjectId, ref: "Course" },
    teacher: [{ type: Schema.Types.ObjectId, ref: "User" }],
    numberOfHours: { type: Number, required: true },
    date: { type: Date, required: true },
    type: { type: String, enum: { values: ["Online - Streaming", "Online - Video", "In-Person"], message: "{VALUE} is not supported"}, default: "Online - Streaming", required: true },
    onlineUrl: String,
    classroomName: String
  }
);

const Class = model("Class", classSchema);

export default Class;