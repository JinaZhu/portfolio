import React from "react";

import githubLogo from "../images/Icons/github-brands.svg";
import linkLogo from "../images/Icons/link.svg";
import {
  ProjectContainer,
  ProjectDescription,
  StackContainer,
  StackName,
  ProjectTitle,
  Links,
  ProjectImage,
} from "./styled";

const ProjectLayout = ({
  name,
  description,
  stack,
  github,
  deployed,
  images,
  border,
}) => {
  console.log(name);
  console.log(images);

  return (
    <ProjectContainer border={border}>
      <ProjectTitle>{name}</ProjectTitle>
      <ProjectDescription>
        <p>{description}</p>
        <StackContainer>
          {stack.map((tech, index) => {
            return <StackName key={index}>{tech}</StackName>;
          })}
        </StackContainer>
        <div>
          <Links href={github} target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="github logo" width="40" />
          </Links>
          {deployed && (
            <Links href={deployed} target="_blank" rel="noopener noreferrer">
              <img src={linkLogo} alt="github logo" width="40" />
            </Links>
          )}
        </div>
        <div>
          {images.map((image, index) => {
            return (
              <ProjectImage
                key={index}
                src={require(`../images/projectScreenshots/${image}`)}
                alt="adventure awaits map"
              />
            );
          })}
        </div>
      </ProjectDescription>
    </ProjectContainer>
  );
};

export default ProjectLayout;
