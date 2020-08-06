import React from "react";
import { Nav, NavList, NavLi, NavLink, ContactButton } from "./styled";

const Navbar = () => {
  return (
    <Nav>
      <NavList>
        <NavLi>
          <NavLink href="/">Home</NavLink>
        </NavLi>
        <NavLi>
          <NavLink href="./project">Project</NavLink>
        </NavLi>
        <NavLi>
          <NavLink href="./aboutme">About Me</NavLink>
        </NavLi>
        <ContactButton>Contact</ContactButton>
      </NavList>
    </Nav>
  );
};

export default Navbar;
