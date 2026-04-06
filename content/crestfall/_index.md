+++
title = "Crestfall"
description = "A vanilla-like Minecraft server running Fabric with server-side mods only. Custom world generation, voice chat, Bedrock support, and more."
[extra]
styles = ["crestfall/style.css"]
scripts = ["crestfall/status.js"]
+++

Welcome to **Crestfall** — a vanilla-like Minecraft server with server-side mods only.

<div class="card-grid">

<div class="card status-card">
<strong class="card-title">{{ icon(name="cell-signal-full") }} Server Status</strong>
<div id="online-card" class="card-body">

The server is currently <span id="online-indicator"><noscript>NO:JS</noscript></span>.

<noscript>

JavaScript is disabled. With scripts enabled, this section would show a live **Online/Offline** indicator and a **players list**.

</noscript>

<div id="offline-message" class="hidden">

The server is currently unreachable. It may be rebooting or under maintenance.

If it stays **Offline** for an extended period, please [let me know](@/socials/index.md).

</div>

<div id="player-details" class="hidden fancy-list">
<strong>Online Players: <code id="player-counter">N/A</code></strong>
<ul id="players-list"></ul>
</div>

</div>
</div>

<div class="card info-card">
<strong class="card-title">{{ icon(name="cube") }} What's Crestfall?</strong>
<div class="card-body">

A **Minecraft** server running **Fabric** with server-side mods only — no client mods required. Both modded and vanilla clients can join.

See the [features](#features) section for details on what's installed.

</div>
</div>

</div>

<div class="buttons start big">
<a class="suggested" href="https://map.crestfall.cc/">{{ icon(name="map-trifold") }} Map</a>
<a href="/crestfall/rules/">{{ icon(name="scales") }} Rules</a>
<a href="/crestfall/mods/">{{ icon(name="puzzle-piece") }} Mods</a>
<a href="https://matrix.to/#/#crestfall:mambuco.dev/">
<img alt="Pixel art Matrix icon" title="Matrix" class="emoji transparent pixels drop-shadow" src="/socials/icons/matrix.png" />
Room
</a>
</div>

## How to Join

The server version is `1.21.7`. Both **Java** and **Bedrock** clients can join thanks to **Floodgate**.

<div class="server-ip card">
<span class="server-ip-icon">{{ icon(name="game-controller") }}</span>
<div class="server-ip-body">
<span class="server-ip-label">Server Address</span>
<code class="server-ip-value">crestfall.cc</code>
</div>
</div>

The server is whitelisted. To get added, [contact me](@/socials/index.md) or ask a friend who's already on the server.

{% alert(icon="info", title="About online-mode", color="blue") %}
The server has `online-mode` disabled to support both Bedrock players and those without a paid Java account. When you first join, run `/register` and pick a password — this locks your username so nobody else can use it. Paid Java accounts will likely only need to do this once.
{% end %}

---

## Features

Being a **Fabric** server, Crestfall has many different features:

<div class="feature-grid">

<div class="feature card">
<span class="feature-icon">{{ icon(name="mountains") }}</span>
<div class="feature-body">
<strong>Custom World Generation</strong>
<p>Overhauled terrain with <a href="https://modrinth.com/mod/terralith">Terralith</a>, <a href="https://modrinth.com/mod/tectonic">Tectonic</a>, and <a href="https://modrinth.com/mod/geophilic">Geophilic</a>. The Nether and End are also revamped thanks to <a href="https://modrinth.com/mod/incendium">Incendium</a> and <a href="https://modrinth.com/mod/nullscape">Nullscape</a>.</p>
</div>
</div>

<div class="feature card">
<span class="feature-icon">{{ icon(name="house-line") }}</span>
<div class="feature-body">
<strong>New Structures</strong>
<p>Discover ruins, towers, and dungeons scattered across the world thanks to <a href="https://modrinth.com/mod/structory">Structory</a>, <a href="https://modrinth.com/mod/explorify">Explorify</a>, and <a href="https://modrinth.com/mod/wabi-sabi-structures">Wabi-Sabi Structures</a>.</p>
</div>
</div>

<div class="feature card">
<span class="feature-icon">{{ icon(name="microphone") }}</span>
<div class="feature-body">
<strong>Voice Chat</strong>
<p>Talk to other players in-game with <a href="https://modrinth.com/mod/simple-voice-chat">Simple Voice Chat</a>. Just install the mod on your client. Note: voice chat is not logged — <a href="/socials/">contact me</a> if someone misbehaves.</p>
</div>
</div>

<div class="feature card">
<span class="feature-icon">{{ icon(name="tree") }}</span>
<div class="feature-body">
<strong>Falling Trees</strong>
<p>Chop the bottom of a tree and the whole thing comes down — leaves included. Powered by <a href="https://modrinth.com/mod/fallingtree">FallingTree</a>.</p>
</div>
</div>

<div class="feature card">
<span class="feature-icon">{{ icon(name="sword") }}</span>
<div class="feature-body">
<strong>Quality of Life</strong>
<p>Right-click harvesting, axes as weapons, inventory sorting, healing campfires, dynamic lights, nether portal fix, and more.</p>
</div>
</div>

<div class="feature card">
<span class="feature-icon">{{ icon(name="map-trifold") }}</span>
<div class="feature-body">
<strong>Live Map</strong>
<p>Explore the server in your browser with <a href="https://modrinth.com/mod/bluemap">BlueMap</a>. Place signs to mark locations on the map.</p>
</div>
</div>

<div class="feature card">
<span class="feature-icon">{{ icon(name="device-mobile") }}</span>
<div class="feature-body">
<strong>Bedrock Support</strong>
<p>Play from any platform — Java and Bedrock clients can both join thanks to <a href="https://geysermc.org/">Geyser</a>.</p>
</div>
</div>

<div class="feature card">
<span class="feature-icon">{{ icon(name="cloud-arrow-up") }}</span>
<div class="feature-body">
<strong>Constant Backups</strong>
<p>Differential backups are taken automatically. Got griefed or lost something? <a href="/socials/">Tell me</a> and I'll revert what's needed.</p>
</div>
</div>

</div>

For a complete list of installed mods, see the [mods page](@/crestfall/mods/index.md).
