function updateClock() {
  const options = {
    timeZone: "Europe/Rome",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  const clockElement = document.getElementById("clock");
  const localTime = new Date().toLocaleString("en-IE", options);

  clockElement.textContent = localTime;
}

updateClock();
setInterval(updateClock, 1000);
