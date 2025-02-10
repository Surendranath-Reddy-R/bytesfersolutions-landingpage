import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <div className='bslogo'>
        <img src="bslogo2.jpeg" style={{ width: '25%', height: '25%'}} alt="Logo" />
        </div>
        <div className="logo"><h2>BYTESFER SOLUTIONS</h2></div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#categories">Categories</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#contact">Contact</a></li>
          {/* <button className='login-btn'>Login</button>
          <button className='signup-btn'>Signup</button> */}
          <li><a href="login.html" className="btn">Login</a></li>
          <li><a href="signup.html" className="btn">Signup</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
