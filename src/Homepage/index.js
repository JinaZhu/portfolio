import React from "react";

import Navbar from "../Navbar";
import Footer from "./Footer";
import { HomepageContainer } from "./styled";
import CurrentSeason from "./CurrentSeason";
import InfoGlassMorph from "./InfoGlassMorph";
import { useSeason } from "../Providers/Season";

const Homepage = () => {
  const { season } = useSeason();

  return (
    <HomepageContainer color={season.color}>
      <CurrentSeason season={season} />
      <Navbar pageColor={"#a2bab9"} currentPage={"home"} />
      <InfoGlassMorph season={season} />
      <Footer />
    </HomepageContainer>
  );
};

export default Homepage;
