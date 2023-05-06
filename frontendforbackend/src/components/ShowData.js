import React,{useState,useEffect} from 'react'
import axios from "axios";
const url="http://localhost:8080"

const ShowData = () => {
const [state,setState]=useState([]);

    const fetchData=()=>{

        axios.get(`${url}/person`).then(data=>{

            // We will set the data in the state
            setState(data.data);

        }).catch(err=>{

            console.log(err);

        })

    }

    useEffect(()=>{
      fetchData();
    },[])

  return (
    <div>

<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Age</th>
      <th scope="col">Name</th>
      <th scope="col">Address</th>
    </tr>
  </thead>
  <tbody>
    {
      state.map(ele=>(
        <tr>
        <th scope="row">{ele._id}</th>
        <td>{ele.age}</td>
        <td>{ele.name}</td>
        <td>{ele.address}</td>
      </tr>

      ))
    }
 
   
  </tbody>
</table>
    </div>
  )
}

export default ShowData