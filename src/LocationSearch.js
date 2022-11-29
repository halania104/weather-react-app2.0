import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function LocationSearch() {
  function findingPlace(city) {
    let apiKey = "4ea07c27d25d25e1861d7e9cc4008ce7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#search-input").value;
    findingPlace(city);
  }

  function searchLocation(position) {
    let apiKey = "4ea07c27d25d25e1861d7e9cc4008ce7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(showWeather);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  return (
    <p>
      <LocationSearch />
    </p>
  );
}
