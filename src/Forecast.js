import React, { useState } from "react";
import axios from "axios";
import DisplayForecast from "./DisplayForecast";
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function showForecast(response) {
    console.log(response.data);
    setForecast(response.data);
    setLoaded(true);
  }
  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="Forecast row">
        <>
          <DisplayForecast props={forecast.list[0]} />
          <DisplayForecast props={forecast.list[1]} />
          <DisplayForecast props={forecast.list[2]} />
          <DisplayForecast props={forecast.list[3]} />
          <DisplayForecast props={forecast.list[4]} />
          <DisplayForecast props={forecast.list[5]} />
        </>
      </div>
    );
  } else {
    const key = `2b81da2d965f990a959c8aaf038b61e7`;
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${key}&units=metric`;
    axios.get(url).then(showForecast);
    return "Loading";
  }
}
