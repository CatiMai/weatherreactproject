import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [WeatherData, setWeatherData] = useState({ ready: false });
  function showInfo(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: "Monday 20 March 2021 at 12:00",
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://ssl.gstatic.com/onebox/weather/64/sunny.png`,
    });
  }
  if (WeatherData.true) {
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
          <h2 className="searchedCity">{WeatherData.city}</h2>
          <div className="Info">Last Updated: {WeatherData.date}</div>
          <div className="row">
            <div className="col-6">
              <div className="clearfix">
                <img
                  src={WeatherData.icon}
                  alt={WeatherData.description}
                  className="float-left"
                />{" "}
                <span className="degree">{WeatherData.temperature}</span>{" "}
                <span className="units">°C</span>
              </div>
            </div>
            <div className="col-6">
              <ul className="displayInfo">
                <li>Description: {WeatherData.description}</li>
                <li>Humidity: {WeatherData.humidity}%</li>
                <li>Wind: {WeatherData.wind}km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const key = `c4f507ff8b138e87270d9f1d7092aab2`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${key}&units=metric`;
    axios.get(url).then(showInfo);
    return "App is loading...";
  }
}
