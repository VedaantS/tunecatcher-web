import mongoose from "mongoose"

const MONGODB_URL = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1';
const DB_NAME = 'mynewdb';

if (!MONGODB_URL) {
    throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local"
    )
}


const dbConnect = async () => {
    if (mongoose.connection.readyState >= 1) {
        return
    }
    return mongoose.connect(MONGODB_URL, {
        dbName: DB_NAME,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>console.log("connected to db")).catch((err)=>console.log(err));
}

export default dbConnect;