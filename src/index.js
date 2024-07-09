import "./styles.css";
/*

    1. create a div for displaying the weather information in html
    2. should have a default country being displayed
    3. theres a searchbox where users can input city/country
    4. when user pressed enter on a search, clear the current displayed country and replace with searched location
    5. declare variable to select maindisplay in html

*/

const mainDisplay = document.querySelector(".maindisplay");
const timeContainer = document.querySelector(".timecontainer");
const dateDisplay = document.querySelector(".date");
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

const updateDisplay = () => {
  countryDisplay.textContent = weatherInfo.location.country;
  cityDisplay.textContent = weatherInfo.location.name;
  rainDisplay.textContent = weatherInfo.current.condition.text;
  dateDisplay.textContent = weatherInfo.location.localtime.split(" ")[0];
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
  updateDisplay();
};

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    getWeatherInfo();
  }
});
/*const addAsync = async () => {
  //async always returns a promise, so we can process further with .then
  const a = await doubleAfter2Seconds(10);
  const b = await doubleAfter2Seconds(20);
  const c = await doubleAfter2Seconds(30);
  return a + b + c;
};
*/
