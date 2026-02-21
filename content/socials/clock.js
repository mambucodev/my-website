function updateClock() {
  const now = new Date();

  const timeOptions = {
    timeZone: "Europe/Rome",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  document.getElementById("clock").textContent =
    now.toLocaleString("en-IE", timeOptions);

  const rome = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Rome" }));
  const utc = new Date(now.toLocaleString("en-US", { timeZone: "UTC" }));
  const offsetHours = Math.round((rome - utc) / 3600000);

  const utcLabel = document.getElementById("utc-offset");
  if (utcLabel) {
    utcLabel.textContent = `UTC+${offsetHours}`;
  }
}

updateClock();
setInterval(updateClock, 1000);
