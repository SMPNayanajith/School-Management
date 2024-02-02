import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import { Link } from 'react-router-dom';



export default function NavBar() {
  return (
    
  <div className='navbarlink'>
        <Navbar  className='navbarshadow'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="jj"> {/* Use ml-auto to push the items to the right */}
            <Link to="/" className='navlink'>Home</Link>
            <Link to="/Students" className='navlink'>Students</Link>
            <Link to="/Teacher" className='navlink'>Teacher</Link>
            <Link to="/Staff" className='navlink'>Non Staff</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      
  </div>
  
  

  
  )
}
