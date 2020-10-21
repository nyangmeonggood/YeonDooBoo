import app from "./app.js";
import "./db.js";

const PORT = 4000;

const handleListening = () => {
  console.log("Connected");
};

app.listen(PORT, handleListening);
