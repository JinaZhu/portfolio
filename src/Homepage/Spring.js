import React from "react";

import { SeasonContainer, FlowerContainer, FlowerImg } from "./styled";
import flower1 from "../images/Seasons/flower_2.png";
import flower2 from "../images/Seasons/flower_2.png";
import flower3 from "../images/Seasons/flower_3.png";
import flower4 from "../images/Seasons/flower_4.png";
import flower5 from "../images/Seasons/flower_5.png";
import flower6 from "../images/Seasons/flower_6.png";
import { lefts, getRandomizedStyle } from "./utility";

const durations = ["10s", "11s", "12s", "13s", "14s", "15s", "16s", "17s"];
const delays = [
  "-11s",
  "-13s",
  "-15s",
  "-10s",
  "-8s",
  "-6s",
  "-4s",
  "-2s",
  "0",
  "0",
  "0",
];
const flowerTypes = [
  [flower3, "25"],
  [flower4, "25"],
  [flower5, "25"],
  [flower6, "25"],
  [flower1, "50"],
  [flower2, "50"],
  [flower3, "25"],
  [flower4, "25"],
  [flower5, "25"],
  [flower6, "25"],
];

const topEnd = [
  "125",
  "120",
  "115",
  "110",
  "105",
  "100",
  "95",
  "90",
  "85",
  "80",
];

const Spring = () => {
  return (
    <SeasonContainer>
      <FlowerContainer>
        {Array(...Array(60)).map((_, i) => {
          const randomLeft = getRandomizedStyle(lefts);
          const randomDuration = getRandomizedStyle(durations);
          const randomDelay = getRandomizedStyle(delays);
          const randomFlowerType = getRandomizedStyle(flowerTypes);
          const randomtopEnd = getRandomizedStyle(topEnd);
          return (
            <FlowerImg
              key={i}
              src={randomFlowerType[0]}
              left={randomLeft}
              duration={randomDuration}
              delay={randomDelay}
              alt="flower"
              width={randomFlowerType[1]}
              topEnd={randomtopEnd}
            />
          );
        })}
      </FlowerContainer>
    </SeasonContainer>
  );
};

export default Spring;
