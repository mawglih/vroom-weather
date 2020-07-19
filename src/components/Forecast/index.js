import React, { useState, useEffect } from 'react';
import { usePosition } from '../../hooks/use-position';
import api  from '../../api/weather';
import Card from '../Card';

const Forecast = () => {
  const watch = true;
  const {
    latitude,
    longitude,
    timestamp,
    accuracy,
    error,
  } = usePosition(watch);
  const [forecast, getForecast] = useState({});
 
  console.log('weather', forecast);
  const {
    list,
    city : {
      name,
    } = {},
  } = forecast;
    
  useEffect(() => {
    api.localWeather(latitude,longitude,'forecast/daily')
    .then(data => getForecast(data));
  }, [latitude, longitude]);

  const items = list && list.slice(0, 5);
  console.log('items', items);
  return (
    <div>
      <h1>That is forecast baby for {name}</h1>
      {items && items.length > 0 && items.map((item, ind) => {
        return (
          <Card
            key={ind}
            data={item}
            ind={ind}
          />
        )
      })}
    </div>
  )
}

export default Forecast;