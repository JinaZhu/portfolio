import React from "react";
import { Nav, NavList, NavLi, NavLink, ContactButton } from "./styled";

const Navbar = () => {
  return (
    <Nav>
      <NavList>
        <NavLi>
          <NavLink href="./Home">Home</NavLink>
        </NavLi>
        <NavLi>
          <NavLink href="./Project">Project</NavLink>
        </NavLi>
        <NavLi>
          <NavLink href="./AboutMe">About Me</NavLink>
        </NavLi>
        <ContactButton>Contact</ContactButton>
      </NavList>
    </Nav>
  );
};

export default Navbar;
