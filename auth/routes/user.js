const express=require("express");
const router=express.Router();
const {getUserData}=require("../controllers/usercontroller");

const {checkAuthorization}=require("../middlewares/middleware");

// This is a routes level middleware  and all the routes defined in this file
// will be   protected by this middleware
router.use(checkAuthorization)
router.get("/",getUserData)



module.exports=router