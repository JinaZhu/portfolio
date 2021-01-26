import React, { useState } from "react";
import { gsap } from "gsap";

import { Nav, NavList, NavLi, NavLink, ContactButton, NavP } from "./styled";
import Contact from "./Contact";

const Navbar = ({ pageColor, currentPage }) => {
  const [isActive, setIsActive] = useState(false);
  const [buttonText, setButtonText] = useState("Contact");
  const contactToggle = (e) => {
    e.preventDefault();
    if (isActive === false) {
      setIsActive(true);
      setButtonText("Close");
      gsap.to(".contact-page", 1, { clipPath: "circle(2500px at 100% -10%)" });
    } else {
      setIsActive(false);
      setButtonText("Contact");
      gsap.to(".contact-page", 1, { clipPath: "circle(50px at 100% -10%)" });
    }
  };

  function checkPage(navSection) {
    if (currentPage === navSection) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div>
      <Nav>
        <NavList>
          <NavLi>
            <NavP isActive={checkPage("home")}>
              <NavLink to="/">Home</NavLink>
            </NavP>
          </NavLi>
          <NavLi>
            <NavP isActive={checkPage("project")}>
              <NavLink to="/project">Projects</NavLink>
            </NavP>
          </NavLi>
          <NavLi>
            <NavP isActive={checkPage("about")}>
              <NavLink to="/about">About Me</NavLink>
            </NavP>
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
