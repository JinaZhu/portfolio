import React, { useContext, useState } from "react";

import snowflake from "../../images/Seasons/snowflake_4.png";
import flower from "../../images/Icons/flower.png";
import leaf from "../../images/Icons/leaf.svg";
import sun from "../../images/Icons/sun.png";

const SeasonContext = React.createContext();

export const useSeason = () => {
  return useContext(SeasonContext) || {};
};

const seasonMonths = {
  winter: ["12", "01", "02"],
  spring: ["03", "04", "05"],
  summer: ["06", "07", "08"],
  fall: ["09", "10", "11"],
};

const seasonDetail = {
  winter: { name: "winter", color: "#a2bab9", icon: snowflake },
  spring: { name: "spring", color: "#e5b9b6", icon: flower },
  summer: { name: "summer", color: "#c6902b", icon: sun },
  autumn: { name: "autumn", color: "#a53d23", icon: leaf },
};

function checkSeason(month) {
  for (let season in seasonMonths) {
    if (seasonMonths[season].includes(month)) {
      return seasonDetail[season];
    }
  }
}

function settingSeason() {
  let today = new Date();
  const mm = String(today.getMonth() + 1).padStart(2, "0");

  const currentSeason = checkSeason(mm);
  return currentSeason;
}

const currentSetSeason = settingSeason();

const SeasonProvider = ({ children }) => {
  const [season, setSeason] = useState(currentSetSeason);

  return (
    <SeasonContext.Provider value={{ season, setSeason, seasonDetail }}>
      {children}
    </SeasonContext.Provider>
  );
};

export default SeasonProvider;
