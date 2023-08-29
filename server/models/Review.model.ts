import mongoose from 'mongoose';

const schema: mongoose.Schema = new mongoose.Schema(
    {
        author: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
);
export default mongoose.model('Review', schema);