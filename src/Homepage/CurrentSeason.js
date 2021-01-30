import React from "react";

import WinterAutumn from "./WinterAutumn";
import Spring from "./Spring";
import Summer from "./Summer";

const CurrentSeason = ({ season }) => {
  if (season.name === "winter") {
    return <WinterAutumn season={season} />;
  }
  if (season.name === "spring") {
    return <Spring />;
  }

  if (season.name === "autumn") {
    return <WinterAutumn season={season} />;
  }

  if (season.name === "summer") {
    return <Summer />;
  }
};

export default CurrentSeason;
