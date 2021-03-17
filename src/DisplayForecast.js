import React from "react";
import DisplayIcon from "./DisplayIcon";

export default function DisplayForecast(props) {
  function hours() {
    let date = new Date(props.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }
  return (
    <div>
      <div className="col-2">
        {hours()}
        <div className="ForecastIcon"></div>
        {Math.round(props.main.temp)}°C
      </div>
    </div>
  );
}
// <DisplayIcon code={props.weather[0].icon} />
