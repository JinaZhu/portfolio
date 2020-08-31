import React, { useState } from "react";
import { gsap } from "gsap";

import { Nav, NavList, NavLi, NavLink, ContactButton } from "./styled";
import Contact from "./Contact";

const Navbar = ({ pageColor }) => {
  const [isActive, setIsActive] = useState(false);
  const [buttonText, setButtonText] = useState("Contact");
  const contactToggle = (e) => {
    console.log(e);
    if (isActive === false) {
      e.preventDefault();
      setIsActive(true);
      setButtonText("Close");
      gsap.to(".contact-page", 1, { clipPath: "circle(2500px at 100% -10%)" });
    } else {
      setIsActive(false);
      e.preventDefault();
      setButtonText("Contact");
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
            <NavLink to="/project">Projects</NavLink>
          </NavLi>
          <NavLi>
            <NavLink to="/about">About Me</NavLink>
          </NavLi>
          <ContactButton
            isActive={isActive}
            onClick={contactToggle}
            color={pageColor}
          >
            {buttonText}
          </ContactButton>
        </NavList>
      </Nav>
      <Contact />
    </div>
  );
};

export default Navbar;
