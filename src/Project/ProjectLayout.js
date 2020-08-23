import React from "react";

import githubLogo from "../images/Icons/github.svg";
import aaMap from "../images/projectScreenshots/aa-map.png";
import {
  ProjectContainer,
  ProjectDescription,
  StackContainer,
  StackName,
  ProjectTitle,
} from "./styled";

const ProjectLayout = ({ border }) => {
  console.log(border);
  return (
    <ProjectContainer border={border}>
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
          <img src="../images/project/{}" alt="github logo" width="50" />
        </a>
        <div>
          <img
            src={`../images/projectScreenshots/${images}`}
            alt="adventure awaits map"
            width="250"
          />
        </div>
      </ProjectDescription>
    </ProjectContainer>
  );
};

export default ProjectLayout;
