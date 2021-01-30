import React from "react";

import { SeasonContainer, BallImg } from "./styled";
import beachBall from "../images/Seasons/beach_ball.png";
import { getRandomizedStyle } from "./utility";

let lefts = [];
const delays = ["1s", "2s", "3s", "4s", "5s"];
const durations = ["3s", "3.5s", "4s", "2.5s"];
const heights = ["-100vh", "-95vh", "-90vh", "-85vh", "-80vh", "75vh"];

function getRandomLeft(index) {
  if (index === 0) {
    lefts = [];
  }
  const randomNum = Math.floor(Math.random() * 10);
  if (lefts.includes(randomNum)) {
    return getRandomLeft();
  } else {
    lefts.push(randomNum);
    return randomNum * 10;
  }
}

const Summer = () => {
  return (
    <SeasonContainer>
      {Array(...Array(10)).map((_, i) => {
        const randomLeft = getRandomLeft(i);
        const randomDelay = getRandomizedStyle(delays);
        const randomDuration = getRandomizedStyle(durations);
        const randomHeight = getRandomizedStyle(heights);
        return (
          <BallImg
            key={i}
            src={beachBall}
            alt="beach ball"
            width="200"
            left={randomLeft}
            delay={randomDelay}
            duration={randomDuration}
            height={randomHeight}
          />
        );
      })}
    </SeasonContainer>
  );
};

export default Summer;
