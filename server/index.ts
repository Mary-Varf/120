import { Nitro } from 'nitropack';
import mongoose from "mongoose";
export default async (_nitroApp: Nitro) => {
    const config = useRuntimeConfig();
    console.log(config.mongodbUri);
    try {
        await mongoose.connect(config.mongodbUri);
        console.log('connected !!!!!!!!')
    } catch (e) {
        console.log(e)
    }
}