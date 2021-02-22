import React from "react";

import { TechStackContainer, TechTitle, TechP, TechContainer } from "./styled";
import StackSection from "./StackSection";

const languages = ["JavaScript", "Python", "HTML", "CSS", "SQL"];
const frameworks = [
  "React",
  "Flask",
  "Gatsby",
  "Styled Components",
  "Sass",
  "Jinja",
  "Bootstrap",
  "GSAP",
  "React-Spring",
];
const databases = [
  "Git",
  "Github",
  "Command-Line",
  "PostgreSQL",
  "SQLAlchemy",
  "Adobe Illustrator",
  "Adobe Lightroom",
  "Adobe Photoshop",
  "Adobe XD",
  "Figma",
];

const TechStack = ({ season }) => {
  return (
    <TechStackContainer>
      <TechTitle border={"right"}>Technical Skills</TechTitle>
      <TechP>Here are a few technologies I've been working with:</TechP>
      <TechContainer>
        <StackSection
          technologies={languages}
          technologyType={"Languages"}
          season={season}
        />
        <StackSection
          technologies={frameworks}
          technologyType={"frameworks"}
          season={season}
        />
        <StackSection
          technologies={databases}
          technologyType={"databases"}
          season={season}
        />
      </TechContainer>
    </TechStackContainer>
  );
};

export default TechStack;
