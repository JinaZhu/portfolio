import React from "react";

import "swiper/css/swiper.css";
import {
  SubTitle,
  ProjectPage,
  TitleContainer,
  Title,
  AllProjects,
  ProjectBody,
} from "./styled";
import Navbar from "../Navbar";
import ProjectLayout from "./ProjectLayout";
import { useSeason } from "../Providers/Season";
import { applications } from "./ProjectList";

const Project = () => {
  const { season } = useSeason();

  return (
    <ProjectPage color={season.color}>
      <Navbar pageColor={"#748173"} currentPage={"project"} />
      <ProjectBody>
        <TitleContainer>
          <Title>Things</Title>
          <Title>I've Built</Title>
          <SubTitle>featured project</SubTitle>
        </TitleContainer>
        <AllProjects>
          {applications.map((application) => {
            return <ProjectLayout season={season} application={application} />;
          })}
        </AllProjects>
      </ProjectBody>
    </ProjectPage>
  );
};

export default Project;
