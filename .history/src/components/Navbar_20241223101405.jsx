import React from 'react';
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
         <img src={Logo} alt="" />
          <div className="links">
             <Link></Link>
          </div>
        </div>
    );
}

export default Nav;
