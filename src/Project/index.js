import React from "react";

import { SubTitle, ProjectPage, TitleContainer, Title } from "./styled";
import Navbar from "../Navbar";
import ProjectLayout from "./ProjectLayout";

const applications = [
  {
    name: "Adventure Awaits",
    description:
      "Adventure Awaits is a full-stack web application that allows anyone to discover somewhere new by providing an insight into a country. Let it do the research for you before booking.",
    stack: ["React", "Flask", "PostgreSQL", "Chart.js"],
    github: ["https://github.com/JinaZhu/World-Traveler"],
    deployed: "",
    images: [
      "aa-homepage.png",
      "aa-pictures.png",
      "aa-travel-info.png",
      "aa-places-been.png",
    ],
  },
  {
    name: "Qrzn",
    description:
      "qrzn.org is the brainchild of JG Debray, a designer based in New York. JG came up with the idea of an online magazine for him and other designers/artists/writers to provide commentary on the ongoing pandemic through different forms of media.",
    stack: ["React", "Gatsby", "GraphQL", "Netlify"],
    github: ["https://github.com/seanyboy49/quaranzine"],
    deployed: "https://qrzn.org/",
    images: ["qrzn-cover.png", "qrzn-archive.png", "qzrn-awesome-graphic.png"],
  },
  {
    name: "Cocktail Hour",
    description:
      "In the mood for a cocktail, but too lazy to head to the store? Discover a cocktail to make with locally home available ingredients with Cocktail Hour. Find and save cocktails for later use.",
    stack: ["React", "Flask", "SQLAlchemy"],
    github: [
      "https://github.com/JinaZhu/cocktail-frontend",
      "https://github.com/JinaZhu/Cocktail-Backend",
    ],
    deployed: "",
    images: ["cocktail-home.png", "cocktail-search.png", "cocktails.png"],
  },
  {
    name: "Cake-Tac-Toe",
    description: "A simple game of Tic-Tac-Toe with 🎂 and 😻.",
    stack: ["React", "Styled Components"],
    github: ["https://github.com/JinaZhu/Tic-Tac-Toe/tree/master/src"],
    deployed: "https://caketactoe.herokuapp.com/",
    images: ["cake-unplayed.png", "cake-played.png"],
  },
  {
    name: "Pet-A-Bunny",
    description:
      "An innocent game of Whack-a-mole with 🐰. Try your best to beat your own score every round. No bunnies were harmed during the making of this game.",
    stack: ["Javascript", "HTML", "CSS"],
    github: ["https://github.com/JinaZhu/Whack-a-Bunny"],
    deployed: "",
    images: ["bunny-unplayed.png", "bunny-played.png"],
  },
  {
    name: "Jinterest",
    description:
      "A Pinterest Clone. Find the inspiration you're looking for with Jinterest image search.",
    stack: ["Pexels Web API", "Javascript"],
    github: ["https://github.com/JinaZhu/jinterest"],
    deployed: "",
    images: ["jinterest.png", "jinterest-more.png"],
  },
];

const Project = () => {
  let borderDisplay = "right";
  const displayProjectPage = applications.map((application, index) => {
    if (borderDisplay === "left") {
      borderDisplay = "right";
    } else {
      borderDisplay = "left";
    }

    return (
      <ProjectLayout
        key={index}
        name={application.name}
        description={application.description}
        stack={application.stack}
        github={application.github}
        deployed={application.deployed}
        images={application.images}
        border={borderDisplay}
      />
    );
  });

  return (
    <ProjectPage>
      <Navbar pageColor={"#748173"} currentPage={"project"} />
      <TitleContainer>
        <Title>Things</Title>
        <Title>I've Built</Title>
        <SubTitle>featured project</SubTitle>
      </TitleContainer>
      {displayProjectPage}
    </ProjectPage>
  );
};

export default Project;
