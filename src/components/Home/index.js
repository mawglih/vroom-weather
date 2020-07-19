import React, { useState, useEffect } from 'react';
import { usePosition } from '../../hooks/use-position';
import moment from 'moment';
import axios from 'axios';
import api from '../../api/weather';
import Day from '../Day';

const Home = () => {
  const watch = true;
  const {
    latitude,
    longitude,
    timestamp,
    accuracy,
    error,
  } = usePosition(watch);
  console.log('latitude', latitude);
  console.log('longitude', longitude);
 
  const [local, getLocal] = useState({});
 
  console.log('weather', local);
    
  useEffect(() => {
    api.localWeather(latitude,longitude,'weather')
    .then(data => getLocal(data));
  }, [latitude, longitude]);
  const {
    main: {
      temp,
      humidity,
      pressure,
    } = {},
    sys: {
      sunrise,
      sunset,
    } = {},
    weather,
    wind: {
      speed,
    } = {},
    name,
  } = local;
  const Image = weather && weather.length > 0 &&  weather.map(item => {
    return (
      item.icon
    );
  });
  const sunSet = sunset && new Date(sunset).toLocaleTimeString("en-US");
  const sunRise = sunrise && new Date(sunrise).toLocaleTimeString("en-US");
  return (
    <div>
      That is home of weather app
      <h1>{name}</h1>
      <img src={`http://openweathermap.org/img/wn/${Image}@2x.png`} alt="icon"/>
      <h2>Temperature: {temp && `${Math.round(temp)} F`}</h2>
      <h3>Humidity: {humidity} %</h3>
      <h3>Pressure: {pressure && `${pressure} hPa`}</h3>
      <h4>Sunrise: {sunRise}</h4>
      <h4>Sunset: {sunSet}</h4>
      <h4>Wind at {speed && `${Math.round(speed)} mph`}</h4>

    </div>
  )
}

export default Home;
