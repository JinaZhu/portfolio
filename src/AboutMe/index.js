import React from "react";

import Navbar from "../Navbar";
import { AboutMePage, PageTitle, TitleContainer } from "./styled";
import PersonalInfo from "./PersonalInfo";

const AboutMe = () => {
  return (
    <AboutMePage>
      <Navbar />
      <TitleContainer>
        <PageTitle>About</PageTitle>
        <PageTitle>Me</PageTitle>
      </TitleContainer>
      <PersonalInfo />
    </AboutMePage>
  );
};

export default AboutMe;
