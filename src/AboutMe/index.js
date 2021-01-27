import React from "react";

import Navbar from "../Navbar";
import { AboutMePage, PageTitle, TitleContainer } from "./styled";
import PersonalInfo from "./PersonalInfo";
import TechStack from "./TechStack";
import WorkExperience from "./WorkExperience";
import { useSeason } from "../Providers/Season";

const AboutMe = () => {
  const { season } = useSeason();
  return (
    <AboutMePage color={season.color}>
      <Navbar currentPage={"about"} />
      <TitleContainer>
        <PageTitle>About</PageTitle>
        <PageTitle>Me</PageTitle>
      </TitleContainer>
      <PersonalInfo />
      <TechStack season={season} />
      <WorkExperience season={season} />
    </AboutMePage>
  );
};

export default AboutMe;
