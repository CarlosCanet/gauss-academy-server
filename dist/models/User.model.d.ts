import { Schema } from "mongoose";
declare const User: import("mongoose").Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    email: string;
    password: string;
    dni: string;
    mobileNumber: number;
    role: "Student" | "Teacher" | "Staff";
    firstName?: string | null;
    lastName?: string | null;
    dateOfBirth?: NativeDate | null;
    profileImageUrl?: string | null;
    studentProfile?: {
        degreeName: string;
        universityName: string;
        enrollments: import("mongoose").Types.ObjectId[];
        marketingConsent?: boolean | null;
        referralSource?: string | null;
        degreeYear?: number | null;
    } | null;
    teacherProfile?: {
        previousCourse: import("mongoose").Types.ObjectId[];
        activeCourse: import("mongoose").Types.ObjectId[];
    } | null;
    staffProfile?: {
        employmentStartDate: NativeDate;
        employmentEndDate: NativeDate;
        monthlySalary?: number | null;
    } | null;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    email: string;
    password: string;
    dni: string;
    mobileNumber: number;
    role: "Student" | "Teacher" | "Staff";
    firstName?: string | null;
    lastName?: string | null;
    dateOfBirth?: NativeDate | null;
    profileImageUrl?: string | null;
    studentProfile?: {
        degreeName: string;
        universityName: string;
        enrollments: import("mongoose").Types.ObjectId[];
        marketingConsent?: boolean | null;
        referralSource?: string | null;
        degreeYear?: number | null;
    } | null;
    teacherProfile?: {
        previousCourse: import("mongoose").Types.ObjectId[];
        activeCourse: import("mongoose").Types.ObjectId[];
    } | null;
    staffProfile?: {
        employmentStartDate: NativeDate;
        employmentEndDate: NativeDate;
        monthlySalary?: number | null;
    } | null;
}, {}, {
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    email: string;
    password: string;
    dni: string;
    mobileNumber: number;
    role: "Student" | "Teacher" | "Staff";
    firstName?: string | null;
    lastName?: string | null;
    dateOfBirth?: NativeDate | null;
    profileImageUrl?: string | null;
    studentProfile?: {
        degreeName: string;
        universityName: string;
        enrollments: import("mongoose").Types.ObjectId[];
        marketingConsent?: boolean | null;
        referralSource?: string | null;
        degreeYear?: number | null;
    } | null;
    teacherProfile?: {
        previousCourse: import("mongoose").Types.ObjectId[];
        activeCourse: import("mongoose").Types.ObjectId[];
    } | null;
    staffProfile?: {
        employmentStartDate: NativeDate;
        employmentEndDate: NativeDate;
        monthlySalary?: number | null;
    } | null;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    email: string;
    password: string;
    dni: string;
    mobileNumber: number;
    role: "Student" | "Teacher" | "Staff";
    firstName?: string | null;
    lastName?: string | null;
    dateOfBirth?: NativeDate | null;
    profileImageUrl?: string | null;
    studentProfile?: {
        degreeName: string;
        universityName: string;
        enrollments: import("mongoose").Types.ObjectId[];
        marketingConsent?: boolean | null;
        referralSource?: string | null;
        degreeYear?: number | null;
    } | null;
    teacherProfile?: {
        previousCourse: import("mongoose").Types.ObjectId[];
        activeCourse: import("mongoose").Types.ObjectId[];
    } | null;
    staffProfile?: {
        employmentStartDate: NativeDate;
        employmentEndDate: NativeDate;
        monthlySalary?: number | null;
    } | null;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    email: string;
    password: string;
    dni: string;
    mobileNumber: number;
    role: "Student" | "Teacher" | "Staff";
    firstName?: string | null;
    lastName?: string | null;
    dateOfBirth?: NativeDate | null;
    profileImageUrl?: string | null;
    studentProfile?: {
        degreeName: string;
        universityName: string;
        enrollments: import("mongoose").Types.ObjectId[];
        marketingConsent?: boolean | null;
        referralSource?: string | null;
        degreeYear?: number | null;
    } | null;
    teacherProfile?: {
        previousCourse: import("mongoose").Types.ObjectId[];
        activeCourse: import("mongoose").Types.ObjectId[];
    } | null;
    staffProfile?: {
        employmentStartDate: NativeDate;
        employmentEndDate: NativeDate;
        monthlySalary?: number | null;
    } | null;
}>, {}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>> & import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    email: string;
    password: string;
    dni: string;
    mobileNumber: number;
    role: "Student" | "Teacher" | "Staff";
    firstName?: string | null;
    lastName?: string | null;
    dateOfBirth?: NativeDate | null;
    profileImageUrl?: string | null;
    studentProfile?: {
        degreeName: string;
        universityName: string;
        enrollments: import("mongoose").Types.ObjectId[];
        marketingConsent?: boolean | null;
        referralSource?: string | null;
        degreeYear?: number | null;
    } | null;
    teacherProfile?: {
        previousCourse: import("mongoose").Types.ObjectId[];
        activeCourse: import("mongoose").Types.ObjectId[];
    } | null;
    staffProfile?: {
        employmentStartDate: NativeDate;
        employmentEndDate: NativeDate;
        monthlySalary?: number | null;
    } | null;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export default User;
//# sourceMappingURL=User.model.d.ts.map