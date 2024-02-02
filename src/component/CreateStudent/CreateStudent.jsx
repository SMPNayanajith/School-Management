import React from 'react'
import './CreateStudent.css';
import NavBar from '../NavBar/NavBar';

export default function CreateStudent() {
  return (
    <div className='studentform'>
      <NavBar/>
       <form class='form1'>
  <div class="form-group">
    <label for="exampleInputEmail1" className='formletter'>Full Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" className='formletter'>Email address</label>
    <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Email"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" className='formletter'>Registration No.</label>
    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Enter No."/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" className='formletter'>Address</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Address"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" className='formletter'>Birthday</label>
    <input type="date" class="form-control" id="exampleInputPassword1" placeholder="Birthday y/m/d"/>
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
