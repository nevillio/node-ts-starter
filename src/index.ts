import dotenv from "dotenv";
import express from "express";

dotenv.config();

const PORT = process.env.PORT;
const app = express();
console.log(`Your port is ${PORT}`);
app.listen(PORT || 3000);
