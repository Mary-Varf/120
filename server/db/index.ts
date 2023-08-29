import mongoose from 'mongoose';
export default async () => {
    const config = useRuntimeConfig();

    try{
        await mongoose.connect(config.MONGO_URI)
        console.log('Connected!!!!!')
    } catch(error) {
        console.log('OOOOOO' + error);
    }
}
