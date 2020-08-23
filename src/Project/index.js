import React from "react";

import { SubTitle, ProjectPage, TitleContainer, Title } from "./styled";
import Navbar from "../Navbar";
import ProjectLayout from "./ProjectLayout";
import qrznCover from "../images/projectScreenshots/qrzn-cover.png";

const applications = [
  {
    name: "Qrzn",
    description:
      "qrzn.org is the brainchild of JG Debray, a designer based in New York. JG came up with the idea of an online magazine for him and other designers/artists/writers to provide commentary on the ongoing pandemic through different forms of media.",
    stack: ["React", "Gatsby", "Netlify"],
    github: "https://github.com/seanyboy49/quaranzine",
    deployed: "https://qrzn.org/",
    images: ["qrzn-cover.png", "qrzn-archive.png", "qzrn-awesome-graphic.png"],
  },
  {
    name: "Adventure Awaits",
    description:
      "Adventure Awaits is a full-stack web application that allows anyone to discover somewhere new by providing an insight into a country. Let it do the research for you before booking",
    stack: ["React", "Flask", "PostgreSQL", "Google Map API", "Chart.js"],
    github: "https://github.com/JinaZhu/World-Traveler",
    images: [
      "aa-homepage.png",
      "aa-pictures.png",
      "aa-travel-info.png",
      "aa-places-been.png",
    ],
  },
  {
    name: "Cake-Tac-Toe",
    description: "A simple game of Tic-Tac-Toe with 🎂 and 😻",
    stack: ["React", "Styled Components"],
    github: "https://github.com/JinaZhu/Tic-Tac-Toe/tree/master/src",
    deployed: "https://caketactoe.herokuapp.com/",
    images: ["cake-played.png", "cake-unplayed.png"],
  },
  {
    name: "Pet-A-Bunny",
    description:
      "An innocent game of Whack-a-mole with 🐰. Try your best to beat your own score every round. No bunnies were harmed during the making of this game.",
    stack: ["Javascript", "HTML", "CSS"],
    github: "https://github.com/JinaZhu/Whack-a-Bunny",
    images: ["bunny-played.png", "bunny-unplayed.png"],
  },
  {
    name: "Jinterest",
    desciption:
      "A Pinterest Clone. Find the inspiration you're looking for with Jinterest image search.",
    Stack: ["Pexels Web API", "Javascript"],
    github: "https://github.com/JinaZhu/jinterest",
    images: ["jinterest-more.png", "jinterest.png"],
  },
];

const Project = () => {
  return (
    <ProjectPage>
      <Navbar />
      <TitleContainer>
        <Title>Things</Title>
        <Title>I've Built</Title>
        <SubTitle>featured project</SubTitle>
      </TitleContainer>
      <ProjectLayout border="left" />
      <ProjectLayout border="right" />
    </ProjectPage>
  );
};

export default Project;
