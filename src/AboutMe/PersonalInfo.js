import React from "react";
import { InfoContainer, InfoP, InterestCardContainer } from "./styled";
import InterestCard from "./InterestCard";

const interests = [
  { name: "A Foodie", image: "food.JPG" },
  { name: "A Wanderer", image: "travel.jpeg" },
  { name: "An Animal Lover", image: "animal.JPG" },
  { name: "A Plant Mom", image: "plantMom.jpeg" },
  { name: "An Amateur Photographer", image: "photographer.jpeg" },
  { name: "A Rising Tennis Star", image: "tennising.jpeg" },
];

const PersonalInfo = () => {
  const displayInterests = interests.map((interest, index) => {
    return (
      <InterestCard
        key={index}
        interest={interest.name}
        image={interest.image}
      />
    );
  });

  return (
    <InfoContainer>
      <InfoP>
        Hello there! I'm Jina, a software engineer based in San Francisco, CA.
        I'm full stack but I love getting in the nitty gritty of the Frontend.
        Designing beautiful layout and animations are my current coding
        obsession. Offscreen, I am...
      </InfoP>
      <InterestCardContainer>{displayInterests}</InterestCardContainer>
    </InfoContainer>
  );
};

export default PersonalInfo;
