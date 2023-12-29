import express from "express";
// import mongoose from 'mongoose';
import userRouter from "./routes/user.js";
// import { connectDB } from "./data/database.js";
import taskRouter from "./routes/task.js";
import { config } from "dotenv";
import cookieParser from 'cookie-parser'


export const app = express();

config({
    path: "./data/config.env",
});

// connectDB();

const router = express.Router();

// Using Middlewares
app.use(express.json());
app.use(cookieParser());

// Using routes
app.use("/api/v1/users" , userRouter);
app.use("/api/v1/task" , taskRouter);


// mongoose
// .connect("mongodb://127.0.0.1:27017", {
//     dbname: "backendapi",
// })
// .then(() => console.log("Database connected"))
// .catch((e) => console.log(e));

// const schema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String,
// });

// const User = mongoose.model("User", schema);

app.get('/', (req, res) => {
    res.send("Hello Everyone !");
});

// app.get("/users/all", async (req, res) => {

//     const users = await User.find({});

//     const keyword = req.query.keyword;
//     console.log(keyword);

//     res.json({
//         success: true,
//         users,
//     });
// });

// app.post("/users/new", async (req, res) => {

// const {name, email, password} = req.body;


//     await User.create({
//          name,
//          email, // static data for use
//          password,
//     });

//     res.status(201).cookie("tempi", "lol" ).json({
//         success: true,
//         message : "Done",
//     });
// });

// app.get("/usersid/special", (req, res) => {
//     res.json({
//         success: true,
//         message : "just joking bitch",
//     });
// });

// app.get("/userid/:id", async (req, res) => {
//     const {id} = req.params;
//     const user = await User.findById(id);

//     res.json({
//         success: true,
//         user,
//     });
// });

// app.listen(4000, () => {
//     console.log("Server is Working");
// });