import { Schema, model } from "mongoose";
const studentSchema = new Schema({
  marketingConsent: Boolean,
  referralSource: String,
  degreeName: { type: String, required: true },
  universityName: { type: String, required: true },
  degreeYear: Number,
  enrollments: [{ type: Schema.Types.ObjectId, ref: "Enrollment" }],
});

const staffSchema = new Schema({
  employmentStartDate: { type: Date, required: true },
  employmentEndDate: { type: Date, required: true },
  monthlySalary: Number,
});

const teacherSchema = new Schema({
  previousCourse: [{ type: Schema.Types.ObjectId, ref: "Course" }],
  activeCourse: [{ type: Schema.Types.ObjectId, ref: "Course" }],
});

const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    dni: {
      type: String,
      unique: true,
      required: [true, "DNI is required"],
    },
    mobileNumber: {
      type: Number,
      required: [true, "Mobile number is required"],
    },
    profileImageUrl: String,
    role: {
      type: String,
      enum: { values: ["Student", "Teacher", "Staff"], message: "{VALUE} is not supported" },
      default: "Student",
      required: true,
    },
    studentProfile: studentSchema,
    teacherProfile: teacherSchema,
    staffProfile: staffSchema,
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

export default User;


