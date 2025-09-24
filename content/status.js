const indicatorElement = document.getElementById("online-indicator");
const statusElement = document.getElementById("status");

document.addEventListener("DOMContentLoaded", () => {
  updateStatus();
  setInterval(updateStatus, 10000);
});

function updateStatus() {
  fetch("https://api.lanyard.rest/v1/users/604790617138266149")
    .then((response) => response.json())
    .then((data) => {
      const status = data.data.discord_status;

      indicatorElement.classList.remove("online", "idle", "dnd", "offline");
      indicatorElement.classList.add(status);

      switch (status) {
        case "online":
          statusElement.innerHTML = "Online";
          break;
          case "idle":
            statusElement.innerHTML = "Idle";
            break;
          case "dnd":
            statusElement.innerHTML = "DND";
            break;
          case "offline":
            statusElement.innerHTML = "Offline";
            break;
      }
    })
    .catch((error) => {
      console.error("Error fetching Lanyard data:", error);
      indicatorElement.innerHTML = "N/A";
    });
}
