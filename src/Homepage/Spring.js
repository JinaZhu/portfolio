import React from "react";

import { SpringContainer, FlowerContainer, FlowerImg } from "./styled";
import flower1 from "../images/Seasons/flower_2.png";
import flower2 from "../images/Seasons/flower_2.png";
import flower3 from "../images/Seasons/flower_3.png";
import flower4 from "../images/Seasons/flower_4.png";
import flower5 from "../images/Seasons/flower_5.png";
import flower6 from "../images/Seasons/flower_6.png";

const lefts = [
  "-21%",
  "-18%",
  "-15%",
  "-12%",
  "-9%",
  "-6%",
  "-3%",
  "0%",
  "3%",
  "6%",
  "9%",
  "12%",
  "15%",
  "18%",
  "21%",
  "25%",
];
const durations = ["10s", "11s", "12s", "13s", "14s", "15s", "16s", "17s"];
const delays = ["-10s", "-8s", "-6s", "-4s", "-2s", "0", "0", "0"];
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

const Spring = () => {
  return (
    <SpringContainer>
      <FlowerContainer>
        {Array(...Array(50)).map((_, i) => {
          const randomLeft = lefts[Math.floor(Math.random() * lefts.length)];
          const randomDuration =
            durations[Math.floor(Math.random() * durations.length)];
          const randomDelay = delays[Math.floor(Math.random() * delays.length)];
          const randomFlowerType =
            flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
          return (
            <FlowerImg
              src={randomFlowerType[0]}
              left={randomLeft}
              duration={randomDuration}
              delay={randomDelay}
              alt="flower"
              width={randomFlowerType[1]}
            />
          );
        })}
      </FlowerContainer>
    </SpringContainer>
  );
};

export default Spring;
