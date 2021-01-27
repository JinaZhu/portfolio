import React from "react";
import {
  TechStackContainer,
  SectionTitle,
  StackNameTag,
  StackName,
  NameTagContainer,
  TechTitle,
  TechP,
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
  "Adobe Lightroom",
  "Adobe Photoshop",
  "Adobe XD",
  "Figma",
];

const TechStack = ({ season }) => {
  const displayLanguages = languages.map((language, index) => {
    return (
      <StackNameTag key={index}>
        <StackName color={season.color}>{language}</StackName>
      </StackNameTag>
    );
  });
  const displayFramework = frameworks.map((framework, index) => {
    return (
      <StackNameTag key={index}>
        <StackName color={season.color}>{framework}</StackName>
      </StackNameTag>
    );
  });
  const displayDatabase = databases.map((database, index) => {
    return (
      <StackNameTag key={index}>
        <StackName color={season.color}>{database}</StackName>
      </StackNameTag>
    );
  });
  const displaySoftwares = softwares.map((software, index) => {
    return (
      <StackNameTag key={index}>
        <StackName color={season.color}>{software}</StackName>
      </StackNameTag>
    );
  });

  return (
    <TechStackContainer>
      <TechTitle border={"right"}>Technical Skills</TechTitle>
      <TechP>Here are a few technologies I've been working with:</TechP>
      <SectionTitle>Languages:</SectionTitle>
      <NameTagContainer>{displayLanguages}</NameTagContainer>
      <SectionTitle>Frameworks & Libraries:</SectionTitle>
      <NameTagContainer>{displayFramework}</NameTagContainer>
      <SectionTitle>Database & Industry Tools:</SectionTitle>
      <NameTagContainer>{displayDatabase}</NameTagContainer>
      <SectionTitle>Tools/Software:</SectionTitle>
      <NameTagContainer>{displaySoftwares}</NameTagContainer>
    </TechStackContainer>
  );
};

export default TechStack;
