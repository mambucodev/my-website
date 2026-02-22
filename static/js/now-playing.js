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

        // Get cover image: use the largest available for both artwork and blurnail
        var cover = "";
        for (var i = 0; i < images.length; i++) {
          if (images[i]["#text"]) cover = images[i]["#text"];
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

        // Extract dominant color + blurnail from left third of artwork
        if (card && cover) {
          var img = new Image();
          img.crossOrigin = "anonymous";
          img.onload = function () {
            var sw = Math.floor(img.width / 3);

            // Dominant color — left third scaled to 1x1
            var colorCanvas = document.createElement("canvas");
            var colorCtx = colorCanvas.getContext("2d");
            colorCanvas.width = 1;
            colorCanvas.height = 1;
            colorCtx.drawImage(img, 0, 0, sw, img.height, 0, 0, 1, 1);
            var px = colorCtx.getImageData(0, 0, 1, 1).data;
            card.style.setProperty("--blurnail-color", "rgb(" + px[0] + "," + px[1] + "," + px[2] + ")");

            // Brighter accent — convert to HSL, keep hue/sat, boost lightness
            var r = px[0] / 255, g = px[1] / 255, b = px[2] / 255;
            var max = Math.max(r, g, b), min = Math.min(r, g, b);
            var h = 0, s = 0, l = (max + min) / 2;
            if (max !== min) {
              var d = max - min;
              s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
              if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
              else if (max === g) h = ((b - r) / d + 2) / 6;
              else h = ((r - g) / d + 4) / 6;
            }
            card.style.setProperty("--blurnail-accent", "hsl(" + Math.round(h * 360) + "," + Math.round(Math.min(s * 100, 70)) + "%,75%)");

            // Blurnail — left third as a small image for the CSS blur
            var blurCanvas = document.createElement("canvas");
            var blurCtx = blurCanvas.getContext("2d");
            blurCanvas.width = 32;
            blurCanvas.height = 32;
            blurCtx.drawImage(img, 0, 0, sw, img.height, 0, 0, 32, 32);
            card.style.setProperty("--blurnail", "url('" + blurCanvas.toDataURL("image/jpeg", 0.5) + "')");

            card.classList.add("is-loaded");
          };
          img.onerror = function () {
            card.classList.add("is-loaded");
          };
          img.src = cover;
        } else {
          card.classList.add("is-loaded");
        }
      })
      .catch(function () {
        // Silently fail — card keeps showing fallback album
      });
  }

  fetchNowPlaying();
  setInterval(fetchNowPlaying, 15000);
}
