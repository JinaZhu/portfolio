import React from "react";

import {
  AlignFooter,
  Credit,
  SeasonSelectionContainer,
  SeasonSelection,
  InnerBorder,
  Seasons,
  FooterP,
} from "./styled";
import snowflake from "../images/Seasons/snowflake_4.png";
import copyrightImg from "../images/Icons/copyright.svg";
import flower from "../images/Icons/flower.png";
import leaf from "../images/Icons/leaf.svg";
import sun from "../images/Icons/sun.png";

const seasons = [
  { season: "winter", color: "#a2bab9", icon: snowflake },
  { season: "spring", color: "#F7dcdc", icon: flower },
  { season: "summer", color: "#fccf55", icon: sun },
  { season: "fall", color: "#c88749", icon: leaf },
];

const Footer = () => {
  return (
    <AlignFooter>
      <Credit
        href="https://github.com/JinaZhu/portfolio/tree/master"
        target="_blank"
      >
        <img src={copyrightImg} alt="copyright" width="15" />
        <p>Designed and built by Jina Zhu</p>
      </Credit>
      <SeasonSelectionContainer>
        <FooterP>What's your favorite season?</FooterP>
        <Seasons>
          {seasons.map((season) => {
            return (
              <SeasonSelection>
                <InnerBorder>
                  <img src={season.icon} alt="winter" width="20" />
                </InnerBorder>
              </SeasonSelection>
            );
          })}
        </Seasons>
      </SeasonSelectionContainer>
    </AlignFooter>
  );
};

export default Footer;
