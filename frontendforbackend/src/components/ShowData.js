import React,{useState,useEffect} from 'react'
import axios from "axios";
const url="http://localhost:8080"

const ShowData = () => {
const [state,setState]=useState([]);
const [load,setLoad]=useState(false);
const [form,setForm]=useState({
  name:"",
  age:"",
  address:""
})

const hadnleChange=(event)=>{
  setForm({...form,[event.target.name]:event.target.value})

}
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
    },[load])

    const handleClick=()=>{

      axios.post(`${url}/person`,form).then(data=>{
        setLoad(!load);

      })

    }

    const deleteData=(_id)=>{
      axios.delete(`${url}/person`,{
       
        data: {
          _id: _id
        }
      }).then(data=>{
        setLoad(!load);

      })

    }

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
        <td onClick={()=>deleteData(ele._id)}><button className='btn btn-danger'>Delete</button></td>
      </tr>

      ))
    }
 
   
  </tbody>
</table>

<div className='row'>

  <div className='col-6 offset-3'>
    <input type='text' placeholder='name' className='form-control' name='name' onChange={hadnleChange}/>
    <input type='text' placeholder='age' className='form-control' name='age' onChange={hadnleChange}/>
    <input type='text' placeholder='address' className='form-control' name='address' onChange={hadnleChange}/>
    <button className='btn btn-success' onClick={handleClick}>
      Submit Data
    </button>



  </div>

</div>
    </div>
  )
}

export default ShowData