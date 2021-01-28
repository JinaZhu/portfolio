import React from "react";

import {
  AlignFooter,
  Credit,
  SeasonSelectionContainer,
  SeasonSelectionButton,
  InnerBorder,
  Seasons,
  FooterP,
} from "./styled";
import copyrightImg from "../images/Icons/copyright.svg";
import { useSeason } from "../Providers/Season";

const Footer = () => {
  const { setSeason, seasonDetail } = useSeason();

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
          {Object.values(seasonDetail).map((season) => {
            return (
              <SeasonSelectionButton
                onClick={() => setSeason(season)}
                key={season.name}
              >
                <InnerBorder>
                  <img src={season.icon} alt="winter" width="20" />
                </InnerBorder>
              </SeasonSelectionButton>
            );
          })}
        </Seasons>
      </SeasonSelectionContainer>
    </AlignFooter>
  );
};

export default Footer;
