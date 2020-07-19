import axios from 'axios';

export default {
  localWeather: (lat, lon, type) => {
    console.log('key', process.env.API_KEY)
    return axios({
      url: `http://api.openweathermap.org/data/2.5/${type}?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`,
      method: 'GET',
    })
    .then (res => res.data);
  }
};
