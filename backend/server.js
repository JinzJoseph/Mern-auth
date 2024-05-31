import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";

import userRoute from "./routes/userRoute.js";
import AuthRoute from "./routes/authRoute.js"
import otpRoute from "./routes/otpRoute.js"
const app = express();
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
connectDB();

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

app.use("/api/user", userRoute);
app.use("/api/otp",otpRoute)
app.use("/api/auth",AuthRoute)