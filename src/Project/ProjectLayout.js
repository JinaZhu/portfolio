import React from "react";

import githubLogo from "../images/Icons/github.svg";
import { ProjectContainer, ProjectDescription, StackContainer } from "./styled";

const ProjectLayout = () => {
  return (
    <ProjectContainer>
      <h2>Adventure Await</h2>
      <ProjectDescription>
        <p>
          Adventure Awaits is a full-stack web application that allows anyone to
          discover somewhere new by providing an insight into a country.
        </p>
        <StackContainer>
          <p>React</p>
          <p>Flask</p>
          <p>Styled Components</p>
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
