const weatherData = {
  tempUnit: "C",
  windSpeedUnit: "m/s",
  days: [
    {
      day: "Mon",
      temp: 22,
      windDirection: "north-east",
      windSpeed: 10,
      type: "sunny",
    },
    {
      day: "Tue",
      temp: 14,
      windDirection: "north-west",
      windSpeed: 14,
      type: "rainy",
    },
    {
      day: "Wed",
      temp: 17,
      windDirection: "south-east",
      windSpeed: 20,
      type: "cloudy",
    },
    {
      day: "Thu",
      temp: 24,
      windDirection: "north-east",
      windSpeed: 8,
      type: "sunny",
    },
    {
      day: "Fri",
      temp: 13,
      windDirection: "north",
      windSpeed: 16,
      type: "rainy",
    },
    {
      day: "Sat",
      temp: 20,
      windDirection: "north-west",
      windSpeed: 13,
      type: "sunny",
    },
    {
      day: "Sun",
      temp: 15,
      windDirection: "east",
      windSpeed: 12,
      type: "cloudy",
    },
  ],
};

const loadData = () => {
  let dataElement = document.getElementById("weatherData");
  for (let element of weatherData.days) {
    let weatherItem = document.createElement("div");
    weatherItem.classList.add("weatherItem");
    weatherItem.addEventListener("click", (e) => onClick(e));
    dataElement.appendChild(weatherItem);
  }
};

const onClick = (e) => {
  console.log("clicked");
};

window.addEventListener("load", loadData);
