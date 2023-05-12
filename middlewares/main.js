const express = require("express");
const app = express();
const {first,second}=require("./middleware");
const {appLevel,appLevel2,sanitizeUpperCase}=require("./applevelmiddleware");
app.use(express.json(),sanitizeUpperCase,appLevel,appLevel2);

//app.use(appLevel,appLevel2)
//app.use(appLevel2)
const server = () => {
   // route level middleware
    app.post("/data/:id",first , second, function (req, res) {
        res.send("Data")

    })

    app.post("/data", function (req, res) {
        res.send("Data Api",req.body);

    })

    app.listen("8080", () => {
        console.log("Server running on port 8080")
    })

}

//1- App level middleware
// 2- Route level middleware
// 3- Error Middleware 


server();

// you have to create a  middleware ,that checks for text and if if finds any text that contains
// all capital letters --->it converts it into small case
// req.body 