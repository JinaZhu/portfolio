import React from "react";
import {
  Nav,
  NavList,
  NavLi,
  NavLink,
  ContactButton,
  ContactPage,
} from "./styled";
import Contact from "./Contact";

const Navbar = () => {
  return (
    <div>
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
      <Contact />
    </div>
  );
};

export default Navbar;
