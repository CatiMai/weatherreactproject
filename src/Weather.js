import React from "react";
import "./App.css";

export default function Weather() {
  return (
    <div className=" Weather container">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city.."
              className="form-control"
            ></input>
          </div>
          <div className="col-3">
            <input type="submit" className="btn btn-primary"></input>
          </div>
        </div>
      </form>
      <div className="row">
        <h2 className="searchedCity">City</h2>
      </div>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="emoji"
          />{" "}
          6° C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 20%</li>
            <li>Humidity: 50%</li>
            <li>Wind: 10km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
