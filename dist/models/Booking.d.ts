import mongoose from 'mongoose';
declare const Booking: mongoose.Model<{
    room_id: mongoose.Types.ObjectId;
    guest_name: string;
    guest_email: string;
    guest_phone: string;
    check_in_date: NativeDate;
    check_out_date: NativeDate;
    number_of_guests: number;
    total_amount: number;
    booking_status: "pending" | "approved" | "cancelled" | "confirmed";
    user_id?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    room_id: mongoose.Types.ObjectId;
    guest_name: string;
    guest_email: string;
    guest_phone: string;
    check_in_date: NativeDate;
    check_out_date: NativeDate;
    number_of_guests: number;
    total_amount: number;
    booking_status: "pending" | "approved" | "cancelled" | "confirmed";
    user_id?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    room_id: mongoose.Types.ObjectId;
    guest_name: string;
    guest_email: string;
    guest_phone: string;
    check_in_date: NativeDate;
    check_out_date: NativeDate;
    number_of_guests: number;
    total_amount: number;
    booking_status: "pending" | "approved" | "cancelled" | "confirmed";
    user_id?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    room_id: mongoose.Types.ObjectId;
    guest_name: string;
    guest_email: string;
    guest_phone: string;
    check_in_date: NativeDate;
    check_out_date: NativeDate;
    number_of_guests: number;
    total_amount: number;
    booking_status: "pending" | "approved" | "cancelled" | "confirmed";
    user_id?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    room_id: mongoose.Types.ObjectId;
    guest_name: string;
    guest_email: string;
    guest_phone: string;
    check_in_date: NativeDate;
    check_out_date: NativeDate;
    number_of_guests: number;
    total_amount: number;
    booking_status: "pending" | "approved" | "cancelled" | "confirmed";
    user_id?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps>, {}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    timestamps: true;
}>> & mongoose.FlatRecord<{
    room_id: mongoose.Types.ObjectId;
    guest_name: string;
    guest_email: string;
    guest_phone: string;
    check_in_date: NativeDate;
    check_out_date: NativeDate;
    number_of_guests: number;
    total_amount: number;
    booking_status: "pending" | "approved" | "cancelled" | "confirmed";
    user_id?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Booking;
//# sourceMappingURL=Booking.d.ts.map