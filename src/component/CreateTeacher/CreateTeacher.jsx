import React, { useState } from 'react';
import './CreateTeacher.css';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default function CreateTeacher() {
  const [teacher, setTeacher] = useState({
    full_name: '',
    email_address: '',
    registration_no: '',
    address: '',
    birthday: ''
  });

  const { full_name, email_address, registration_no, address, birthday } = teacher;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setTeacher({ ...teacher, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/v1/teacher/post', teacher);
      alert('Teacher created successfully');
       Navigate("/Teacher");
      // Optionally, redirect or perform other actions
    } catch (error) {
      console.error('Error creating teacher:', error);
      alert('Failed to create teacher');
    }
  };

  return (
    <div>
      <NavBar />
      <form onSubmit={(e) => onSubmit(e)} className='form1'>
        <div className='form-group'>
          <label htmlFor='exampleInputEmail1' className='formletter'>
            Full Name
          </label>
          <input
            type='text'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            placeholder='Enter name'
            name='full_name'
            value={full_name}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='exampleInputPassword1' className='formletter'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='exampleInputPassword1'
            placeholder='Email'
            name='email_address'
            value={email_address}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='exampleInputPassword1' className='formletter'>
            Registration No.
          </label>
          <input
            type='number'
            className='form-control'
            id='exampleInputPassword1'
            placeholder='Enter No.'
            name='registration_no'
            value={registration_no}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='exampleInputPassword1' className='formletter'>
            Address
          </label>
          <input
            type='text'
            className='form-control'
            id='exampleInputPassword1'
            placeholder='Address'
            name='address'
            value={address}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='exampleInputPassword1' className='formletter'>
            Birthday
          </label>
          <input
            type='date'
            className='form-control'
            id='exampleInputPassword1'
            placeholder='Birthday y/m/d'
            name='birthday'
            value={birthday}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className='form-group form-check'>
          <input type='checkbox' className='form-check-input' id='exampleCheck1' />
          <label className='form-check-label' htmlFor='exampleCheck1'>
            Check me out
          </label>
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
}
