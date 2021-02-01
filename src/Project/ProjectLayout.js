import React, { useState } from "react";

import githubLogo from "../images/Icons/github-brands.svg";
import linkLogo from "../images/Icons/link.svg";
import SeasonProvider from "../Providers/Season";
import {
  ProjectContainer,
  StackContainer,
  StackName,
  ProjectTitle,
  Links,
  ProjectImage,
  ImageContainer,
  ImageSelectionContainer,
  DetailContainer,
  DescriptionContainer,
  Divider,
  LinkContainer,
  About,
  P,
} from "./styled";

const ProjectLayout = ({
  name,
  description,
  stack,
  github,
  deployed,
  images,
  border,
  season,
}) => {
  const [mainImage, setMainImage] = useState(0);
  return (
    <ProjectContainer>
      <DescriptionContainer>
        <ImageContainer>
          <ImageSelectionContainer>
            {images.map((image, i) => {
              return (
                <ProjectImage
                  src={require(`../images/projectScreenshots/${image}`)}
                  alt="project preview"
                  onClick={() => setMainImage(i)}
                  isActive={i === mainImage}
                  cursor={"pointer"}
                  key={i}
                />
              );
            })}
          </ImageSelectionContainer>
          <ProjectImage
            src={require(`../images/projectScreenshots/${images[mainImage]}`)}
            alt="project preview"
            size={"250"}
            isActive={true}
          />
        </ImageContainer>
        <DetailContainer>
          <ProjectTitle color={season.color}>{name}</ProjectTitle>
          <About>
            <P>{description}</P>
          </About>
          <LinkContainer>
            {github.map((link, index) => {
              return (
                <Links
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubLogo} alt="github logo" width="25" />
                </Links>
              );
            })}
            {deployed && (
              <Links href={deployed} target="_blank" rel="noopener noreferrer">
                <img src={linkLogo} alt="github logo" width="25" />
              </Links>
            )}
          </LinkContainer>
        </DetailContainer>
      </DescriptionContainer>
    </ProjectContainer>
  );
};

export default ProjectLayout;
