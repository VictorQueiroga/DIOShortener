import { config } from "config/constants";
import mongoose from "mongoose";

export class MongoConnection {
    public async connect(): Promise<void>{
        try {
           await mongoose.connect(config.MONGO_CONNECTION);
        } catch (error) {
            console.error(error.message);
            process.exit(1);
        }
    }
}