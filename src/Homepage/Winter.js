import React from "react";

import {
  WinterContainer,
  SnowflakeImg,
  SnowflakeForward,
  SnowflakeBackward,
} from "./styled";
import snowflake1 from "../../images/snowflake_1.png";
import snowflake2 from "../../images/snowflake_2.png";
import snowflake3 from "../../images/snowflake_3.png";

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
  "100%",
];

const durations = ["10s", "11s", "12s", "13s", "14s", "15s", "16s", "17s"];
const delays = ["-10s", "-8s", "-6s", "-4s", "-2s", "0", "0", "0"];
const snowflakes = [snowflake1, snowflake2, snowflake3];
const sizes = [
  ["35", "0px"],
  ["50", "1px"],
];

function getRandomizedStyle(styleType) {
  return styleType[Math.floor(Math.random() * styleType.length)];
}

function randomizeStyles() {
  const randomLeft = getRandomizedStyle(lefts);
  const randomDuration = getRandomizedStyle(durations);
  const randomDelay = getRandomizedStyle(delays);
  const randomSnowflake = getRandomizedStyle(snowflakes);
  const randomSize = getRandomizedStyle(sizes);

  return {
    randomLeft,
    randomDuration,
    randomDelay,
    randomSnowflake,
    randomSize,
  };
}

const Winter = () => {
  return (
    <WinterContainer>
      <SnowflakeForward>
        {Array(...Array(40)).map((_, i) => {
          const styles = randomizeStyles();
          return (
            <SnowflakeImg
              key={i}
              src={styles.randomSnowflake}
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
        {Array(...Array(25)).map((_, i) => {
          const styles = randomizeStyles();
          return (
            <SnowflakeImg
              key={i}
              src={styles.randomSnowflake}
              left={styles.randomLeft}
              duration={styles.randomDuration}
              delay={styles.randomDelay}
              blur={"3px"}
              alt="snowflake"
              width="25"
            />
          );
        })}
      </SnowflakeBackward>
    </WinterContainer>
  );
};

export default Winter;
