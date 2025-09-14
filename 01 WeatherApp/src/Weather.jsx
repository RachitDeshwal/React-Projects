import SearchBox from "./SearchBox";
import { useState } from "react";
import InfoBox from "./InfoBox";
export default function Weather() {
  const [weatherInfo, setWeatherInfo] = useState({});
  let updateInfo = (result) => {
    setWeatherInfo(result);
  };

  return (
    <>
      <h2>WeatherApp</h2>
      <SearchBox updateInfo={updateInfo} />
      {Object.keys(weatherInfo).length != 0 && <InfoBox info={weatherInfo} />}
    </>
  );
}
