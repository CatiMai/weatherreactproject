import React, { useState } from "react";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function showForecast(response) {
    console.log(response.data);
    setForecast(response.data);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="Forecast row">
        <div className="col">10:00 Emoji Temperature</div>
      </div>
    );
  } else {
    const key = `c4f507ff8b138e87270d9f1d7092aab2`;
    let url = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${props.city}&appid=${key}&units=metric`;
    axios.get(url).then(showForecast);
    return "Loading";
  }
}
