const initialWeatherData = {
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

let weatherData = { ...initialWeatherData };

const loadData = () => {
  const dataElement = document.getElementById("weatherData");
  dataElement.innerHTML = "";
  weatherData.days.forEach((element) => {
    const weatherItem = document.createElement("div");
    weatherItem.classList.add("weatherItem");
    weatherItem.addEventListener("click", onClick);

    const weatherItemDay = document.createElement("p");
    weatherItemDay.classList.add("weatherItemDay");
    weatherItemDay.innerHTML = element.day;
    weatherItem.appendChild(weatherItemDay);

    const weatherItemTemp = document.createElement("p");
    weatherItemTemp.classList.add("weatherItemTemp");
    weatherItemTemp.innerHTML = `${element.temp}° <small>${weatherData.tempUnit}</small>`;
    weatherItem.appendChild(weatherItemTemp);

    dataElement.appendChild(weatherItem);
  });
};

window.addEventListener("load", loadData);

const getFullDayName = (inputDay) => {
  switch (inputDay) {
    case "Mon":
      return "Monday";
    case "Tue":
      return "Tuesday";
    case "Wed":
      return "Wednesday";
    case "Thu":
      return "Thursday";
    case "Fri":
      return "Friday";
    case "Sat":
      return "Saturday";
    case "Sun":
      return "Sunday";
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

const renderDay = (day) => {
  const widget = document.getElementById("weatherWidget");
  const widgetTopArea = document.createElement("div");
  const widgetBottomArea = document.createElement("div");
  widgetTopArea.classList.add("widgetTopArea");
  widgetBottomArea.classList.add("widgetBottomArea");
  weatherData.days.forEach((element) => {
    if (day === element.day) {
      widget.innerHTML = "";
      widget.appendChild(widgetTopArea);
      widget.appendChild(widgetBottomArea);

      const widgetDay = document.createElement("div");
      widgetDay.classList.add("widgetDay");
      widgetDay.innerHTML = getFullDayName(element.day);
      widgetDay.innerHTML +=
        '<br/><div class="hint">Try clicking on the temperature or wind speed</div>';
      widgetTopArea.appendChild(widgetDay);

      const widgetType = document.createElement("img");
      widgetDay.classList.add("widgetType");
      widgetType.src = "./assets/" + element.type + ".png";
      widgetType.alt = "";
      widgetType.classList.add("widgetType");
      widgetTopArea.appendChild(widgetType);

      const widgetTemp = document.createElement("div");
      widgetTemp.classList.add("widgetTemp");
      widgetTemp.innerHTML = `${element.temp}° <small>${weatherData.tempUnit}</small>`;
      widgetBottomArea.appendChild(widgetTemp);
      widgetTemp.addEventListener(
        "click",
        function () {
          changeTempUnit(element.day);
        },
        false
      );

      const widgetWind = document.createElement("div");
      widgetWind.classList.add("widgetWind");
      const windArrowSymbol = getArrowSymbol(element.windDirection);
      widgetWind.innerHTML = `${windArrowSymbol} ${element.windSpeed} ${weatherData.windSpeedUnit}`;
      widgetBottomArea.appendChild(widgetWind);
      widgetWind.addEventListener(
        "click",
        function () {
          changeWindUnit(element.day);
        },
        false
      );
    }
  });
};

const onClick = (e) => {
  const clickedDay = e.currentTarget.firstChild.innerHTML;
  renderDay(clickedDay);
};

const changeWindUnit = (inputDay) => {
  if (weatherData.windSpeedUnit === "m/s") {
    weatherData.windSpeedUnit = "km/h";
    weatherData.days.forEach((element) => {
      element.windSpeed *= 3.6;
      element.windSpeed = element.windSpeed.toFixed(1);
    });
  } else {
    weatherData.windSpeedUnit = "m/s";
    weatherData.days.forEach((element) => {
      element.windSpeed /= 3.6;
      element.windSpeed = element.windSpeed.toFixed(0);
    });
  }
  renderDay(inputDay);
};

const changeTempUnit = (inputDay) => {
  if (weatherData.tempUnit === "C") {
    weatherData.tempUnit = "K";
    weatherData.days.forEach((element) => {
      element.temp += 273.15;
    });
  } else {
    weatherData.tempUnit = "C";
    weatherData.days.forEach((element) => {
      element.temp -= 273.15;
    });
  }
  renderDay(inputDay);
  loadData();
};
