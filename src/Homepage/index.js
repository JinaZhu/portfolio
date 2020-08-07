import React from "react";
import Navbar from "../Navbar";
import leaf_branch from "../images/leaf-branch.png";

import {
  HomepageContainer,
  IntroContainter,
  Name,
  AboutMeButton,
  TopBranch,
  RightBranch,
} from "./styled";

const Homepage = () => {
  return (
    <HomepageContainer>
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
        <p>
          I'm a software engineer based in San Francisco, CA specializing in
          writing clean, elegant, and efficent code.{" "}
        </p>
        <AboutMeButton>About Me</AboutMeButton>
      </IntroContainter>
    </HomepageContainer>
  );
};

export default Homepage;
