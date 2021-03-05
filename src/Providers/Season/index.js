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
  winter: ["12", "01", "02", "03"],
  spring: ["03", "04", "05", "06"],
  summer: ["06", "07", "08", "09"],
  fall: ["09", "10", "11", "12"],
};

const seasonDetail = {
  winter: { name: "winter", color: "#a2bab9", icon: snowflake },
  spring: { name: "spring", color: "#e3a6ae", icon: flower },
  summer: { name: "summer", color: "#f7af25", icon: sun },
  autumn: { name: "autumn", color: "#e28935", icon: leaf },
};
//e5b9b6

function checkSeason(month, day) {
  for (let season in seasonMonths) {
    if (seasonMonths[season].includes(month)) {
      if (month === "03") {
        if (day < 20) {
          return seasonDetail["winter"];
        } else {
          return seasonDetail["spring"];
        }
      } else if (month === "06") {
        if (day < 21) {
          return seasonDetail["spring"];
        } else {
          return seasonDetail["summer"];
        }
      } else if (month === "09") {
        if (day < 22) {
          return seasonDetail["summer"];
        } else {
          return seasonDetail["autumn"];
        }
      } else if (month === "12") {
        if (day < 21) {
          return seasonDetail["autumn"];
        } else {
          return seasonDetail["winter"];
        }
      } else {
        return seasonDetail[season];
      }
    }
  }
}

function settingSeason() {
  let today = new Date();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = today.getDay();

  const currentSeason = checkSeason(mm, dd);
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
