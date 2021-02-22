import React from "react";
import { useHistory } from "react-router-dom";
import { useSprings, useSpring, animated } from "react-spring";

import { Glass, GlassContainer, NameContainer, P, ButtonP } from "./styled";
import { Button } from "../globalStyles";

const letters = [131, 130, 271, 250, 195, 253, 236];

const InfoGlassMorph = ({ season }) => {
  const [s1, s2, s3, s4, s5, s6, s7] = useSprings(
    letters.length,
    letters.map((length) => {
      return {
        strokeDashoffset: 0,
        from: { strokeDashoffset: length, strokeDasharray: length },
        config: { tension: 280, friction: 70 },
      };
    })
  );

  const props = useSpring({
    fill: "white",
    from: { fill: "hsla(1,1%,1%,0)" },
    delay: 1600,
  });

  let history = useHistory();

  const redirectToAbout = () => {
    history.push("/about");
  };

  return (
    <GlassContainer>
      <Glass>
        <P>Hello, my name is</P>
        <NameContainer>
          <animated.svg
            style={{ ...props }}
            width="241"
            height="54"
            viewBox="0 0 230 43"
            fill="none"
          >
            <animated.path
              style={s1}
              d="M23 31.1C23 34.6933 22.1567 37.3333 20.47 39.02C18.7833 40.7066 16.18 41.55 12.66 41.55C9.17665 41.55 5.47332 41.3666 1.54999 41V33.575C4.40999 33.7583 7.34332 33.85 10.35 33.85C11.1933 33.85 11.8533 33.6116 12.33 33.135C12.8433 32.6216 13.1 31.9433 13.1 31.1V10.2H5.94999V2.49995H23V31.1Z"
              stroke="white"
              strokeWidth="2"
            />
            <animated.path
              style={s2}
              d="M41.1478 12.95V41H31.5228V20.375H27.3978V12.95H41.1478ZM31.5228 1.94995H41.1478V9.64995H31.5228V1.94995Z"
              stroke="white"
              strokeWidth="2"
            />
            <animated.path
              style={s3}
              d="M62.89 19.275C60.9467 19.275 58.7467 19.6416 56.29 20.375V41H46.665V11.85H55.19L55.74 14.6C57.4634 13.4633 59.2234 12.6383 61.02 12.125C62.8534 11.575 64.3934 11.3 65.64 11.3H68.115C70.6084 11.3 72.6067 12.0516 74.11 13.555C75.6134 15.0583 76.365 17.0566 76.365 19.55V41H66.74V21.2C66.74 20.65 66.5567 20.1916 66.19 19.825C65.8234 19.4583 65.365 19.275 64.815 19.275H62.89Z"
              stroke="white"
              strokeWidth="2"
            />
            <animated.path
              style={s4}
              d="M92.8586 33.85C94.8019 33.85 97.0019 33.4833 99.4586 32.75V29.45H91.4836C90.9336 29.45 90.4752 29.6333 90.1086 30C89.7419 30.3666 89.5586 30.825 89.5586 31.375V31.925C89.5586 32.475 89.7419 32.9333 90.1086 33.3C90.4752 33.6666 90.9336 33.85 91.4836 33.85H92.8586ZM82.6836 12.4C89.3936 11.6666 95.4436 11.3 100.834 11.3C103.327 11.3 105.325 12.0516 106.829 13.555C108.332 15.0583 109.084 17.0566 109.084 19.55V41H100.559L100.009 38.25C98.2853 39.3866 96.5069 40.23 94.6736 40.78C92.8769 41.2933 91.3552 41.55 90.1086 41.55H88.1836C85.6902 41.55 83.6919 40.7983 82.1886 39.295C80.6852 37.7916 79.9336 35.7933 79.9336 33.3V30.825C79.9336 28.3316 80.6852 26.3333 82.1886 24.83C83.6919 23.3266 85.6902 22.575 88.1836 22.575H99.4586V20.375C99.4586 19.825 99.2752 19.3666 98.9086 19C98.5419 18.6333 98.0836 18.45 97.5336 18.45C95.1502 18.45 92.5102 18.56 89.6136 18.78C86.7536 19 84.4436 19.165 82.6836 19.275V12.4Z"
              stroke="white"
              strokeWidth="2"
            />
            <animated.path
              style={s5}
              d="M160.208 10.2L140.958 33.3H160.208V41H128.858V33.3L148.108 10.2H128.858V2.49995H160.208V10.2Z"
              stroke="white"
              strokeWidth="2"
            />
            <animated.path
              style={s6}
              d="M173.702 12.4C177.259 11.6666 180.375 11.3 183.052 11.3H185.527C188.02 11.3 190.019 12.0516 191.522 13.555C193.025 15.0583 193.777 17.0566 193.777 19.55V41H184.152V20.65C184.152 20.1 183.969 19.6416 183.602 19.275C183.235 18.9083 182.777 18.725 182.227 18.725H180.302C178.909 18.725 177.625 18.7983 176.452 18.945C175.315 19.0916 174.399 19.2016 173.702 19.275V41H164.077V2.49995H173.702V12.4Z"
              stroke="white"
              strokeWidth="2"
            />
            <animated.path
              style={s7}
              d="M212.196 33.575C214.139 33.575 216.339 33.2083 218.796 32.475V11.85H228.421V41H219.896L219.346 38.25C217.622 39.3866 215.844 40.23 214.011 40.78C212.214 41.2933 210.692 41.55 209.446 41.55H206.971C204.477 41.55 202.479 40.7983 200.976 39.295C199.472 37.7916 198.721 35.7933 198.721 33.3V11.85H208.346V31.65C208.346 32.2 208.529 32.6583 208.896 33.025C209.262 33.3916 209.721 33.575 210.271 33.575H212.196Z"
              stroke="white"
              strokeWidth="2"
            />
          </animated.svg>
        </NameContainer>
        <P>
          I'm a software engineer based in San Francisco, CA specializing in
          writing clean, elegant, and efficient code.{" "}
        </P>
        <Button
          onClick={redirectToAbout}
          paddings={"1rem 2rem"}
          hoverColor={season.color}
          border={"2px solid white"}
        >
          <ButtonP>About Me</ButtonP>
        </Button>
      </Glass>
    </GlassContainer>
  );
};

export default InfoGlassMorph;
