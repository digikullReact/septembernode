// Store all the users in it ----->
// DAO (Data access object layer --->which interacts with the database)
const { v4: uuidv4 } = require('uuid');

const USERS=[]

const createUser=(userData)=>{
   let existing= USERS.find(ele=>ele.username==userData.username);
   if(existing){
    return false;
   }

   // Generate a Id for the user 
   userData.id=uuidv4();
   USERS.push(userData)

  return  true

}

const getAllUsers=()=>{
    return USERS;
}

const getUserByUsername=(username)=>{

    return USERS.find(ele=>ele.username==username);

}

module.exports={
    getAllUsers,
    getUserByUsername,
    createUser
}