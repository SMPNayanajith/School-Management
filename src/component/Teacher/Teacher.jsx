import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'


export default function Teacher() {
  return (
    <div>
      <NavBar/>

       <button type="button" class="btn btn-primary btn-lg  buttonstyle">
       <Link to="/CreateTeacher" className='buttonlink'>Create Teacher</Link>  
        </button>

        
        <table class="table shadow  tabledata">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Full Name</th>
      <th scope="col">Email </th>
      <th scope="col">Registration No.</th>
      <th scope="col">Address</th>
      <th scope="col">Birthday</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>Larry</td>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        
    </div>
  )
}
