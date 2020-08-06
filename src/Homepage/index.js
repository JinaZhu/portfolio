import React from "react";
import Navbar from "../Navbar";

import { HomepageContainer, IntroContainter, Name } from "./styled";

const Homepage = () => {
  return (
    <HomepageContainer>
      <Navbar />
      <IntroContainter>
        <p>Hi, my name is</p>
        <Name>JINA ZHU</Name>
        <p>
          I'm a software engineer based in San Francisco, CA specializing in
          writing clean, elegant, and efficent code.{" "}
        </p>
        <button>About Me</button>
      </IntroContainter>
    </HomepageContainer>
  );
};

export default Homepage;
