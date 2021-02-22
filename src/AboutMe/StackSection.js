import React from "react";

import {
  SectionTitle,
  StackNameTag,
  StackName,
  TechSectionContainer,
  TechNameContainer,
} from "./styled";

const StackSection = ({ technologies, technologyType, season }) => {
  //   function mouseMove(e) {
  //     const width = e.target.offsetWidth / 2;
  //     const height = e.target.offsetHeight / 2;
  //     const centerX = e.target.offsetLeft + width;
  //     const centerY = e.target.offsetTop + height;
  //     const mouseX = e.clientX - centerX;
  //     const mouseY = e.clientY - centerY;
  //     const rotateX = (25 * mouseY) / width;
  //     const rotateY = (25 * mouseX) / height;
  //     e.target.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  //   }
  return (
    <TechSectionContainer>
      <SectionTitle>{technologyType}:</SectionTitle>
      <TechNameContainer>
        {technologies.map((technology) => {
          return (
            <StackNameTag key={technology}>
              <StackName color={season.color}>{technology}</StackName>
            </StackNameTag>
          );
        })}
      </TechNameContainer>
    </TechSectionContainer>
  );
};

export default StackSection;
