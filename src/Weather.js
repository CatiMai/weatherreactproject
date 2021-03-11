import React from "react";
import "./App.css";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city.."
                className="form-control"
                autoFocus="on"
              ></input>
            </div>
            <div className="col-3">
              <input type="submit" className="btn btn-primary w-100"></input>
            </div>
          </div>
        </form>
        <h2 className="searchedCity">City</h2>
        <div className="Info">Last Updated: Monday 20 March 2021 at 12:00</div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="emoji"
                className="float-left"
              />{" "}
              <span className="degree">6</span>{" "}
              <span className="units">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul className="displayInfo">
              <li>Precipitation: 20%</li>
              <li>Humidity: 50%</li>
              <li>Wind: 10km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
