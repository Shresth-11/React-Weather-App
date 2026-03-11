import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [WeatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 24,
    temp: 44,
    tempMin: 55,
    tempMax: 55,
    humidity: 99,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App by Delta</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={WeatherInfo} />
    </div>
  );
}
