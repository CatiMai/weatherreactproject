import React from "react";

export default function Sunrise(props) {
  let sunsetHour = props.sunset.getHours();
  if (sunsetHour < 10) {
    sunsetHour = `0${sunsetHour}`;
  }
  let sunsetMinute = props.sunset.getMinutes();
  if (sunsetMinute < 10) {
    sunsetMinute = `0${sunsetMinute}`;
  }
  return (
    <div>
      {sunsetHour}:{sunsetMinute}
    </div>
  );
}
