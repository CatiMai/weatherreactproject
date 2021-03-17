import React from "react";
import DisplayIcon from "./DisplayIcon";

export default function DisplayForecast(props) {
  let iconPath = props.weather[0].icon;
  function hours() {
    let date = new Date(props.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }
  function temp() {
    let temperature = Math.round(props.main.temp);
    return temperature;
  }
  return (
    <div>
      <div className="col-2">
        {hours()}
        <div className="ForecastIcon">
          <>
            <DisplayIcon code={iconPath} />
          </>
        </div>
        {temp()}°C
      </div>
    </div>
  );
}
//
