import React from "react";

import Navbar from "../Navbar";
import { AboutMePage, PageTitle, TitleContainer } from "./styled";
import PersonalInfo from "./PersonalInfo";
import TechStack from "./TechStack";
import WorkExperience from "./WorkExperience";

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
      <WorkExperience />
    </AboutMePage>
  );
};

export default AboutMe;
