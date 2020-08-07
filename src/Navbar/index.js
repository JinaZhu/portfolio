import React from "react";
import { Nav, NavList, NavLi, NavLink, ContactButton } from "./styled";

const Navbar = () => {
  return (
    <Nav>
      <NavList>
        <NavLi>
          <NavLink to="/">Home</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="/project">Project</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="/about">About Me</NavLink>
        </NavLi>
        <ContactButton>Contact</ContactButton>
      </NavList>
    </Nav>
  );
};

export default Navbar;
