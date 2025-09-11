import { Schema } from "mongoose";
declare const Course: import("mongoose").Model<{
    name: string;
    teacher: import("mongoose").Types.ObjectId[];
    slug: string;
    degreeNames: string[];
    class: import("mongoose").Types.ObjectId[];
    imageUrl?: string | null;
    startDate?: NativeDate | null;
    endDate?: NativeDate | null;
    numberOfHours?: number | null;
    price?: number | null;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    name: string;
    teacher: import("mongoose").Types.ObjectId[];
    slug: string;
    degreeNames: string[];
    class: import("mongoose").Types.ObjectId[];
    imageUrl?: string | null;
    startDate?: NativeDate | null;
    endDate?: NativeDate | null;
    numberOfHours?: number | null;
    price?: number | null;
}, {}, import("mongoose").DefaultSchemaOptions> & {
    name: string;
    teacher: import("mongoose").Types.ObjectId[];
    slug: string;
    degreeNames: string[];
    class: import("mongoose").Types.ObjectId[];
    imageUrl?: string | null;
    startDate?: NativeDate | null;
    endDate?: NativeDate | null;
    numberOfHours?: number | null;
    price?: number | null;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    name: string;
    teacher: import("mongoose").Types.ObjectId[];
    slug: string;
    degreeNames: string[];
    class: import("mongoose").Types.ObjectId[];
    imageUrl?: string | null;
    startDate?: NativeDate | null;
    endDate?: NativeDate | null;
    numberOfHours?: number | null;
    price?: number | null;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    name: string;
    teacher: import("mongoose").Types.ObjectId[];
    slug: string;
    degreeNames: string[];
    class: import("mongoose").Types.ObjectId[];
    imageUrl?: string | null;
    startDate?: NativeDate | null;
    endDate?: NativeDate | null;
    numberOfHours?: number | null;
    price?: number | null;
}>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<{
    name: string;
    teacher: import("mongoose").Types.ObjectId[];
    slug: string;
    degreeNames: string[];
    class: import("mongoose").Types.ObjectId[];
    imageUrl?: string | null;
    startDate?: NativeDate | null;
    endDate?: NativeDate | null;
    numberOfHours?: number | null;
    price?: number | null;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export default Course;
//# sourceMappingURL=Course.model.d.ts.map