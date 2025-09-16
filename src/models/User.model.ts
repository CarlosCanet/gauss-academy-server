import bcrypt from "bcryptjs";
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
  description: { type: String, required: true },
  previousCourse: [{ type: Schema.Types.ObjectId, ref: "Course" }],
  activeCourse: [{ type: Schema.Types.ObjectId, ref: "Course" }],
});

function isValidDNIorNIE(value: string): boolean {
  const dniRegex = /^\d{8}[A-HJ-NP-TV-Z]$/i;
  const nieRegex = /^[XYZ]\d{7}[A-HJ-NP-TV-Z]$/i;
  if (!dniRegex.test(value) && !nieRegex.test(value)) {
    return false;
  }
  const letterString = "TRWAGMYFPDXBNJZSQVHLCKET";
  const allNumbers = value.toUpperCase().replace("X", "0").replace("Y", "1").replace("Z", "2").slice(0,8);
  const letter = value.slice(-1);
  const number = parseInt(allNumbers, 10);
  return letterString[number % 23] == letter;
}

const userSchema = new Schema(
  {
    firstName: { type: String, required: [true, "First name is required" ], trim: true},
    lastName: { type: String, required: [true, "Last name is required" ], trim: true},
    dateOfBirth: { type: Date, required: [true, "Date of birth is required" ]},
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g, "The email is not a valid email"]
    },
    password: {
      type: String,
      required: [true, "Password is required."],
      match: [/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,})/g, "The password is not strong enough"]
    },
    dni: {
      type: String,
      unique: true,
      required: [true, "DNI is required"],
      validate: {
        validator: isValidDNIorNIE,
        message: "That's not a valid DNI or NIE"
      }
    },
    mobileNumber: {
      type: Number,
      required: [true, "Mobile number is required"],
    },
    profileImageUrl: {type: String, match: [/([a-z0-9_-]{1,5}:\/\/)?(([a-z0-9_-]{1,}):([a-z0-9_-]{1,})@)?((www\.)|([a-z0-9_-]{1,}\.)+)?([a-z0-9_-]{3,})(\.[a-z]{2,4})(\/([a-z0-9_-]{1,}\/)+)?([a-z0-9_-]{1,})?(\.[a-z]{2,})?(\?)?(((&)?[a-z0-9_-]{1,}(=[a-z0-9_-]{1,})?)+)?/gi, "That url has some mistakes"]},
    role: {
      type: String,
      enum: { values: ["Student", "Teacher", "Staff", "Admin"], message: "{VALUE} is not supported" },
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

userSchema.pre("save", async function(next) {
  const hashedPassword = await bcrypt.hash(this.password, 12);
  this.password = hashedPassword;
  next();
})

const User = model("User", userSchema);

export default User;


