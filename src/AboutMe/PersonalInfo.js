import React from "react";
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
