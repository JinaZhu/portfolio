import React from "react";
import {
  TechStackContainer,
  StackType,
  StackNameTag,
  StackName,
  NameTagContainer,
} from "./styled";

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
const databases = ["Git", "Github", "Command-Line", "PostgreSQL", "SQLAlchemy"];
const softwares = [
  "Adobe Illustrator",
  "Adobe Lightroom/Photoshop",
  "Adobe XD",
  "Figma",
];

const TechStack = () => {
  const displayLanguages = languages.map((language, index) => {
    return (
      <StackNameTag key={index}>
        <StackName>{language}</StackName>
      </StackNameTag>
    );
  });
  const displayFramework = frameworks.map((framework, index) => {
    return (
      <StackNameTag key={index}>
        <StackName>{framework}</StackName>
      </StackNameTag>
    );
  });
  const displayDatabase = databases.map((database, index) => {
    return (
      <StackNameTag key={index}>
        <StackName>{database}</StackName>
      </StackNameTag>
    );
  });
  const displaySoftwares = softwares.map((software, index) => {
    return (
      <StackNameTag key={index}>
        <StackName>{software}</StackName>
      </StackNameTag>
    );
  });

  return (
    <TechStackContainer>
      <p>Here are a few technologies I've been working with:</p>
      <StackType>Languages:</StackType>
      <NameTagContainer>{displayLanguages}</NameTagContainer>
      <StackType>Frameworks & Libraries:</StackType>
      <NameTagContainer>{displayFramework}</NameTagContainer>
      <StackType>Database & Industry Tools:</StackType>
      <NameTagContainer>{displayDatabase}</NameTagContainer>
      <StackType>Tools/Software:</StackType>
      <NameTagContainer>{displaySoftwares}</NameTagContainer>
    </TechStackContainer>
  );
};

export default TechStack;
