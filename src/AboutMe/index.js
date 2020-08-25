import React from "react";

import Navbar from "../Navbar";
import { AboutMePage, PageTitle, TitleContainer } from "./styled";
import PersonalInfo from "./PersonalInfo";
import TechStack from "./TechStack";

const AboutMe = () => {
  return (
    <AboutMePage>
      <Navbar />
      <TitleContainer>
        <PageTitle>About</PageTitle>
        <PageTitle>Me</PageTitle>
      </TitleContainer>
      <PersonalInfo />
      <TechStack />
    </AboutMePage>
  );
};

export default AboutMe;
