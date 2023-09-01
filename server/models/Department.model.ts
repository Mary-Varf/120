import mongoose from 'mongoose';

const schema: mongoose.Schema = new mongoose.Schema(
    {
        department: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    }
);
export default mongoose.model('Department', schema);