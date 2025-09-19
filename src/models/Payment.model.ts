import { Schema, model } from "mongoose";

const paymentSchema = new Schema(
  {
    enrollment: { type: Schema.Types.ObjectId, ref: "Enrollment", required: true },
    // status: { type: String, enum: ["Pending", "Due", "Paid", "Lost"], default: "Pending", required: true},
    status: { type: String, enum: ["incomplete", "succeeded"], default: "incomplete"},
    // dueDate: { type: Date, required: true },
    // paymentDate: { type: Date, required: true },
    price: { type: Number, required: true },
    paymentIntentId: String,
    clientSecret: String,
  }
);

const Payment = model("Payment", paymentSchema);

export default Payment;
