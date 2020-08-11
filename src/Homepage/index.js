import React from "react";
import Navbar from "../Navbar";
import leaf_branch from "../images/leaf-branch.png";

import { Button } from "../globalStyles";
import {
  HomepageContainer,
  IntroContainter,
  Name,
  TopBranch,
  RightBranch,
  NameLogo,
} from "./styled";
import LandingPage from "./LandingPage";

const Homepage = () => {
  return (
    <HomepageContainer>
      {/* <LandingPage /> */}
      <Navbar />
      <TopBranch
        src={leaf_branch}
        alt="leaf branch"
        rotateFrom={"225"}
        rotateTo={"215"}
      />
      <RightBranch src={leaf_branch} alt="leaf branch" />
      <IntroContainter>
        <p>Hi, my name is</p>
        <Name>JINA ZHU</Name>
        <NameLogo
          width="236"
          height="44"
          viewBox="0 0 236 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.849976 42.95V43.45H1.34998H4.04998C6.42149 43.45 8.31901 43.0963 9.69182 42.3376L9.69187 42.3377L9.70049 42.3327C11.0783 41.5351 12.0367 40.3351 12.5732 38.7613L12.5743 38.7581C13.0973 37.1891 13.35 35.214 13.35 32.85V1.5V1H12.85H7.24998H6.74998V1.5V32.75C6.74998 33.997 6.66773 35.0107 6.51009 35.7999C6.35674 36.5347 6.09116 37.0517 5.74642 37.3965L5.73935 37.4035L5.73257 37.4109C5.42191 37.7474 4.94278 38.0095 4.24376 38.1614C3.5259 38.3175 2.56539 38.4 1.34998 38.4H0.849976V38.9V42.95ZM28.989 42V42.5H29.489H35.039H35.539V42V1.5V1H35.039H29.489H28.989V1.5V42ZM51.0914 42V42.5H51.5914H56.3914H56.8914V42V16.8244L67.5806 42.1941L67.7095 42.5H68.0414H71.6414H72.1414V42V1.5V1H71.6414H66.9414H66.4414V1.5V25.9585L55.9011 1.30345L55.7714 1H55.4414H51.5914H51.0914V1.5V42ZM85.3183 41.8961L85.1901 42.5H85.8074H91.1074H91.5209L91.5985 42.0939L93.4709 32.3H100.89L102.665 42.0892L102.74 42.5H103.157H108.507H109.125L108.996 41.8956L100.346 1.39557L100.262 1H99.8574H94.4074H94.0024L93.9183 1.39614L85.3183 41.8961ZM142.293 42V42.5H142.793H160.693H161.193V42V37.95V37.45H160.693H148.86L161.162 4.12314L161.193 4.03934V3.95V1.5V1H160.693H143.543H143.043V1.5V5.55V6.05H143.543H153.976L142.323 37.7776L142.293 37.8611V37.95V42ZM174.392 42V42.5H174.892H180.542H181.042V42V23.55H190.442V42V42.5H190.942H196.592H197.092V42V1.5V1H196.592H190.942H190.442V1.5V18.5H181.042V1.5V1H180.542H174.892H174.392V1.5V42ZM212.936 35.9284L212.937 35.9303C213.529 38.1256 214.654 39.8597 216.321 41.101C218.007 42.357 220.38 42.95 223.37 42.95C226.357 42.95 228.715 42.3578 230.371 41.0991C232.036 39.8579 233.16 38.1245 233.752 35.9303L233.753 35.9284C234.333 33.7433 234.62 31.2151 234.62 28.35V1.5V1H234.12H228.77H228.27V1.5V28.6C228.27 30.3114 228.154 31.8674 227.926 33.2697C227.704 34.6335 227.236 35.6679 226.552 36.4115C225.913 37.1052 224.889 37.5 223.37 37.5C221.892 37.5 220.86 37.1092 220.184 36.4076C219.502 35.6643 219.035 34.6312 218.813 33.2697C218.585 31.8674 218.469 30.3114 218.469 28.6V1.5V1H217.969H212.57H212.07V1.5V28.35C212.07 31.2151 212.356 33.7433 212.936 35.9284ZM99.9556 27.25H94.4075L97.161 12.2495L99.9556 27.25Z"
            stroke="white"
          />
        </NameLogo>
        <p>
          I'm a software engineer based in San Francisco, CA specializing in
          writing clean, elegant, and efficent code.{" "}
        </p>
        <Button paddings={"1rem 2rem"} hoverColor={"#9b7778"}>
          About Me
        </Button>
      </IntroContainter>
    </HomepageContainer>
  );
};

export default Homepage;
