import React from "react";

import Navbar from "../Navbar";
import Footer from "./Footer";
import { HomepageContainer } from "./styled";
import Winter from "./Winter";
import InfoGlassMorph from "./InfoGlassMorph";

const Homepage = () => {
  return (
    <HomepageContainer>
      <Winter />
      <Navbar pageColor={"#bb9495"} currentPage={"home"} />
      <InfoGlassMorph />
      <Footer />
    </HomepageContainer>
  );
};

export default Homepage;
