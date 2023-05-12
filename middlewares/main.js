const express = require("express");
const app = express();
const {first,second}=require("./middleware");
const {appLevel,appLevel2}=require("./applevelmiddleware");
app.use(express.json(),appLevel,appLevel2);

//app.use(appLevel,appLevel2)
//app.use(appLevel2)
const server = () => {
   // route level middleware
    app.post("/data/:id",first , second, function (req, res) {
        res.send("Data")

    })

    app.post("/data", function (req, res) {
        res.send("Data Api ")

    })

    app.listen("8080", () => {
        console.log("Server running on port 8080")
    })

}

//1- App level middleware
// 2- Route level middleware
// 3- Error Middleware 


server();