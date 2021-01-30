import React from "react";

import {
  WinterContainer,
  SnowflakeImg,
  SnowflakeForward,
  SnowflakeBackward,
} from "./styled";
import snowflake1 from "../images/Seasons/snowflake_1.png";
import snowflake2 from "../images/Seasons/snowflake_2.png";
import snowflake3 from "../images/Seasons/snowflake_3.png";
import snowflake4 from "../images/Seasons/snowflake_4.png";
import leaf1 from "../images/Seasons/leaf_1.png";
import leaf2 from "../images/Seasons/leaf_2.png";
import leaf3 from "../images/Seasons/leaf_3.png";
import { lefts, getRandomizedStyle } from "./utility";

const durations = ["10s", "11s", "12s", "13s", "14s", "15s", "16s", "17s"];
const delays = ["-12s", "-10s", "-8s", "-6s", "-4s", "-2s", "0", "0", "0"];
const snowflakes = [snowflake1, snowflake2, snowflake3, snowflake4];
const leaves = [leaf1, leaf2, leaf3];
const snowflakeSizes = [
  ["35", "0px"],
  ["50", "1px"],
];
const leafSizes = [
  ["70", "0px"],
  ["85", "0px"],
];

function randomizeStyles(season) {
  const randomLeft = getRandomizedStyle(lefts);
  const randomDuration = getRandomizedStyle(durations);
  const randomDelay = getRandomizedStyle(delays);
  const randomImg = getRandomizedStyle(
    season === "winter" ? snowflakes : leaves
  );
  const randomSize = getRandomizedStyle(
    season === "winter" ? snowflakeSizes : leafSizes
  );

  return {
    randomLeft,
    randomDuration,
    randomDelay,
    randomImg,
    randomSize,
  };
}

const WinterAutumn = ({ season }) => {
  return (
    <WinterContainer>
      <SnowflakeForward>
        {Array(...Array(season === "winter" ? 35 : 25)).map((_, i) => {
          const styles = randomizeStyles(season.name);
          return (
            <SnowflakeImg
              key={i}
              src={styles.randomImg}
              left={styles.randomLeft}
              duration={styles.randomDuration}
              delay={styles.randomDelay}
              blur={styles.randomSize[1]}
              rotate={styles.randomSize[2]}
              alt="snowflake"
              width={styles.randomSize[0]}
            />
          );
        })}
      </SnowflakeForward>
      <SnowflakeBackward>
        {Array(...Array(season === "winter" ? 20 : 15)).map((_, i) => {
          const styles = randomizeStyles(season.name);
          return (
            <SnowflakeImg
              key={i}
              src={styles.randomImg}
              left={styles.randomLeft}
              duration={styles.randomDuration}
              delay={styles.randomDelay}
              blur={"3px"}
              alt="snowflake"
              width={season.name === "winter" ? "25" : "60"}
              fall={true}
            />
          );
        })}
      </SnowflakeBackward>
    </WinterContainer>
  );
};

export default WinterAutumn;
