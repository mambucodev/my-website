// --- Clock ---
function updateHomeClock() {
  var now = new Date();
  var rome = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Rome" }));
  var hours = rome.getHours();
  var minutes = String(rome.getMinutes()).padStart(2, "0");

  var h = document.querySelector("#home-clock .clock-hours");
  var m = document.querySelector("#home-clock .clock-minutes");
  if (h) h.textContent = String(hours).padStart(2, "0");
  if (m) m.textContent = minutes;

  var utc = new Date(now.toLocaleString("en-US", { timeZone: "UTC" }));
  var offsetHours = Math.round((rome - utc) / 3600000);

  var offsetEl = document.getElementById("home-utc-offset");
  if (offsetEl) offsetEl.textContent = "UTC+" + offsetHours;

  var greeting = "";
  if (hours >= 5 && hours < 12) greeting = "Good morning";
  else if (hours >= 12 && hours < 18) greeting = "Good afternoon";
  else if (hours >= 18 && hours < 23) greeting = "Good evening";
  else greeting = "Sleeping probably";

  var greetEl = document.getElementById("home-clock-greeting");
  if (greetEl) greetEl.textContent = greeting;
}

updateHomeClock();
setInterval(updateHomeClock, 1000);

// --- Weather (Open-Meteo, Rome) ---
function mapWeatherCode(code) {
  // WMO codes → { style, icon, condition }
  // style matches ametrine's weather backgrounds: cloudy, showers, snowing
  if (code === 0) return { style: "cloudy", icon: "sun", condition: "Clear sky" };
  if (code <= 3) return { style: "cloudy", icon: "cloud-sun", condition: "Partly cloudy" };
  if (code <= 48) return { style: "cloudy", icon: "cloud-fog", condition: "Foggy" };
  if (code <= 57) return { style: "showers", icon: "cloud-rain", condition: "Drizzle" };
  if (code <= 67) return { style: "showers", icon: "cloud-rain", condition: "Rainy" };
  if (code <= 77) return { style: "snowing", icon: "cloud-snow", condition: "Snowing" };
  if (code <= 82) return { style: "showers", icon: "cloud-rain", condition: "Rain showers" };
  if (code <= 86) return { style: "snowing", icon: "cloud-snow", condition: "Snow showers" };
  if (code <= 99) return { style: "showers", icon: "cloud-lightning", condition: "Thunderstorm" };
  return { style: "cloudy", icon: "cloud", condition: "Cloudy" };
}

function fetchWeather() {
  var url = "https://api.open-meteo.com/v1/forecast?latitude=41.89&longitude=12.51&current=temperature_2m,weather_code&timezone=Europe/Rome";

  fetch(url)
    .then(function (res) { return res.json(); })
    .then(function (data) {
      var current = data.current;
      if (!current) return;

      var temp = Math.round(current.temperature_2m);
      var info = mapWeatherCode(current.weather_code);

      var card = document.getElementById("home-clock-card");
      if (card && info.style) card.classList.add(info.style);

      var tempEl = document.getElementById("home-weather-temp");
      if (tempEl) tempEl.textContent = temp + "°C";

      var condEl = document.getElementById("home-weather-condition");
      if (condEl) condEl.textContent = info.condition;

      // Show the matching pre-rendered icon, hide others
      var icons = document.querySelectorAll(".weather-icon");
      for (var i = 0; i < icons.length; i++) {
        icons[i].style.display = "none";
      }
      var activeIcon = document.getElementById("weather-icon-" + info.icon);
      if (activeIcon) activeIcon.style.display = "";

      var weatherEl = document.getElementById("home-weather");
      if (weatherEl) weatherEl.style.display = "";
    })
    .catch(function () {
      // Silently fail — card still shows clock without weather
    });
}

fetchWeather();
