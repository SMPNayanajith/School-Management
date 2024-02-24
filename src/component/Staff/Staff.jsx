import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Staff() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get('http://localhost:8080/api/v1/staff/get');
    setUsers(result.data);
  };

  return (
    <div>
      <NavBar />
      <button type="button" class="btn btn-primary btn-lg  buttonstyle">
        <Link to="/CreateStaff" className='buttonlink'>Create Staff</Link>
      </button>

      <table class="table shadow  tabledata">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email </th>
            <th scope="col">Registration No.</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((staff, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{staff.full_name}</td>
              <td>{staff.email_address}</td>
              <td>{staff.registration_no}</td>
              <td>{staff.address}</td>
              {/* <td>{staff.birthday}</td> */}
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
