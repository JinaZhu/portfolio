import React from "react";
import Navbar from "../Navbar";
import leaf_branch from "../images/leaf-branch.png";
import { useSprings, useSpring, animated } from "react-spring";

import { Button } from "../globalStyles";
import Footer from "./Footer";
import {
  HomepageContainer,
  IntroContainter,
  TopBranch,
  RightBranch,
  NameContainer,
  P,
} from "./styled";

const letters = [130, 118, 271, 220, 185, 253, 236];

const Homepage = () => {
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

  return (
    <HomepageContainer>
      <Navbar pageColor={"#9b7778"} />
      <TopBranch
        src={leaf_branch}
        alt="leaf branch"
        rotateFrom={"225"}
        rotateTo={"215"}
      />
      <RightBranch src={leaf_branch} alt="leaf branch" />
      <IntroContainter>
        <P>Hi, my name is</P>
        <NameContainer>
          <animated.svg
            style={{ ...props }}
            width="241"
            height="54"
            viewBox="0 0 241 54"
            fill="none"
          >
            <animated.path
              style={s1}
              d="M0.447998 53.216V48.032C2.02666 48.032 3.30666 47.9253 4.288 47.712C5.26933 47.4987 6.016 47.1147 6.528 46.56C7.08266 46.0053 7.46666 45.216 7.68 44.192C7.89333 43.1253 8 41.7813 8 40.16V0.160004H15.168V40.288C15.168 43.2747 14.848 45.728 14.208 47.648C13.568 49.5253 12.4373 50.9333 10.816 51.872C9.19467 52.768 6.89067 53.216 3.904 53.216H0.447998Z"
              stroke="white"
              strokeWidth="2"
            />
            <animated.path
              style={s2}
              d="M28.146 52V0.160004H35.25V52H28.146Z"
              stroke="white"
              strokeWidth="2"
            />
            <animated.path
              style={s3}
              d="M48.117 52V0.160004H53.045L67.765 34.592V0.160004H73.781V52H69.173L54.261 16.608V52H48.117Z"
              stroke="white"
              strokeWidth="2"
            />
            <animated.path
              style={s4}
              d="M83.5935 52L94.6015 0.160004H101.577L112.65 52H105.802L103.434 38.944H92.8735L90.3775 52H83.5935ZM93.8335 33.76H102.474L98.1215 10.4L93.8335 33.76Z"
              stroke="white"
              strokeWidth="2"
            />
            <animated.path
              style={s5}
              d="M139.895 52V46.816L155.126 5.34401H140.854V0.160004H162.806V3.29601L146.742 46.816H162.806V52H139.895Z"
              stroke="white"
              strokeWidth="2"
            />
            <animated.path
              style={s6}
              d="M172.662 52V0.160004H179.894V22.56H193.206V0.160004H200.438V52H193.206V27.744H179.894V52H172.662Z"
              stroke="white"
              strokeWidth="2"
            />
            <animated.path
              style={s7}
              d="M226.393 52.576C222.638 52.576 219.758 51.8293 217.753 50.336C215.748 48.8427 214.382 46.752 213.657 44.064C212.932 41.3333 212.569 38.1547 212.569 34.528V0.160004H219.481V34.848C219.481 37.0667 219.63 39.0933 219.929 40.928C220.228 42.7627 220.868 44.2133 221.849 45.28C222.873 46.3467 224.388 46.88 226.393 46.88C228.441 46.88 229.956 46.3467 230.937 45.28C231.918 44.2133 232.558 42.7627 232.857 40.928C233.156 39.0933 233.305 37.0667 233.305 34.848V0.160004H240.153V34.528C240.153 38.1547 239.79 41.3333 239.065 44.064C238.34 46.752 236.974 48.8427 234.969 50.336C233.006 51.8293 230.148 52.576 226.393 52.576Z"
              stroke="white"
              strokeWidth="2"
            />
          </animated.svg>
        </NameContainer>
        <P>
          I'm a software engineer based in San Francisco, CA specializing in
          writing clean, elegant, and efficent code.{" "}
        </P>
        <Button paddings={"1rem 2rem"} hoverColor={"#9b7778"}>
          About Me
        </Button>
      </IntroContainter>
      <Footer />
    </HomepageContainer>
  );
};

export default Homepage;
