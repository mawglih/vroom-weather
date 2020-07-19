import React from 'react';
import moment from 'moment';

const Card = ({
  data : {
    temp: {
      max,
      min,
    },
    weather,
    dt,
  } = {},
  ind,
})=> {
  const Image = weather && weather.length > 0 &&  weather.map(item => {
    return (
      item.icon
    );
  });
  const todayMoment = moment().unix();
  const options = {weekday: 'long', month: 'long', day: 'numeric'};
  const newDate = new Date((todayMoment + ind*86400) * 1000).toLocaleDateString('en-US', options);

  return (
    <div>
      <h4>{newDate}</h4>
      <img src={`http://openweathermap.org/img/wn/${Image}@2x.png`} alt="icon"/>
      <h2>Max: {max && `${Math.round(max)} F`}</h2>
      <h2>Min: {min && `${Math.round(min)} F`}</h2>
    </div>
  )
}

export default Card;
