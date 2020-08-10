import React from "react";
import { gsap } from "gsap";

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
  const contactToggle = (e) => {
    if (!e.target.classList.contains("active")) {
      e.target.classList.add("active");
      e.preventDefault();
      gsap.to(".contact-button", 0.5, { background: "black", zIndex: "2" });
      gsap.to(".contact-page", 1, { clipPath: "circle(2500px at 100% -10%)" });
    } else {
      e.target.classList.remove("active");
      e.preventDefault();
      gsap.to(".contact-button", 0.5, { background: "black", zIndex: "2" });
      gsap.to(".contact-page", 1, { clipPath: "circle(50px at 100% -10%)" });
    }
  };

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
          <ContactButton className="contact-button" onClick={contactToggle}>
            Contact
          </ContactButton>
        </NavList>
      </Nav>
      <Contact />
    </div>
  );
};

export default Navbar;
