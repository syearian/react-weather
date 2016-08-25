var axios = require('axios');

const APPID = '&APPID=cfc2eaa1c51253a29ce7206e1aad37c9';
var city, country, cityCountry;

function getCurrentWeather(city, country) {
  return axios.get('https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + '&type=accurate' + '&units=imperial' + APPID).then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
}

function getForecast(city, country) {
  return axios.get('https://crossorigin.me/http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + ',' + country + '&type=accurate' + '&units=imperial' + APPID + '&cnt=5');
}

// capitalize a string
function capitalize(str) { 
  var first = str[0].slice(0, 1); 
  first = first.toUpperCase(); 
  var rest = str.slice(1); 
  rest = rest.toLowerCase(); 
  return first + rest; 
}

// Set value of city, country, and format location
function getLocation(loc) {
  var array = loc.split(",");
  city = array[0];
  city = capitalize(city.toLowerCase());
  country = array[1].trim();
  cityCountry = city + ', ' + country.toUpperCase();
  country = country.toLowerCase();
}

// Change the background image
function changeBackImg(group) {
  var backImages = {
    "Thunderstorm" : "img/thunderstorm.jpg",
    "Drizzle" : "img/drizzle.jpg",
    "Rain" : "img/rain.jpg",
    "Snow" : "img/snow.jpg",
    "Atmosphere" : "img/atmosphere.jpg",
    "Clear" : "img/clear.jpg",
    "Clouds" : "img/clouds.jpg",
  };
  var backImg = "";
  switch (group) {
    case "Thunderstorm":
      backImg = backImages.Thunderstorm;
      break;
    case "Drizzle":
      backImg = backImages.Drizzle;
      break;
    case "Rain":
      backImg = backImages.Rain;
      break;
    case "Snow":
      backImg = backImages.Snow;
      break;
    case "Atmosphere":
      backImg = backImages.Atmosphere;
      break;
    case "Clear":
      backImg = backImages.Clear;
      break;
    case "Clouds":
      backImg = backImages.Clouds;
      break;
  }
}

var helpers = {
  getWeather: function(value) {
    getLocation(value);
    return getCurrentWeather(city, country);
  },
  getForecast: function(value) {
    getLocation(value);
    return getForecast(city, country);
  }
}

module.exports = helpers;