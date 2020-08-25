import React from "react";
import { InfoContainer, InfoP, InterestCardContainer } from "./styled";
import InterestCard from "./InterestCard";

const interests = [
  { name: "A Lover of food", image: "eating.jpeg" },
  { name: "A Wanderer", image: "wanderer.jpeg" },
  { name: "An Animal Lover", image: "goats.jpeg" },
  { name: "A Plant Mom", image: "goats.jpeg" },
  { name: "A Photographer", image: "goats.jpeg" },
  { name: "A Rising Tennis Star", image: "goats.jpeg" },
  { name: "Fashionista", image: "goats.jpeg" },
];

const PersonalInfo = () => {
  const displayInterests = interests.map((interest, index) => {
    return <InterestCard interest={interest.name} image={interest.image} />;
  });

  return (
    <InfoContainer>
      <InfoP>
        Hello! I'm Jina, a software engineer based in San Francisco, CA. I'm
        full stack but I love getting in the nitty gritty of the Frontend.
        Designing beautiful layout and animations are my current coding
        obsession. Offscreen, I am...
      </InfoP>
      <InterestCardContainer>{displayInterests}</InterestCardContainer>
    </InfoContainer>
  );
};

export default PersonalInfo;
