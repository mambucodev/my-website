// --- Now Playing (Last.fm) ---
var LASTFM_USER = "mambuco";
var card = document.getElementById("now-playing-card");
var LASTFM_API_KEY = card ? card.getAttribute("data-lastfm-key") : null;

// --- Marquee scroll for overflowing text ---
function setupMarquee(el) {
  var container = el.parentElement;
  if (!container) return;

  // Invalidate any previous cycle via generation counter
  container._mGen = (container._mGen || 0) + 1;
  var gen = container._mGen;

  // Reset state
  container.classList.remove("is-overflowing", "is-scrolling");
  el.style.transition = "none";
  el.style.transform = "";

  requestAnimationFrame(function () {
    if (container._mGen !== gen) return;

    var overflow = el.scrollWidth - container.clientWidth;
    if (overflow <= 2) return;

    container.classList.add("is-overflowing");
    var duration = overflow / 30; // 30 px/s
    var pause = 3000; // ms

    var returnDuration = duration / 2; // scroll back at 2x speed

    function cycle() {
      if (container._mGen !== gen) return;

      // Begin scrolling left — show left fade
      container.classList.add("is-scrolling");
      el.style.transition = "transform " + duration + "s linear";
      el.style.transform = "translateX(-" + overflow + "px)";

      setTimeout(function () {
        if (container._mGen !== gen) return;

        // Scroll back to start smoothly
        el.style.transition = "transform " + returnDuration + "s ease-out";
        el.style.transform = "";

        setTimeout(function () {
          if (container._mGen !== gen) return;

          // Return done — hide left fade
          container.classList.remove("is-scrolling");

          // Pause before next cycle
          setTimeout(function () {
            if (container._mGen !== gen) return;
            cycle();
          }, pause);
        }, returnDuration * 1000);
      }, duration * 1000 + pause);
    }

    // Initial delay before first scroll
    setTimeout(function () {
      if (container._mGen !== gen) return;
      cycle();
    }, pause);
  });
}

function extractColors(img) {
  var sw = Math.floor(img.width / 3);

  var colorCanvas = document.createElement("canvas");
  var colorCtx = colorCanvas.getContext("2d");
  colorCanvas.width = 1;
  colorCanvas.height = 1;
  colorCtx.drawImage(img, 0, 0, sw, img.height, 0, 0, 1, 1);
  var px = colorCtx.getImageData(0, 0, 1, 1).data;

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

  var blurCanvas = document.createElement("canvas");
  var blurCtx = blurCanvas.getContext("2d");
  blurCanvas.width = 32;
  blurCanvas.height = 32;
  blurCtx.drawImage(img, 0, 0, sw, img.height, 0, 0, 32, 32);

  return {
    color: "rgb(" + px[0] + "," + px[1] + "," + px[2] + ")",
    accent: "hsl(" + Math.round(h * 360) + "," + Math.round(Math.min(s * 100, 70)) + "%,75%)",
    blurnail: "url('" + blurCanvas.toDataURL("image/jpeg", 0.5) + "')"
  };
}

function timeAgo(uts) {
  var seconds = Math.floor(Date.now() / 1000) - uts;
  if (seconds < 60) return "just now";
  var minutes = Math.floor(seconds / 60);
  if (minutes < 60) return minutes + " min ago";
  var hours = Math.floor(minutes / 60);
  if (hours < 24) return hours + (hours === 1 ? " hour ago" : " hours ago");
  var days = Math.floor(hours / 24);
  return days + (days === 1 ? " day ago" : " days ago");
}

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

        // Build status text
        var newStatus;
        if (isPlaying) {
          newStatus = "Now Playing";
        } else {
          var uts = track.date && track.date.uts;
          newStatus = "Last Played";
          if (uts) newStatus += " · " + timeAgo(parseInt(uts, 10));
        }

        var trackId = name + "|" + artist;

        // Same track — just refresh the relative time
        if (trackId === lastTrackId) {
          var statusEl = document.getElementById("now-playing-status");
          if (statusEl) statusEl.textContent = newStatus;
          return;
        }
        lastTrackId = trackId;

        var trackEl = document.getElementById("now-playing-track");
        var artistEl = document.getElementById("now-playing-artist");
        var coverEl = document.getElementById("now-playing-cover");
        var statusEl = document.getElementById("now-playing-status");

        function applyText() {
          if (trackEl) { trackEl.textContent = name; setupMarquee(trackEl); }
          if (artistEl) { artistEl.textContent = artist; setupMarquee(artistEl); }
          if (statusEl) statusEl.textContent = newStatus;
        }

        function applyColors(colors) {
          card.style.setProperty("--blurnail-color", colors.color);
          card.style.setProperty("--blurnail-accent", colors.accent);
          card.style.setProperty("--blurnail", colors.blurnail);
        }

        // --- First load: apply immediately, reveal on image load ---
        if (!card.classList.contains("is-loaded")) {
          applyText();
          if (coverEl && cover) coverEl.src = cover;

          if (card && cover) {
            var img = new Image();
            img.crossOrigin = "anonymous";
            img.onload = function () {
              applyColors(extractColors(img));
              card.classList.add("is-loaded");
            };
            img.onerror = function () {
              card.classList.add("is-loaded");
            };
            img.src = cover;
          } else {
            card.classList.add("is-loaded");
          }
        }
        // --- Song change: animated transition ---
        else if (cover) {
          card._transGen = (card._transGen || 0) + 1;
          var tGen = card._transGen;

          // Load new image first (don't change anything yet)
          var img = new Image();
          img.crossOrigin = "anonymous";
          img.onload = function () {
            if (card._transGen !== tGen) return;
            var colors = extractColors(img);

            // 1. Slide out text
            card.classList.add("is-transitioning");

            // 2. Cross-fade color wash (CSS transition handles it)
            card.style.setProperty("--blurnail-color", colors.color);
            card.style.setProperty("--blurnail-accent", colors.accent);

            // 3. Cross-fade cover via overlay
            if (coverEl) {
              var overlay = document.createElement("img");
              overlay.className = coverEl.className;
              overlay.alt = "Album cover";
              overlay.style.position = "absolute";
              overlay.style.inset = "0";
              overlay.style.opacity = "0";
              overlay.style.transition = "opacity 0.5s ease";
              overlay.src = cover;
              coverEl.parentElement.appendChild(overlay);
              requestAnimationFrame(function () {
                overlay.style.opacity = "1";
              });
            }

            // 4. Cross-fade blurnail (fade out → swap → fade in)
            card.classList.add("blurnail-fading");
            setTimeout(function () {
              if (card._transGen !== tGen) return;
              card.style.setProperty("--blurnail", colors.blurnail);
              card.classList.remove("blurnail-fading");
            }, 400);

            // 5. After text slides out: swap text + slide back in
            setTimeout(function () {
              if (card._transGen !== tGen) return;
              applyText();
              card.classList.remove("is-transitioning");

              // Clean up cover overlay
              if (coverEl) {
                coverEl.src = cover;
                var old = coverEl.parentElement.querySelectorAll("img:not(#now-playing-cover)");
                for (var j = 0; j < old.length; j++) old[j].parentElement.removeChild(old[j]);
              }
            }, 600);
          };
          img.onerror = function () {
            if (card._transGen !== tGen) return;
            applyText();
            if (coverEl) coverEl.src = cover;
          };
          img.src = cover;
        }
        // No cover — just update text
        else {
          applyText();
        }
      })
      .catch(function () {
        // Silently fail — card keeps showing fallback album
      });
  }

  fetchNowPlaying();
  setInterval(fetchNowPlaying, 15000);

  // Re-check marquee on resize (layout may change overflow)
  var resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      var t = document.getElementById("now-playing-track");
      var a = document.getElementById("now-playing-artist");
      if (t) setupMarquee(t);
      if (a) setupMarquee(a);
    }, 300);
  });
}
