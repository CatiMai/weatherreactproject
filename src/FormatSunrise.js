import React from "react";
export default function Sunrise(props) {
  let sunriseHour = props.sunrise.getHours();
  if (sunriseHour < 10) {
    sunriseHour = `0${sunriseHour}`;
  }
  let sunriseMinute = props.sunrise.getMinutes();
  if (sunriseMinute < 10) {
    sunriseMinute = `0${sunriseMinute}`;
  }
  return (
    <div>
      {sunriseHour}:{sunriseMinute}
    </div>
  );
}
