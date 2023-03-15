import express from "express";
import cors from "cors"
import morgan from "morgan";
import api from "./routes.js";

const app = express()

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(api)

app.get("/", (req, res) => {
  res.send("Server is already running")
})

export default app