import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const DBConnected = () => console.log("Connect to DB");
const DBConnectedError = (e) => console.log(`Error on DB Connection : ${e}`);

db.once("open", DBConnected);
db.on("error", DBConnectedError);
