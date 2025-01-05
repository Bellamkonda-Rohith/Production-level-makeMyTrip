import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navlink = ({ href, icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === href;

 



  return (
    <li  >
      <Link className={` nav-link d-flex  justify-content-center  text-dark rounded ${isActive ? "bg-warning text-light" : null}`} to={href}>
        <div className='container d-flex flex-column justify-content-center'>
          <div className='container d-flex  justify-content-center align-items-center'>
          <img src={icon} alt={label} className="me-2" style={{ width: "20px", filter: isActive ? "invert(1)" : "none" }} />

          </div>
          <div className='container d-flex  justify-content-center align-items-center'>
          {label}
          </div>
        </div>
    
       
    
      </Link>
    </li>
  );
};

export default Navlink;
