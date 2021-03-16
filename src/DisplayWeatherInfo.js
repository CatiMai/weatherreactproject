import React from "react";
import FormatDate from "./FormatDate";

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
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="float-left"
            />{" "}
            <span className="degree">{Math.round(props.data.temperature)}</span>{" "}
            <span className="units">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul className="displayInfo">
            <li className="text-capitalize">
              Description: {props.data.description}
            </li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
