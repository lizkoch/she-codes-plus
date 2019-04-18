let now = new Date();
console.log(now);

function formatDate(date) {
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let weekNow = weekDays[now.getDay()];
  let hoursNow = now.getHours();
  let minutesNow = now.getMinutes();

  if (minutesNow < 10) {
    return `0${minutesNow}`;
  }

  if (hoursNow < 12) {
    periodTime = "AM";
  } else {
    periodTime = "PM";
  }

  let findTime = `${weekNow} ${hoursNow}:${minutesNow} ${periodTime}`;

  let timeNow = document.querySelector(".timeNow");
  timeNow.innerHTML = `${findTime}`;
}

let nowDate = formatDate(now);

let apiKey = "e4cc36c73832c7c7ff16bb720a49e759";
console.log(axios);

let apiUrl = "https://api.openweathermap.org/data/2.5";
let apiPath = "weather";
let city = "Lisbon";
let apiParams = `q=${city}&appid=${apiKey}`;

let place = document.querySelector("#main-city");
let description = document.querySelector("#weather-description");
let temperature = document.querySelector("#temperature-main");
let humidityLevel = document.querySelector("#weather-humidity-level");
let windSpeed = document.querySelector("#wind-speed-main");

function refreshWeather(response) {
  place.innerHTML = response.data.name;
  description.innerHTML = response.data.weather[0].description;
  temperature.innerHTML = Math.round(response.data.main.temp);
  humidityLevel.innerHTML = response.data.main.humidity;
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
}

function search(city) {
  let apiUrl = `${apiRoot}/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(refreshWeather);
}
