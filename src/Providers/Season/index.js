import React, { useState, useCallback, useEffect } from "react";

const SeasonContext = React.createContext();

const seasonMonths = {
  winter: ["12", "01", "02"],
  spring: ["03", "04", "05"],
  summer: ["06", "07", "08"],
  fall: ["09", "10", "11"],
};

function checkSeason(month) {
  for (let season in seasonMonths) {
    if (seasonMonths[season].includes(month)) {
      return season;
    }
  }
}

const SeasonProvider = ({ children }) => {
  const [season, setSeason] = useState("winter");
  const [loading, setLoading] = useState(false);

  const settingSeason = useCallback(() => {
    setLoading(true);
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;

    const currentSeason = checkSeason(mm);
    setSeason(currentSeason);
    setLoading(false);
  }, []);

  useEffect(() => {
    settingSeason();
  }, [settingSeason]);

  console.log(season);
  return (
    <SeasonContext.Provider value={{ season, loading }}>
      {children}
    </SeasonContext.Provider>
  );
};

export default SeasonProvider;
