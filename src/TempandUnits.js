import React, { useState } from "react";

export default function TempandUnits(props) {
  const [Unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheitCalculation() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }
  if (Unit === "celsius") {
    return (
      <div>
        <span className="degree">{Math.round(props.celsius)}</span>
        <span className="units">
          {" "}
          °C |
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="degree">{fahrenheitCalculation()}</span>
        <span className="units">
          {" "}
          <a href="/" onClick={showCelsius}>
            °C
          </a>
          |°F
        </span>
      </div>
    );
  }
}
