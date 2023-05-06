const data=require("../db");

const get=(req,res)=>{

    // sending response
   // res.send()// send text data
   // res.json() // which formats your data into jso
 //   res.sendFile();// which sends the file

 res.json(data);

}

const create=(req,res)=>{
  
    //  console.log(req.body);
      const requestBody=req.body;
      requestBody._id=uuidv4();
      data.push(requestBody)
      res.json({
          message:"success"
      })
  }


  const update=(req,res)=>{
  
    //  console.log(req.body);
      const requestBody=req.body;

      const filetered=data.filter(ele=>ele._id!=requestBody._id)
      filetered.push(requestBody)
      data=filetered
      res.json({
          message:"success"
      })
  }

  const Delete=(req,res)=>{
  
    //  console.log(req.body);
      const requestBody=req.body;
    //  console.log(requestBody)

      const filetered=data.filter(ele=>ele._id!=requestBody._id)
 
      data=filetered
      res.json({
          message:"success"
      })
  }

  module.exports={
    create,get,update,Delete
  }