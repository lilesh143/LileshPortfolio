import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import projectRoute from "./route/project.route.js"

const app = express();

dotenv.config();

app.use(cors({
    origin: "https://lilesh-portfolio-frontend.vercel.app",
    methods: ["POST", "GET", "OPTIONS", "PATCH", "DELETE", "PUT"],
    credentials: true
}));
app.use(express.json());


const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
    mongoose.connect(URI, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/projects", projectRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});