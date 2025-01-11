import React from 'react';
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
          <div className="row">
            <div className="nav_wrapper">
              <img src={logo} className='logo_svg' alt="" />
              <Link to={}> Sign In</Link>
            </div>
          </div>
        </nav>
    );
}

export default Nav;
