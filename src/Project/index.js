import React, { useState } from "react";

import "swiper/css/swiper.css";
import {
  SubTitle,
  ProjectPage,
  TitleContainer,
  Title,
  AllProjects,
  ProjectBody,
} from "./styled";
import Navbar from "../Navbar";
import ProjectLayout from "./ProjectLayout";
import { useSeason } from "../Providers/Season";
import { applications } from "./ProjectList";

const Project = () => {
  const { season } = useSeason();
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(undefined);
  const [scrollLeft, setScrollLeft] = useState(undefined);

  function mouseDown(e) {
    setIsDown(true);
    setStartX(e.pageX - e.target.offsetLeft);
    setScrollLeft(e.target.scrollLeft);
  }

  function mouseLeave() {
    setIsDown(false);
  }

  function mouseUp() {
    setIsDown(false);
  }

  function mouseMove(e) {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - e.target.offsetLeft;
    const walk = x - startX;
    e.target.scrollLeft = scrollLeft - walk;
  }

  return (
    <ProjectPage color={season.color}>
      <Navbar pageColor={"#748173"} currentPage={"project"} />
      <ProjectBody>
        <TitleContainer>
          <Title>Things </Title>
          <Title>I've Built</Title>
          <SubTitle>featured project</SubTitle>
          <SubTitle size={"12px"}>
            ** Scroll or click and drag to view more **
          </SubTitle>
        </TitleContainer>
        <AllProjects
          onMouseDown={mouseDown}
          onMouseLeave={mouseLeave}
          onMouseUp={mouseUp}
          onMouseMove={mouseMove}
          isActive={isDown}
        >
          {applications.map((application, index) => {
            return (
              <ProjectLayout
                key={index}
                season={season}
                application={application}
              />
            );
          })}
        </AllProjects>
      </ProjectBody>
    </ProjectPage>
  );
};

export default Project;
