import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

export default function Date() {
  let now = new Date();

  let h2 = document.querySelector("h2");

  let date = now.getDate();
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let year = now.getFullYear();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()]; //0 and 6

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[now.getMonth()]; // 0 and 11

  h2.innerHTML = `${day} :  ${month}, ${date},${year}`;
  let h3 = document.querySelector("h3");
  h3.innerHTML = `${hours}:${minutes}`;

  //forecast info

  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return days[day];
  }
  return function formatDay() {
   
  };
}
