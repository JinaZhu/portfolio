import React from "react";

import githubLogo from "../images/Icons/github.svg";
import {
  ProjectContainer,
  ProjectDescription,
  StackContainer,
  StackName,
  ProjectTitle,
} from "./styled";

const ProjectLayout = () => {
  return (
    <ProjectContainer>
      <ProjectTitle>Adventure Await</ProjectTitle>
      <ProjectDescription>
        <p>
          Adventure Awaits is a full-stack web application that allows anyone to
          discover somewhere new by providing an insight into a country.
        </p>
        <StackContainer>
          <StackName>React</StackName>
          <StackName>Flask</StackName>
          <StackName>Styled Components</StackName>
        </StackContainer>
        <a
          href="https://github.com/JinaZhu/World-Traveler"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} alt="github logo" width="50" />
        </a>
      </ProjectDescription>
    </ProjectContainer>
  );
};

export default ProjectLayout;
