import axios from 'axios';

const API_KEY='4ae6a7525d23373d70db9df602618675';

export default {
  localWeather: (lat, lon, type) => {
    return axios({
      url: `http://api.openweathermap.org/data/2.5/${type}?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`,
      method: 'GET',
    })
    .then (res => res.data);
  }
};
