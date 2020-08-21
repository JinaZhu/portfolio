import React from "react";

import { ProjectPage, TitleContainer, Title } from "./styled";
import Navbar from "../Navbar";

const Project = () => {
  return (
    <ProjectPage>
      <Navbar />
      <TitleContainer>
        <Title>Things</Title>
        <Title>I've Built</Title>
      </TitleContainer>
    </ProjectPage>
  );
};

export default Project;
