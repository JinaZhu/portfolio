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

const InterestCard = ({ interest, image }) => {
  return (
    <CardContainer>
      <Card>
        <Front>
          <Cover>
            <CoverText>{interest}</CoverText>
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
