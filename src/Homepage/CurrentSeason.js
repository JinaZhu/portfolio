import React from "react";

import Winter from "./Winter";
import Spring from "./Spring";

const CurrentSeason = ({ season }) => {
  if (season.name === "winter") {
    return <Winter />;
  }
  if (season.name === "spring") {
    return <Spring />;
  }
  if (season.name === "summer" || season.name === "autumn") {
    return <Winter />;
  }
};

export default CurrentSeason;
