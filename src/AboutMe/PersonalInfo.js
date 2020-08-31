import React from "react";
import { InfoContainer, InfoP, InterestCardContainer } from "./styled";
import InterestCard from "./InterestCard";

const interests = [
  { name: "A Lover of food", image: "lovesFood.jpeg" },
  { name: "A Wanderer", image: "travel.jpeg" },
  { name: "An Animal Lover", image: "animalLover.jpeg" },
  { name: "A Plant Mom", image: "plantMom.jpeg" },
  { name: "A Photographer", image: "photographer.jpeg" },
  { name: "A Rising Tennis Star", image: "tennising.jpeg" },
  { name: "Fashionista", image: "closet.jpeg" },
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
