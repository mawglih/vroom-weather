import React, { useState, useEffect } from 'react';
import { usePosition } from '../../hooks/use-position';
import api from '../../api/weather';
import Spinner from '../Spinner';
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
 
  const [local, getLocal] = useState({});
    
  useEffect(() => {
    if(!latitude || !longitude) {
      getLocal({});
    } else {
      api.localWeather(latitude,longitude,'weather')
      .then(data => getLocal(data));
    }
  }, [latitude, longitude]);
  const {
    main: {
      temp,
      humidity,
      pressure,
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
  return (
    <div>
      {weather != null ? (<Day
        image={Image}
        name={name}
        temp={temp}
        humidity={humidity}
        pressure={pressure}
        speed={speed}
      />) : <Spinner/>}
    </div>
  )
}

export default Home;
