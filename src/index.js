import "./styles.css";
const mainDisplay = document.querySelector(".maindisplay");
const forecastDisplay = document.querySelector(".forecast");
const searchInput = document.querySelector(".searchinput");
const searchBtn = document.querySelector(".searchbutton");
const todayContainer = document.querySelector(".today");
const todayDate = document.querySelector(".todaydate");
const todayTime = document.querySelector(".todaytime");
const todayCountry = document.querySelector(".todaycountry");
const todayCity = document.querySelector(".todaycity");
const todayWeather = document.querySelector(".todayweather");
const todayWind = document.querySelector(".todaywind");
const todayHumidity = document.querySelector(".todayhumidity");
const todayTemperatureCelcius = document.querySelector(
  ".todaytemperaturecelcius"
);
const todayTemperatureFahrenheit = document.querySelector(
  ".todaytemperaturefahrenheit"
);
let weatherInfo;

const upforecastDate = () => {
  //work on the todaydiv, then work on the forecasts
  todayDate.textContent = "TODAY";

  todayCity.textContent = weatherInfo.location.name;
  todayWeather.textContent = weatherInfo.current.condition.text;
  todayWind.textContent = `Wind Speed: ${weatherInfo.current.wind_kph} km/h`;
  todayHumidity.textContent = `Humidity level: ${weatherInfo.current.humidity}%`;
  todayTemperatureCelcius.textContent = `${weatherInfo.current.temp_c}°C`;
  todayTemperatureFahrenheit.textContent = `${weatherInfo.current.temp_f}°F`;

  while (forecastDisplay.hasChildNodes()) {
    forecastDisplay.removeChild(forecastDisplay.firstChild);
  }
  for (let i = 1; i < weatherInfo.forecast.forecastday.length; i++) {
    const theDayDisplay = document.createElement("div"); //the whole day CARD
    theDayDisplay.classList.add(`day-${i}`, "forecastcard");

    const forecastDate = document.createElement("div");
    forecastDate.classList.add("forecastdate");
    forecastDate.textContent = weatherInfo.forecast.forecastday[i].date;

    const forecastTemperatureCelcius = document.createElement("div");
    forecastTemperatureCelcius.classList.add("forecasttemperaturecelcius");
    forecastTemperatureCelcius.textContent = `${weatherInfo.forecast.forecastday[i].day.mintemp_c}°C/${weatherInfo.forecast.forecastday[i].day.maxtemp_c}°C`;

    const forecastTemperatureFahrenheit = document.createElement("div");
    forecastTemperatureFahrenheit.classList.add(
      "forecasttemperaturefahrenheit"
    );
    forecastTemperatureFahrenheit.textContent = `${weatherInfo.forecast.forecastday[i].day.mintemp_f}°F/${weatherInfo.forecast.forecastday[i].day.maxtemp_f}°F`;

    const forecastWeather = document.createElement("div");
    forecastWeather.classList.add("forecastweather");
    forecastWeather.textContent =
      weatherInfo.forecast.forecastday[i].day.condition.text;

    theDayDisplay.appendChild(forecastDate);
    theDayDisplay.appendChild(forecastTemperatureCelcius);
    theDayDisplay.appendChild(forecastTemperatureFahrenheit);
    theDayDisplay.appendChild(forecastWeather);
    forecastDisplay.appendChild(theDayDisplay);
  }
};
const getWeatherInfo = async () => {
  const fetchWeatherInfo = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=575cfd48bc4047e788a115746240807&q=${searchInput.value}&days=5`,
    {
      mode: "cors",
    }
  );
  weatherInfo = await fetchWeatherInfo.json(); //this returns the data for the searched city/country;
  console.log(weatherInfo);
};
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    getWeatherInfo().then(() => {
      upforecastDate();
    });
  }
});

/*for (let i = 0; i < weatherInfo.forecast.forecastday.length; i++) {
  console.log(i);
}*/

/*

    1. create a div for displaying the weather information in html
    2. should have a default country being displayed
    3. theres a searchbox where users can input city/country
    4. when user pressed enter on a search, clear the current displayed country and replace with searched location
    5. declare variable to select maindisplay in html

*/
/*
const mainDisplay = document.querySelector(".maindisplay");
const timeContainer = document.querySelector(".timecontainer");
const forecastDate = document.querySelector(".date");
const dayDisplay = document.querySelector(".day");
const timeDisplay = document.querySelector(".time");
const countryDisplay = document.querySelector(".country");
const cityDisplay = document.querySelector(".city");
const temperatureDisplay = document.querySelector(".temperature");
const rainDisplay = document.querySelector(".rain");

const searchInput = document.querySelector(".searchinput");
const searchBtn = document.querySelector(".searchbutton");

let weatherInfo;
let weatherForceast;
/*
const upforecastDate = () => {
  countryDisplay.textContent = weatherInfo.location.country;
  cityDisplay.textContent = weatherInfo.location.name;
  rainDisplay.textContent = weatherInfo.current.condition.text;
  forecastDate.textContent = weatherInfo.location.localtime.split(" ")[0];
  timeDisplay.textContent = weatherInfo.location.localtime.split(" ")[1];
};
const getWeatherInfo = async () => {
  const fetchWeatherInfo = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=575cfd48bc4047e788a115746240807&q=${searchInput.value}&days=14`,
    {
      mode: "cors",
    }
  );
  weatherInfo = await fetchWeatherInfo.json(); //this returns the data for the searched city/country;
  console.log(weatherInfo);
  upforecastDate();
};

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    getWeatherInfo();
  }
});
*/
/*const addAsync = async () => {
  //async always returns a promise, so we can process further with .then
  const a = await doubleAfter2Seconds(10);
  const b = await doubleAfter2Seconds(20);
  const c = await doubleAfter2Seconds(30);
  return a + b + c;
};
*/
