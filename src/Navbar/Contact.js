import React from "react";
import {
  ContactPage,
  NavLi,
  NavList,
  ContactContainer,
  EmailLink,
  EmailButton,
  ContactTitle,
} from "./styled";
import instagramLogo from "../images/Icons/instagram.svg";
import githubLogo from "../images/Icons/github.svg";
import linkedInLogo from "../images/Icons/linkedin.svg";

const Contact = () => {
  const email = "jinazhu87@gmail.com";
  return (
    <ContactPage className="contact-page">
      <ContactContainer>
        <ContactTitle>LET'S GET IN TOUCH</ContactTitle>
        <p>
          Need anything built, want to work together, or just saying hi? Simply
          shoot me a message below or connect with me and I will get back to you
          soon!
        </p>
        <NavList>
          <NavLi>
            <a
              href="https://www.instagram.com/jinazhu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramLogo} alt="instagram logo" width="50" />
            </a>
          </NavLi>
          <NavLi>
            <a
              href="https://github.com/JinaZhu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubLogo} alt="github logo" width="50" />
            </a>
          </NavLi>
          <NavLi>
            <a
              href="https://www.linkedin.com/in/jina-zhu-459899ba/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedInLogo} alt="LinkedIn logo" width="50" />
            </a>
          </NavLi>
        </NavList>
        <EmailButton
          border={"1px solid #c98a6d"}
          paddings={"1rem 2rem"}
          color={"#c98a6d"}
          hoverBackgroundColor={"#c98a6d"}
        >
          <EmailLink href={`mailto:${email}`}>Say Hi</EmailLink>
        </EmailButton>
      </ContactContainer>
    </ContactPage>
  );
};

export default Contact;
