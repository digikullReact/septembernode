// Store all the users in it ----->
// DAO (Data access object layer --->which interacts with the database)
const USERS=[]

const createUser=(userData)=>{

  return   USERS.push(userData)

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