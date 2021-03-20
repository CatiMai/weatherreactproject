import React from "react";
import FormatDate from "./FormatDate";
import DisplayIcon from "./DisplayIcon";
import TempandUnits from "./TempandUnits";
import FormatSunrise from "./FormatSunrise";
import FormatSunset from "./FormatSunset";
export default function DisplayWeatherInfo(props) {
  return (
    <div className="displayInfo">
      <h2 className="searchedCity">{props.data.city}</h2>{" "}
      <div className="Info">
        Last Updated:{" "}
        <>
          {" "}
          <FormatDate date={props.data.date} />{" "}
        </>
        <div className="weatherDetails">
          <span className="text-capitalize description">
            {" "}
            {props.data.description}
          </span>
          |<span className="humidity">Humidity: {props.data.humidity}%</span>|
          <span className="wind">Wind: {Math.round(props.data.wind)}km/h</span>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="weatherIcon float-left">
            <DisplayIcon code={props.data.icon} />{" "}
          </div>
          <TempandUnits celsius={props.data.temperature} />{" "}
        </div>

        <div className="col-6">
          <ul className="displayInfo">
            <div class="row">
              <div class="col-8 col-sm-6">
                Sunrise*:
                <FormatSunrise sunrise={props.data.sunrise} />
              </div>
              <div class="col-4 col-sm-6">
                Sunset*: <FormatSunset sunset={props.data.sunset} />
              </div>
              <small className="indication">
                *Indication relative to your current location
              </small>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
