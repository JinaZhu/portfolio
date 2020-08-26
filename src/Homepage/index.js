import React from "react";
import Navbar from "../Navbar";
import leaf_branch from "../images/leaf-branch.png";

import { Button } from "../globalStyles";
import Footer from "./Footer";
import {
  HomepageContainer,
  IntroContainter,
  Name,
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
        <Button paddings={"1rem 2rem"} hoverColor={"#9b7778"}>
          About Me
        </Button>
      </IntroContainter>
      <Footer />
    </HomepageContainer>
  );
};

export default Homepage;
