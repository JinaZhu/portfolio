import React from "react";
import {
  Nav,
  NavList,
  NavLi,
  NavLink,
  ContactButton,
  ContactPage,
} from "./styled";

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
      <ContactPage>
        <ul class="nav-links">
          <h3>Twitter</h3>
          <h3>Youtube</h3>
          <h3>Instagram</h3>
        </ul>
        <div class="contract">
          <h2>Stay in touch.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            recusandae maxime rerum beatae nobis minus! Ab nemo pariatur
            delectus, praesentium, animi vero, enim laborum veritatis odit vitae
            repellat non sunt!
          </p>
        </div>
      </ContactPage>
    </div>
  );
};

export default Navbar;
