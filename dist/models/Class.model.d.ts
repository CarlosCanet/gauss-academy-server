import { Schema } from "mongoose";
declare const Class: import("mongoose").Model<{
    date: NativeDate;
    type: "Online - Streaming" | "Online - Video" | "In-Person";
    teacher: import("mongoose").Types.ObjectId[];
    onlineUrl?: string | null;
    classroomName?: string | null;
    course?: import("mongoose").Types.ObjectId | null;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    date: NativeDate;
    type: "Online - Streaming" | "Online - Video" | "In-Person";
    teacher: import("mongoose").Types.ObjectId[];
    onlineUrl?: string | null;
    classroomName?: string | null;
    course?: import("mongoose").Types.ObjectId | null;
}, {}, import("mongoose").DefaultSchemaOptions> & {
    date: NativeDate;
    type: "Online - Streaming" | "Online - Video" | "In-Person";
    teacher: import("mongoose").Types.ObjectId[];
    onlineUrl?: string | null;
    classroomName?: string | null;
    course?: import("mongoose").Types.ObjectId | null;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    date: NativeDate;
    type: "Online - Streaming" | "Online - Video" | "In-Person";
    teacher: import("mongoose").Types.ObjectId[];
    onlineUrl?: string | null;
    classroomName?: string | null;
    course?: import("mongoose").Types.ObjectId | null;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    date: NativeDate;
    type: "Online - Streaming" | "Online - Video" | "In-Person";
    teacher: import("mongoose").Types.ObjectId[];
    onlineUrl?: string | null;
    classroomName?: string | null;
    course?: import("mongoose").Types.ObjectId | null;
}>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<{
    date: NativeDate;
    type: "Online - Streaming" | "Online - Video" | "In-Person";
    teacher: import("mongoose").Types.ObjectId[];
    onlineUrl?: string | null;
    classroomName?: string | null;
    course?: import("mongoose").Types.ObjectId | null;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export default Class;
//# sourceMappingURL=Class.model.d.ts.map