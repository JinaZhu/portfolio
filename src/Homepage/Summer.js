import React from "react";

import { SeasonContainer, BallImg } from "./styled";
import beachBall from "../images/Seasons/beach_ball.png";

const lefts = [
  "0%",
  "10%",
  "20%",
  "30%",
  "40%",
  "50%",
  "60%",
  "70%",
  "80%",
  "90%",
];

const Summer = () => {
  return (
    <SeasonContainer>
      {Array(...Array(5)).map((_, i) => {
        const randomLeft = lefts[Math.floor(Math.random() * lefts.length)];
        return (
          <BallImg
            key={i}
            src={beachBall}
            alt="beach ball"
            width="200"
            left={randomLeft}
          />
        );
      })}
    </SeasonContainer>
  );
};

export default Summer;
