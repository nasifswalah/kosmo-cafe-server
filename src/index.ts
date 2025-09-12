import express, { Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./utils/mongodb";

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});