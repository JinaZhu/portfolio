import React from "react";

import { SubTitle, ProjectPage, TitleContainer, Title } from "./styled";
import Navbar from "../Navbar";
import ProjectLayout from "./ProjectLayout";

const Project = () => {
  return (
    <ProjectPage>
      <Navbar />
      <TitleContainer>
        <Title>Things</Title>
        <Title>I've Built</Title>
        <SubTitle>featured project</SubTitle>
      </TitleContainer>
      <ProjectLayout border="left" />
      <ProjectLayout border="right" />
    </ProjectPage>
  );
};

export default Project;
