import React, { useState } from "react";
import {
  InfoContainer,
  InfoP,
  CardContainer,
  Card,
  Front,
  Back,
  Photo,
  Cover,
  CoverText,
} from "./styled";
import wanderer from "../images/Interests/wanderer.jpeg";
import "./imageFlip.css";

const PersonalInfo = () => {
  return (
    <InfoContainer>
      <InfoP>
        Hello! I'm Jina, a software engineer based in San Francisco, CA. I'm
        full stack but I love getting in the nitty gritty of the Frontend.
        Designing beautiful layout and animations are my current coding
        obsession. Offscreen, I am...
      </InfoP>
      <CardContainer>
        {/* <div class="card-container">
          <div class="card">
            <figure class="front">
              <Cover>
                <CoverText>Wanderer</CoverText>
              </Cover>
            </figure>
            <figure class="back">
              <img src={wanderer} alt="side spin" />
            </figure>
          </div>
        </div> */}
        <Card>
          <Front>
            <Cover>
              <CoverText>Wanderer</CoverText>
            </Cover>
          </Front>
          <Back>
            <Photo src={wanderer} alt="wanderer" />
          </Back>
        </Card>
      </CardContainer>
    </InfoContainer>
  );
};

export default PersonalInfo;
