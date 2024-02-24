import React, { useState } from 'react';
import './CreateStudent.css';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CreateStudent() {
  let navigate = useNavigate();

  const [student, setStudent] = useState({
    full_name: '',
    email_address: '',
    registration_no: '',
    address: '',
    birthday: ''
  });

  const { full_name, email_address, registration_no, address, birthday } = student;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/api/v1/student/post', student);
    navigate('/');
  };

  return (
    <div className='studentform'>
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
