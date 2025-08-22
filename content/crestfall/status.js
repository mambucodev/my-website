const indicatorElement = document.getElementById("online-indicator");
const playerDetailsElement = document.getElementById("player-details");
const playerCounterElement = document.getElementById("player-counter");
const playersListElement = document.getElementById("players-list");
const offlineMessageElement = document.getElementById("offline-message");

document.addEventListener("DOMContentLoaded", () => {
  indicatorElement.innerHTML = "N/A";
  playerCounterElement.innerHTML = "0";
  playersListElement.innerHTML = "";
  
  playerDetailsElement.classList.add("hidden");
  offlineMessageElement.classList.add("hidden");

  updateStatus();
  setInterval(updateStatus, 10000);
});

function updateStatus() {
  fetch("https://api.mcstatus.io/v2/status/java/crestfall.cc")
    .then((response) => response.json())
    .then((data) => {
      const status = data.online && !data.version.name_raw.includes("Velocity") ? "online" : "offline"; 

      indicatorElement.classList.remove("online", "offline");
      indicatorElement.classList.add(status);

      switch (status) {
        case "online": {
          indicatorElement.innerHTML = "Online";
          playerCounterElement.innerHTML = `${data.players.online}/${data.players.max}`;
          playersListElement.innerHTML = data.players.list.length > 0 ?
            data.players.list.map(player => `<li><img class="emoji transparent pixels drop-shadow" height="24" src="https://mineskin.eu/helm/${player.name_clean}/24.png" title="${player.name_raw}'s head" width="24"> ${player.name_raw}</li>`).join("") :
            `<li>No players online.</li>`;
          playerDetailsElement.classList.remove("hidden");
          offlineMessageElement.classList.add("hidden");
          break;
        } case "offline": {
          indicatorElement.innerHTML = "Offline";
          playerCounterElement.innerHTML = "0";
          playersListElement.innerHTML = "";
          playerDetailsElement.classList.add("hidden");
          offlineMessageElement.classList.remove("hidden");
          break;
        } 
      }
    })
    .catch((error) => {
      console.error("Error fetching mcserv data:", error);
      indicatorElement.innerHTML = "N/A";
      playerCounterElement.innerHTML = "0";
      playersListElement.innerHTML = "";
      
      playerDetailsElement.classList.add("hidden");
      
    });
}
