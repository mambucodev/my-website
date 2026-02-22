// --- Music Shelf "Now Playing" Highlight ---
var shelfCard = document.querySelector(".music-shelf-card");
var LASTFM_KEY = shelfCard ? shelfCard.getAttribute("data-lastfm-key") : null;
var LASTFM_USER = shelfCard ? shelfCard.getAttribute("data-lastfm-user") : null;

if (LASTFM_KEY && LASTFM_USER) {
  var lastHighlight = null;

  function highlightNowPlaying() {
    var url =
      "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks" +
      "&user=" + LASTFM_USER +
      "&api_key=" + LASTFM_KEY +
      "&format=json&limit=1";

    fetch(url)
      .then(function (res) { return res.json(); })
      .then(function (data) {
        var tracks = data.recenttracks && data.recenttracks.track;
        if (!tracks || !tracks.length) return;

        var track = tracks[0];
        var isPlaying = track["@attr"] && track["@attr"].nowplaying === "true";

        // Clear previous highlights
        var highlighted = shelfCard.querySelectorAll(".album-tile.now-playing");
        for (var i = 0; i < highlighted.length; i++) {
          highlighted[i].classList.remove("now-playing");
        }

        if (!isPlaying) {
          lastHighlight = null;
          return;
        }

        var album = (track.album && track.album["#text"]) || "";
        var artist = (track.artist && (track.artist["#text"] || track.artist.name)) || "";

        if (!album) return;

        var highlightId = album + "|" + artist;
        lastHighlight = highlightId;

        var tiles = shelfCard.querySelectorAll(".album-tile[data-album]");
        for (var k = 0; k < tiles.length; k++) {
          if (tiles[k].getAttribute("data-album").toLowerCase() === album.toLowerCase() &&
              tiles[k].getAttribute("data-artist").toLowerCase() === artist.toLowerCase()) {
            tiles[k].classList.add("now-playing");
          }
        }
      })
      .catch(function () {});
  }

  highlightNowPlaying();
  setInterval(highlightNowPlaying, 15000);
}
