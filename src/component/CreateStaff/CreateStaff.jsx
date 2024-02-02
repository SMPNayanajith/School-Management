import React, { useState } from 'react'
import './CreateStaff.css'
import NavBar from '../NavBar/NavBar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function CreateStaff() {
  let navigate=useNavigate()


  const[staff,setStaff]=useState({

    full_name:"",
    email_address:"",
    registration_no:"",
    address:"",
    birthday:""
    })

    const { full_name,email_address,registration_no,address,birthday}=staff
    const onInputChange=(e)=>{

      setStaff({...staff,[e.taeget.full_name]:e.target.value})


    }

    const onSubmit=async (e)=>{

      e.preventDefault()
      await axios.post("http://localhost:8080/staff",staff)
      navigate("/")
    }


    
  return (
    <div>
      <NavBar/>
        <form onSubmit={(e)=>onSubmit(e)} class='form1'>
  <div class="form-group">
    <label for="exampleInputEmail1" className='formletter'>Full Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"
    
    value={full_name}
    onChange={(e)=>onInputChange(e)}
    />
    

  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" className='formletter'>Email address</label>
    <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Email"
    
    value={email_address}
    onChange={(e)=>onInputChange(e)}
    />
   


  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" className='formletter'>Registration No.</label>
    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Enter No."
    
    value={registration_no}
    onChange={(e)=>onInputChange(e)}
  
  />
 

  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" className='formletter'>Address</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Address"
    
    value={address}
    onChange={(e)=>onInputChange(e)}
    />
    

  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" className='formletter'>Birthday</label>
    <input type="date" class="form-control" id="exampleInputPassword1" placeholder="Birthday y/m/d"
    
    value={birthday}
    onChange={(e)=>onInputChange(e)}
    />
    

  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
