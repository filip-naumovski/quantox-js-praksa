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

let temperatureUnit = "C";
let windUnit = "m/s";

const loadData = () => {
  let dataElement = document.getElementById("weatherData");
  for (let element of weatherData.days) {
    let weatherItem = document.createElement("div");
    weatherItem.classList.add("weatherItem");
    weatherItem.addEventListener("click", (e) => onClick(e));

    let weatherItemDay = document.createElement("p");
    weatherItemDay.classList.add("weatherItemDay");
    weatherItemDay.innerHTML = element.day;
    weatherItem.appendChild(weatherItemDay);

    let weatherItemTemp = document.createElement("p");
    weatherItemTemp.classList.add("weatherItemTemp");
    weatherItemTemp.innerHTML = `${element.temp}° <small>${temperatureUnit}</small>`;
    weatherItem.appendChild(weatherItemTemp);

    dataElement.appendChild(weatherItem);
  }
};

const getArrowSymbol = (direction) => {
  switch (direction) {
    case "east":
      return "&#8592;";
    case "south":
      return "&#8593;";
    case "west":
      return "&#8594;";
    case "north":
      return "&#8595;";
    case "south-east":
      return "&#8598;";
    case "south-west":
      return "&#8599;";
    case "north-west":
      return "&#8600;";
    case "north-east":
      return "&#8601;";
  }
};

const onClick = (e) => {
  let widget = document.getElementById("weatherWidget");
  let widgetTopArea = document.createElement("div");
  let widgetBottomArea = document.createElement("div");
  widgetTopArea.classList.add("widgetTopArea");
  widgetBottomArea.classList.add("widgetBottomArea");
  let clickedDay = e.currentTarget.firstChild.innerHTML;
  for (let element of weatherData.days) {
    if (clickedDay === element.day) {
      widget.innerHTML = "";
      widget.appendChild(widgetTopArea);
      widget.appendChild(widgetBottomArea);

      let widgetDay = document.createElement("div");
      widgetDay.classList.add("widgetDay");
      widgetDay.innerHTML = element.day;
      widgetTopArea.appendChild(widgetDay);

      let widgetType = document.createElement("img");
      widgetDay.classList.add("widgetType");
      widgetType.src = "./assets/" + element.type + ".png";
      widgetType.classList.add("widgetType");
      widgetTopArea.appendChild(widgetType);

      let widgetTemp = document.createElement("div");
      widgetTemp.classList.add("widgetTemp");
      widgetTemp.innerHTML = `${element.temp}° <small>${temperatureUnit}</small>`;
      widgetBottomArea.appendChild(widgetTemp);

      let widgetWind = document.createElement("div");
      widgetWind.classList.add("widgetWind");
      let windArrowSymbol = getArrowSymbol(element.windDirection);
      widgetWind.innerHTML = `${windArrowSymbol} ${element.windSpeed} ${windUnit}`;
      widgetBottomArea.appendChild(widgetWind);
    }
  }
};

window.addEventListener("load", loadData);
