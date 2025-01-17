import React, { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo.svg'
import { Link, useLocation } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../firebase/init';
import { Avatar } from "./ui/avatar"
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';
import { Box, Button } from '@chakra-ui/react';

const Nav = ({quantity}) => {
  const [user, setUser] = useState(null)
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef(null)
  const location = useLocation();

  const toggleMenu = () => {
    setShowMenu((prev) => !prev)
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false)
      }
    };
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const auth = getAuth();
    const checkLogin = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
      return () => checkLogin();
    }, [])

  }, []);

  function logout() {
    signOut(auth);
    setShowMenu((prev) => !prev)
  }

    return (
        <nav>
          <div className="row">
            <div className="nav_wrapper">
  
              <div className="nav__logo--wrapper">
              <Link className='logo__link' to='/'>
              <img src={logo} className='logo_svg' alt="" />
              </Link>
              <Link to="/">
                  <Button 
                  color="white" 
                  variant='plain'
                  fontWeight="300"
                  fontSize='16px'
                  marginLeft="12px"
                  >
                   Home
                  </Button>
              </Link>
              <Link to="/search">
                  <Button 
                  color="white" 
                  variant='plain'
                  fontWeight="300"
                  fontSize='16px'
                  marginLeft="12px"
                  >
                   Directory
                  </Button>
              </Link>
              </div>

            
              

              {user ? (
                <>
                <div className="profile">
                <div className="shopping__cart--wrapper">
                  <Link to="/cart">
                  <i class="fa-solid fa-cart-shopping">

                  </i>
                  </Link>
                  <div className="cart__value--popup">
                    {quantity ? quantity : 0}
                  </div>
                </div>


                  <Avatar
                  className="avatar"
                  colorPalette='red' 
                  border=''
                  variant='solid'
                  onClick={toggleMenu}
                  size="sm"
                  name={user.email}>
                  </Avatar>
                  

                  {showMenu && (
                    <Box
                    ref={menuRef}
                    bg="white"
                    boxShadow="md"
                    p="2"
                    borderRadius="md"
                    >
                      <Button
                        onClick={logout}
                        colorScheme="red"
                        variant="solid"
                        >
                        Logout
                      </Button>
                    </Box>
                  )}
                  </div>
                  </>

                  ) : (
                  <div className="sign__buttons--wrapper">

                    <Link to='/signin'>
                    <div className="signin__button"> Sign in</div>
                    </Link>
                    <Link to='/signup'>
                 <div className="signup__button">
                  Join CL
                 </div>
                    </Link>
                  </div>  
                   
                  ) 
                  
              }
            </div>
          </div>
        </nav>
    );
}

export default Nav;
