import app from "./app.js";
import "./db.js";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";
import "./models/Comment";
import "./models/User";

const PORT = process.env.PORT || 4000;

const handleListening = () => {
  console.log("Connected");
};

app.listen(PORT, handleListening);
