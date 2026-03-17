import mongoose from 'mongoose';
declare const Review: mongoose.Model<{
    comment: string;
    user_name: string;
    rating: number;
    is_approved: boolean;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    comment: string;
    user_name: string;
    rating: number;
    is_approved: boolean;
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    comment: string;
    user_name: string;
    rating: number;
    is_approved: boolean;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    comment: string;
    user_name: string;
    rating: number;
    is_approved: boolean;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    comment: string;
    user_name: string;
    rating: number;
    is_approved: boolean;
} & mongoose.DefaultTimestampProps>, {}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    timestamps: true;
}>> & mongoose.FlatRecord<{
    comment: string;
    user_name: string;
    rating: number;
    is_approved: boolean;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Review;
//# sourceMappingURL=Review.d.ts.map