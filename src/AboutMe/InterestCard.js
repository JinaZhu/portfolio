import React from "react";
import {
  CardContainer,
  Card,
  Front,
  Cover,
  CoverText,
  Back,
  Photo,
} from "./styled";
import { useSeason } from "../Providers/Season";

const InterestCard = ({ interest, image }) => {
  const { season } = useSeason();
  return (
    <CardContainer>
      <Card>
        <Front>
          <Cover>
            <CoverText color={season.color}>{interest}</CoverText>
          </Cover>
        </Front>
        <Back>
          <Photo src={require(`../images/Interests/${image}`)} alt={interest} />
        </Back>
      </Card>
    </CardContainer>
  );
};

export default InterestCard;
