import express from "express";
import cors from "cors";
import db from "./src/DataBase/ConectDb.mjs";
import routerLogin from "./src/routes/loginRoute.mjs";
import configs from "./configs.mjs";
const app = express();
const PORT = configs.serverPort;

app.use(cors()); //allow the Express server to respond to HTTP requests from other domains
app.use(express.json()); // Enable JSON parsing for incoming requests
app.use("/", routerLogin); //connect the login route

//connect the database
db.on("error", (err) => {
  console.error("Database connection error:", err);
});

//connect the server
app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server created on port: ${PORT}`);
  }
});
