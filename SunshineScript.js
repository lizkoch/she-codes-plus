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

  let dayNow = weekDays[now.getDay()];
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

  let findTime = `${dayNow} ${hoursNow}:${minutesNow} ${periodTime}`;

  let timeNow = document.querySelector("#timeNow");
  timeNow.innerHTML = `${findTime}`;
}

let nowDate = formatDate(now);

let form = document.querySelector(".search-city");
form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  let city = document.querySelector(".search-city").value;

  getWeather(city);
}

function getWeather(city) {
  let apiKey = "e4cc36c73832c7c7ff16bb720a49e759";
  let url = "https://api.openweathermap.org/data/2.5/";
  let path = "weather";
  let units = "metric";
  let appParams = `q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(`${url}/${path}?${appParams}`).then(function(response) {
    let description = document.querySelector("#description-main");
    let temperature = document.querySelector("#temperature-main");
    let humidityLevel = document.querySelector("#humidity-main");
    let windSpeed = document.querySelector("#wind-speed-main");
    let mainCity = document.querySelector("#main-city");
    description.innerHTML = response.data.weather[0].description;
    temperature.innerHTML = Math.round(response.data.main.temp);
    humidityLevel.innerHTML = response.data.main.humidity;
    windSpeed.innerHTML = Math.round(response.data.wind.speed);
    mainCity.innerHRML = response.data.name;
  });
}
getWeather("Lisbon");
