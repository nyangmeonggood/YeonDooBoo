import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/Yeondooboo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const DBConnected = () => console.log("Connect to DB");
const DBConnectedError = (e) => console.log(`Error on DB Connection : ${e}`);

db.once("open", DBConnected);
db.on("error", DBConnectedError);
