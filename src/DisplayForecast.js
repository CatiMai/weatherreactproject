import React from "react";
import DisplayIcon from "./DisplayIcon";

export default function DisplayForecast(props) {
  //let iconPath = ;
  function hours() {
    let date = new Date(props.props.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }
  function temp() {
    let temperature = Math.round(props.props.main.temp);
    return temperature;
  }
  return (
    <div>
      <div className="col ForecastCol">
        {hours()}
        <div className="ForecastIcon">
          <>
            <DisplayIcon code={props.props.weather[0].icon} />
          </>
        </div>
        {temp()}°C
      </div>
    </div>
  );
}
//
