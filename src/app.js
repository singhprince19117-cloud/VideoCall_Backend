import "dotenv/config";

import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";

import cors from "cors";

import { connectToSocket } from "./controllers/socketManager";


const app = express();
const server = createServer(app);
connectToSocket(server);


app.set("port", (process.env.PORT || 3000));
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ extended: true, limit: "40kb" }));



const start = async () => {

    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB is connected");

    server.listen(app.get("port"), () => {
        console.log("server is connected");
    });
}

start();