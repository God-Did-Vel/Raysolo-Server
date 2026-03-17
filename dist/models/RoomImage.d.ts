import mongoose from 'mongoose';
declare const RoomImage: mongoose.Model<{
    room_id: mongoose.Types.ObjectId;
    image_url: string;
    alt_text: string;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    room_id: mongoose.Types.ObjectId;
    image_url: string;
    alt_text: string;
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    room_id: mongoose.Types.ObjectId;
    image_url: string;
    alt_text: string;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    room_id: mongoose.Types.ObjectId;
    image_url: string;
    alt_text: string;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    room_id: mongoose.Types.ObjectId;
    image_url: string;
    alt_text: string;
} & mongoose.DefaultTimestampProps>, {}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    timestamps: true;
}>> & mongoose.FlatRecord<{
    room_id: mongoose.Types.ObjectId;
    image_url: string;
    alt_text: string;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default RoomImage;
//# sourceMappingURL=RoomImage.d.ts.map