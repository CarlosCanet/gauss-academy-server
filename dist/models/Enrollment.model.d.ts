import { Schema } from "mongoose";
declare const Enrollment: import("mongoose").Model<{
    course?: import("mongoose").Types.ObjectId | null;
    startDate?: NativeDate | null;
    endDate?: NativeDate | null;
    discountPercent?: number | null;
    student?: import("mongoose").Types.ObjectId | null;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    course?: import("mongoose").Types.ObjectId | null;
    startDate?: NativeDate | null;
    endDate?: NativeDate | null;
    discountPercent?: number | null;
    student?: import("mongoose").Types.ObjectId | null;
}, {}, import("mongoose").DefaultSchemaOptions> & {
    course?: import("mongoose").Types.ObjectId | null;
    startDate?: NativeDate | null;
    endDate?: NativeDate | null;
    discountPercent?: number | null;
    student?: import("mongoose").Types.ObjectId | null;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    course?: import("mongoose").Types.ObjectId | null;
    startDate?: NativeDate | null;
    endDate?: NativeDate | null;
    discountPercent?: number | null;
    student?: import("mongoose").Types.ObjectId | null;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    course?: import("mongoose").Types.ObjectId | null;
    startDate?: NativeDate | null;
    endDate?: NativeDate | null;
    discountPercent?: number | null;
    student?: import("mongoose").Types.ObjectId | null;
}>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<{
    course?: import("mongoose").Types.ObjectId | null;
    startDate?: NativeDate | null;
    endDate?: NativeDate | null;
    discountPercent?: number | null;
    student?: import("mongoose").Types.ObjectId | null;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export default Enrollment;
//# sourceMappingURL=Enrollment.model.d.ts.map