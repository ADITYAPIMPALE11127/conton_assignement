import React from 'react';
import './navbar.css'; 

function Navbar() {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li><a href="">Research</a></li>
        <li><a href="">Conference</a></li>
        <li><a href="">Central Library</a></li>
        <li><a href="">Syllabus</a></li>
        <li><a href="">Moodle(LMS)</a></li>
        <li><a href="">IIC</a></li>
      </ul>
      <ul className="navbar-right">
        <li><i className='bx bxl-facebook'></i></li>
        <li><i className='bx bxl-linkedin'></i></li>
        <li><i className='bx bxl-youtube'></i></li>
        <button className="login-button">Login</button>
        <button className="student-button">Student</button>
        <button className="parents-button">Parent's</button>
        <button className="employee-button">Employee</button>
        <button className="hod-button">HOD/Incharge</button>
      </ul>
    </div>
  );
}

export default Navbar;
