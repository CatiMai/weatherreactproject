import React from "react";
import FormatDate from "./FormatDate";
import DisplayIcon from "./DisplayIcon";
import TempandUnits from "./TempandUnits";

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
            <div className="float-left">
              <DisplayIcon code={props.data.icon} />{" "}
            </div>
            <>
              <TempandUnits celsius={props.data.temperature} />
            </>{" "}
          </div>
        </div>
        <div className="col-6">
          <ul className="displayInfo">
            <li className="text-capitalize">{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
