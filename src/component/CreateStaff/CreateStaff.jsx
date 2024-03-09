import React, { useState } from 'react';
import './CreateStaff.css';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CreateStaff() {
  let navigate = useNavigate();

  const [staff, setStaff] = useState({
    full_name: '',
    email_address: '',
    registration_no: '',
    address: '',
    birthday: ''
  });

  const { full_name, email_address, registration_no, address, birthday } = staff;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setStaff({ ...staff, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/v1/staff/post', staff);
      alert('Staff created successfully');
      navigate('/staff');
    } catch (error) {
      console.error('Error creating staff:', error);
    }
  };

  return (
    <div>
      <NavBar />
      <form onSubmit={(e) => onSubmit(e)} className='form1'>
        <div className='form-group'>
          <label htmlFor='full_name' className='formletter'>
            Full Name
          </label>
          <input
            type='text'
            className='form-control'
            id='full_name'
            aria-describedby='emailHelp'
            placeholder='Enter name'
            name='full_name'
            value={full_name}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email_address' className='formletter'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='email_address'
            placeholder='Email'
            name='email_address'
            value={email_address}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='registration_no' className='formletter'>
            Registration No.
          </label>
          <input
            type='number'
            className='form-control'
            id='registration_no'
            placeholder='Enter No.'
            name='registration_no'
            value={registration_no}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='address' className='formletter'>
            Address
          </label>
          <input
            type='text'
            className='form-control'
            id='address'
            placeholder='Address'
            name='address'
            value={address}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='birthday' className='formletter'>
            Birthday
          </label>
          <input
            type='date'
            className='form-control'
            id='birthday'
            placeholder='Birthday y/m/d'
            name='birthday'
            value={birthday}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
}
