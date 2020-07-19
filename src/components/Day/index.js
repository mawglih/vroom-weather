import React from 'react';

const Day = ({
  image,
  name,
  temp,
  humidity,
  pressure,
  speed,
}) => (
    <>
      {name && <h1>Local weather in {name}</h1>}
      <img src={`http://openweathermap.org/img/wn/${image}@2x.png`} alt="icon"/>
      <h2>Temperature: {temp && `${Math.round(temp)} F`}</h2>
      <h3>Humidity: {humidity} %</h3>
      <h3>Pressure: {pressure && `${pressure} hPa`}</h3>
      <h4>Wind at {speed && `${Math.round(speed)} mph`}</h4>
    </>
)

export default Day;
