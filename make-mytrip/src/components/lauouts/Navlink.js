import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navlink = ({ href, icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === href;

 



  return (
    <li  >
      <Link className={` nav-link d-flex align-items-center px-3 mx-2 text-dark rounded ${isActive?"bg-warning text-light":''}`} to={href}>
        <img src={icon} alt={label} className="me-2" style={{ width: "20px",filter: isActive ? "invert(1)" : "none" }} />
        {label}
      </Link>
    </li>
  );
};

export default Navlink;
