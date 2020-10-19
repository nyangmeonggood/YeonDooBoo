import app from "./app.js";

const PORT = 4000;

const handleListening = () => {
  console.log("Connected");
};

app.listen(PORT, handleListening);
