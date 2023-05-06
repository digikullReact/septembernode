const express = require("express");
const app = express();  // created app object
const cors=require("cors");
//const path=require("path");
const { v4: uuidv4 } = require('uuid');

const port = 8080
const data=[
    {
      "_id": "64565a823b88d8eed2378b97",
      "age": 68,
      "name": "Crane Sherman",
      "address": "642 Stillwell Avenue, Yukon, California, 2797"
    },
    {
      "_id": "64565a820be03a5004c2acdf",
      "age": 67,
      "name": "Ada Glass",
      "address": "235 Seigel Court, Cochranville, Kansas, 8241"
    },
    {
      "_id": "64565a82454d16ac595f8e34",
      "age": 73,
      "name": "Catalina Maynard",
      "address": "979 Ryerson Street, Groveville, Washington, 3862"
    },
    {
      "_id": "64565a8249328534a5321223",
      "age": 93,
      "name": "Whitney Farley",
      "address": "485 Kathleen Court, Fairmount, Utah, 6524"
    },
    {
      "_id": "64565a829268905b4e043419",
      "age": 22,
      "name": "Sophia Ewing",
      "address": "285 Centre Street, Riverton, Rhode Island, 1611"
    },
    {
      "_id": "64565a82ead5119b5063816c",
      "age": 10,
      "name": "Whitehead Joseph",
      "address": "118 Lott Street, Cloverdale, Wisconsin, 919"
    },
    {
      "_id": "64565a82eafc5db0b5bcb49b",
      "age": 93,
      "name": "Charlene Stark",
      "address": "410 Heyward Street, Bluetown, Guam, 1848"
    },
   
   
  ]
app.use(cors());  // this is you can use app level middleware

app.use(express.json());

app.get("/person",(req,res)=>{

    // sending response
   // res.send()// send text data
   // res.json() // which formats your data into jso
 //   res.sendFile();// which sends the file

 res.json(data);

})


// post route for getting the data to add user
app.post("/person",(req,res)=>{
  
  //  console.log(req.body);
    const requestBody=req.body;
    requestBody._id=uuidv4();
    data.push(requestBody)
    res.json({
        message:"success"
    })
})




// creating routes here
/*
app.use(express.static("client/build"))

app.get("*",(req,res)=>{

    res.sendFile(`${path.join(__dirname,"client/build")}/index.html`)
})
*/

// routes for person domain






app.listen(port, (err) => {
    if (!err) {
        console.log("Server running on port ", port)
} else {
        console.log(err);
    }
})

