const express=require("express");
const router=express.Router();
const {create,get,update,Delete}=require("../controllers/person");
router.get("/person",get)


// post route for getting the data to add user
router.post("/person",create)

router.put("/person",update)

  router.delete("/person",Delete)

  module.exports=router;