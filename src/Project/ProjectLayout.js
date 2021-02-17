import React, { useState } from "react";

import "swiper/css/swiper.css";
import githubLogo from "../images/Icons/github-brands.svg";
import linkLogo from "../images/Icons/link.svg";

import {
  ProjectContainer,
  ProjectTitle,
  Links,
  ProjectImage,
  ImageContainer,
  ImageSelectionContainer,
  DetailContainer,
  DescriptionContainer,
  LinkContainer,
  P,
  ImageBorder,
} from "./styled";

const ProjectLayout = ({ season, application }) => {
  const [mainImage, setMainImage] = useState(0);
  return (
    <ProjectContainer>
      <DescriptionContainer>
        <ImageContainer>
          <ImageSelectionContainer>
            {application.images.map((image, i) => {
              return (
                <ProjectImage
                  margin={"5px"}
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
          <ImageBorder>
            <ProjectImage
              src={require(`../images/projectScreenshots/${application.images[mainImage]}`)}
              alt="project preview"
              size={"250"}
              isActive={true}
              shadow={"none"}
            />
          </ImageBorder>
        </ImageContainer>
        <DetailContainer>
          <ProjectTitle color={season.color}>{application.name}</ProjectTitle>
          <P>{application.description}</P>
          <LinkContainer>
            {application.github.map((link, index) => {
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
            {application.deployed && (
              <Links
                href={application.deployed}
                target="_blank"
                rel="noopener noreferrer"
              >
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
