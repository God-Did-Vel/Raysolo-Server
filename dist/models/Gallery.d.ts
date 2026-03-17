import mongoose from 'mongoose';
declare const Gallery: mongoose.Model<{
    image_url: string;
    alt_text: string;
    category: string;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    image_url: string;
    alt_text: string;
    category: string;
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    image_url: string;
    alt_text: string;
    category: string;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    image_url: string;
    alt_text: string;
    category: string;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    image_url: string;
    alt_text: string;
    category: string;
} & mongoose.DefaultTimestampProps>, {}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    timestamps: true;
}>> & mongoose.FlatRecord<{
    image_url: string;
    alt_text: string;
    category: string;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Gallery;
//# sourceMappingURL=Gallery.d.ts.map