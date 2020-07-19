import React from 'react';
import moment from 'moment';

const Day = ({
  weather,
  main,
  sys,
  wind,
  name,
}) => {
  return (
    <div>
      <h1>{name}</h1>

      {weather && <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}alt="icon" />}
      {main && <h2>Temperature: {main.temp}</h2>}
      {main && <h3>Humidity: {main.humidity}</h3>}
      {main && <h3>Pressure: {main.pressure}</h3>}
      {sys && <h4>Sunrise: {sys.sunrise}</h4>}
      {sys && <h4>Sunset: {sys.sunset}</h4>}
      {wind && <h4>Wind at {wind.speed}</h4>}
    </div>
  )
}

export default Day
