import React, { useState, useEffect } from 'react';
import './Students.css';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const result = await axios.get('http://localhost:8080/api/v1/student/get');
    setStudents(result.data);
  };

  return (
    <div>
      <NavBar />
      <button type="button" class="btn btn-primary btn-lg buttonstyle">
        <Link to="/CreateStudent" className='buttonlink'>Create Student</Link>
      </button>

      <table class="table shadow tabledata">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email</th>
            <th scope="col">Registration No.</th>
            <th scope="col">Address</th>
            <th scope="col">Birthday</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{student.full_name}</td>
              <td>{student.email_address}</td>
              <td>{student.registration_no}</td>
              <td>{student.address}</td>
              <td>{student.birthday}</td>
              <td>
                <button class="btn btn-primary" type="submit">Update</button>
                <button type="button" class="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
