import mongoose from 'mongoose';
declare const SpaBooking: mongoose.Model<{
    guest_name: string;
    guest_email: string;
    guest_phone: string;
    status: "pending" | "cancelled" | "confirmed" | "completed";
    booking_date: NativeDate;
    tracking_code: string;
    service_type: string;
    user_id?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    guest_name: string;
    guest_email: string;
    guest_phone: string;
    status: "pending" | "cancelled" | "confirmed" | "completed";
    booking_date: NativeDate;
    tracking_code: string;
    service_type: string;
    user_id?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    guest_name: string;
    guest_email: string;
    guest_phone: string;
    status: "pending" | "cancelled" | "confirmed" | "completed";
    booking_date: NativeDate;
    tracking_code: string;
    service_type: string;
    user_id?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    guest_name: string;
    guest_email: string;
    guest_phone: string;
    status: "pending" | "cancelled" | "confirmed" | "completed";
    booking_date: NativeDate;
    tracking_code: string;
    service_type: string;
    user_id?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    guest_name: string;
    guest_email: string;
    guest_phone: string;
    status: "pending" | "cancelled" | "confirmed" | "completed";
    booking_date: NativeDate;
    tracking_code: string;
    service_type: string;
    user_id?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps>, {}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    timestamps: true;
}>> & mongoose.FlatRecord<{
    guest_name: string;
    guest_email: string;
    guest_phone: string;
    status: "pending" | "cancelled" | "confirmed" | "completed";
    booking_date: NativeDate;
    tracking_code: string;
    service_type: string;
    user_id?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default SpaBooking;
//# sourceMappingURL=SpaBooking.d.ts.map