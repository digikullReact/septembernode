const express = require("express");
const app = express();  // created app object
const cors=require("cors");
const personRouter=require("./routes/person");
//const path=require("path");
const { v4: uuidv4 } = require('uuid');
const data=require("./db");

const port = 8080

app.use(cors());  // this is you can use app level middleware

app.use(express.json());

app.use("/api",personRouter)

app.get("/data/person",(req,res)=>{

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

app.put("/data/person",(req,res)=>{
  
    //  console.log(req.body);
      const requestBody=req.body;

      const filetered=data.filter(ele=>ele._id!=requestBody._id)
      filetered.push(requestBody)
      data=filetered
      res.json({
          message:"success"
      })
  })

  app.delete("/person",(req,res)=>{
  
    //  console.log(req.body);
      const requestBody=req.body;
    //  console.log(requestBody)

      const filetered=data.filter(ele=>ele._id!=requestBody._id)
 
      data=filetered
      res.json({
          message:"success"
      })
  })






// creating routes here

app.use(express.static("client/build"))

app.get("*",(req,res)=>{

    res.sendFile(`${path.join(__dirname,"client/build")}/index.html`)
})


// routes for person domain
// api routes --> /api 







app.listen(port, (err) => {
    if (!err) {
        console.log("Server running on port ", port)
} else {
        console.log(err);
    }
})

