import mongoose from 'mongoose';
declare const PaymentMethod: mongoose.Model<{
    provider: string;
    details: string;
    isActive: boolean;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    provider: string;
    details: string;
    isActive: boolean;
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    provider: string;
    details: string;
    isActive: boolean;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    provider: string;
    details: string;
    isActive: boolean;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    provider: string;
    details: string;
    isActive: boolean;
} & mongoose.DefaultTimestampProps>, {}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    timestamps: true;
}>> & mongoose.FlatRecord<{
    provider: string;
    details: string;
    isActive: boolean;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default PaymentMethod;
//# sourceMappingURL=PaymentMethod.d.ts.map