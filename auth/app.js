const express=require("express");
const app=express();
const authRouter=require("./routes/auth")
const {errorMiddleware}=require("./middlewares/middleware");
app.use(express.json());
app.use("/auth",authRouter)

// registering error middleware at the end
app.use(errorMiddleware)

module.exports=app;