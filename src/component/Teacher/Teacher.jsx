import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';

export default function Teacher() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    loadTeachers();
  }, []);

  const loadTeachers = async () => {
    const result = await axios.get('http://localhost:8080/api/v1/teacher/get');
    setTeachers(result.data);
  };

  const deleteTeacher = async (id) => {
    await axios.delete(`http://localhost:8080/api/v1/teacher/delete/${id}`);
    loadTeachers(); // Reload the teachers after deletion
  };

  return (
    <div>
      <NavBar />
      <button type="button" className="btn btn-primary btn-lg buttonstyle">
        <Link to="/CreateTeacher" className='buttonlink'>Create Teacher</Link>
      </button>

      <table className="table shadow tabledata">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email</th>
            <th scope="col">Registration No.</th>
            <th scope="col">Address</th>
            <th scope="col">Birthday</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{teacher.full_name}</td>
              <td>{teacher.email_address}</td>
              <td>{teacher.registration_no}</td>
              <td>{teacher.address}</td>
              <td>{teacher.birthday}</td>
              <td>
                <button className="btn btn-primary" type="submit">Update</button>
                <button onClick={() => deleteTeacher(teacher.id)} className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
