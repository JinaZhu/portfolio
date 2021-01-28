import React, { useState } from "react";
import { gsap } from "gsap";

import { Nav, NavList, NavLink, ContactButton, NavP } from "./styled";
import Contact from "./Contact";
import { useSeason } from "../Providers/Season";

const Navbar = ({ currentPage }) => {
  const [isActive, setIsActive] = useState(false);
  const [buttonText, setButtonText] = useState("Contact");
  const { season } = useSeason();

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
          <NavP isActive={checkPage("home")}>
            <NavLink to="/">Home</NavLink>
          </NavP>
          <NavP isActive={checkPage("project")}>
            <NavLink to="/project">Projects</NavLink>
          </NavP>
          <NavP isActive={checkPage("about")}>
            <NavLink to="/about">About Me</NavLink>
          </NavP>
          <ContactButton
            isActive={isActive}
            onClick={contactToggle}
            color={season.color}
          >
            {buttonText}
          </ContactButton>
        </NavList>
      </Nav>
      <Contact season={season} />
    </div>
  );
};

export default Navbar;
