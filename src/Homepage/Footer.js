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
  const { setSeason, seasonDetail, season } = useSeason();
  console.log(season);

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
          {Object.values(seasonDetail).map((seasonBtn) => {
            return (
              <SeasonSelectionButton
                onClick={() => setSeason(seasonBtn)}
                key={seasonBtn.name}
                isActive={season.name === seasonBtn.name ? true : false}
              >
                <InnerBorder>
                  <img src={seasonBtn.icon} alt="season button" width="20" />
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
