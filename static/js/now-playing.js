// --- Now Playing (Last.fm) ---
var LASTFM_USER = "mambuco";
var card = document.getElementById("now-playing-card");
var LASTFM_API_KEY = card ? card.getAttribute("data-lastfm-key") : null;

if (LASTFM_API_KEY) {
  var lastTrackId = null;

  function fetchNowPlaying() {
    var url =
      "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks" +
      "&user=" + LASTFM_USER +
      "&api_key=" + LASTFM_API_KEY +
      "&format=json&limit=1";

    fetch(url)
      .then(function (res) { return res.json(); })
      .then(function (data) {
        var tracks = data.recenttracks && data.recenttracks.track;
        if (!tracks || !tracks.length) return;

        var track = tracks[0];
        var name = track.name || "";
        var artist = (track.artist && (track.artist["#text"] || track.artist.name)) || "";
        var images = track.image || [];
        var isPlaying = track["@attr"] && track["@attr"].nowplaying === "true";

        // Get cover images: small for blurnail bg, largest for artwork
        var cover = "";
        var blurnail = "";
        for (var i = 0; i < images.length; i++) {
          if (images[i].size === "small" && images[i]["#text"]) blurnail = images[i]["#text"];
          if (images[i].size === "medium" && images[i]["#text"]) cover = images[i]["#text"];
          if (images[i].size === "large" && images[i]["#text"]) cover = images[i]["#text"];
        }

        // Deduplicate updates
        var trackId = name + "|" + artist;
        if (trackId === lastTrackId) return;
        lastTrackId = trackId;

        var trackEl = document.getElementById("now-playing-track");
        var artistEl = document.getElementById("now-playing-artist");
        var coverEl = document.getElementById("now-playing-cover");
        var statusEl = document.getElementById("now-playing-status");

        if (trackEl) trackEl.textContent = name;
        if (artistEl) artistEl.textContent = artist;
        if (coverEl && cover) coverEl.src = cover;
        if (statusEl) statusEl.textContent = isPlaying ? "Now Playing" : "Last Played";
        if (card && (blurnail || cover)) {
          card.style.setProperty("--blurnail", "url('" + (blurnail || cover) + "')");
        }
        card.classList.add("is-loaded");
      })
      .catch(function () {
        // Silently fail — card keeps showing fallback album
      });
  }

  fetchNowPlaying();
  setInterval(fetchNowPlaying, 15000);
}
