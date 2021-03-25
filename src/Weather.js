import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Forecast from "./Forecast";
import "./Weather.css";
import DisplayWeatherInfo from "./DisplayWeatherInfo";

export default function Weather(props) {
  const [WeatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.city);
  function showInfo(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset),
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
    });
  }
  function search() {
    const key = `2b81da2d965f990a959c8aaf038b61e7`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    axios.get(url).then(showInfo);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  if (WeatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city.."
                  className="form-control"
                  autoFocus="on"
                  onChange={updateCity}
                ></input>
              </div>
              <div className="col-3">
                <input type="submit" className="btn btn-primary w-100"></input>
              </div>
            </div>
          </form>
          <>
            {" "}
            <DisplayWeatherInfo data={WeatherData} />{" "}
          </>
          <div className="forecastHeadline">Hourly Forecast</div>

          <>
            <Forecast city={WeatherData.city} />
          </>
        </div>
      </div>
    );
  } else {
    search();
    return "App is loading...";
  }
}
