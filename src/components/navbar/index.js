import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          Logo
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/services' activeStyle>
            Projects
          </NavLink>
  
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Kontakt</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;