import React from "react";
import {
  ContactPage,
  NavLi,
  NavList,
  ContactContainer,
  MessageForm,
  FormInput,
  FormTextarea,
} from "./styled";
import { Button } from "../globalStyles";
import instagramLogo from "../images/Icons/instagram.svg";
import githubLogo from "../images/Icons/github.svg";
import linkedInLogo from "../images/Icons/linkedin.svg";

const Contact = () => {
  return (
    <ContactPage>
      <ContactContainer>
        <h1>LET'S GET IN TOUCH</h1>
        <p>
          Need anything built, want to work together or just want to say hi?
          Simply shoot me a message below or connect with me and I will get back
          to you soon!
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
        <MessageForm>
          <label htmlFor="name">
            <span>Name</span>
          </label>
          <FormInput type="text" name="name" required autoComplete="off" />
          <label htmlFor="email">
            <span>Email</span>
          </label>
          <FormInput type="email" name="email" required autoComplete="off" />
          <label htmlFor="email">
            <span>Message</span>
          </label>
          <FormTextarea cols="30" rows="5" />
          <Button
            border={"1px solid #c98a6d"}
            paddings={"0.5rem"}
            color={"#c98a6d"}
            hoverBackgroundColor={"#c98a6d"}
          >
            Submit
          </Button>
        </MessageForm>
      </ContactContainer>
    </ContactPage>
  );
};

export default Contact;
