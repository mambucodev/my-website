+++
title = "Crestfall"
description = "A vanilla-like minecraft server."
[extra]
styles = ["crestfall/style.css"]
scripts = ["crestfall/status.js"]
+++

Hi, and welcome to **Crestfall**! {{ emoji(name="neofox_aww") }}

<div class="card-grid big">

<div class="card">
<strong class="title">Server Status</strong>
<div id="online-card" class="card-content">

The server is currently <span id="online-indicator"><noscript>NO:JS</noscript></span>.

<noscript>

Seems like you have JavaScript disabled, and that's great!

If you had scripts enabled, you would have seen an **Online/Offline** indicator and a **players list** instead of this paragraph, in this spot.

</noscript>

<div id="offline-message" class="hidden">

We're sorry, but the server is currently unreachable. It's probably either rebooting, under maintenance, or just not working at the moment.

If the server is **Offline** for too long, feel free to [contact me](@/socials/index.md) and let me know.

</div>

<div id="player-details" class="hidden fancy-list">
<strong>Online Players: <code id="player-counter">N/A</code></strong>
<ul id="players-list"></ul>
</div>

</div>
</div>


<div class="card">
<strong class="title">What's Crestfall?</strong>
<div class="card-content">

It's a **Minecraft** vanilla-like server.

The server runs on a **Fabric** instance, with **server-side mods** only. This means that anybody can join, both modded and vanilla clients!

If you want to take a better look at the server, read the [features](#features) list.

</div>
</div>

</div>

Here's a few links you may want to look out about Crestfall:

<div class="buttons start">
<a class="suggested" href="https://map.crestfall.cc/">Map →</a>
<a href="rules/">Rules →</a>
<a href="mods/">Mods →</a>
<a href="https://matrix.to/#/#crestfall:envs.net/">
<img alt="Pixel art Matrix icon" title="Matrix" class="emoji transparent pixels drop-shadow" src="/socials/icons/matrix.png" />
Chat →
</a>
</div>

## How to Join

The server version is `1.21.7`, but you can join from older versions too thanks to **ViaFabricPlus**.

The IP is `crestfall.cc`, but there's a whitelist. If you want to get added, simply [ask me](@/socials/index.md) or a friend that's on the server to add you.

{% alert(warning=true) %}

**The server has `online-mode` disabled.** But don't worry, there's a login system. Once you join, kindly `/register` and choose a password to your liking. Nobody will be able to join using your name without knowing it.

<small>People with a paid minecraft account will probably not be prompted to insert that password ever again after registration.</small>

{% end %}

---

## Features

being a **Fabric** server, Crestfall obviously has many different features. Some of them being:

### World Generation

We added many terrain generation mods to the server, such as [Terralith](https://modrinth.com/datapack/terralith/), [Tectonic](https://modrinth.com/datapack/tectonic/), and more.

Obviously we added structure mods too, so you will be able to find **Towers**, **Dungeons**, and many other types of buildings across the server.

### Falling Trees

We added the [FallingTree](https://modrinth.com/mod/fallingtree/) mod. Every time you'll start chopping down a tree, it will fall down immediately, and its leaves too.

We think it's a nice addition to the server, as a lot of players don't usually enjoy chopping down hundreds of thousands of trees every time they need to build something. If you think this is a bad idea, please [let me know](@/socials/index.md) and I'll consider removing this mod.

### Distant Horizons

Honestly my favorite! If you install the [Distant Horizons](https://modrinth.com/mod/distanthorizons/) mod in your client, you'll be able to see land much further than your render distance limit, and at a very low cost.

### Voice Chat

The server provided [Plasmo Voice](https://modrinth.com/plugin/plasmo-voice/) compatibility for those who want to talk using their voice, rather than typing in the chat. Just install the mod in your client, and **boom**. {{ emoji(name="neofox_floof_explode") }}

The chat is usually monitored by us, and logged into the server's console. But the **voice chat is not**. That's why I'd like you to [contact me](@/socials/index.md) in case another player uses it to harass you.

### Backups

Differential backups are taken **constantly**. If you get griefed, or something worth of reverting a backup happens, [tell me] as soon as it happens. I'll hardly ever revert too old backups, to avoid other users from being affected drastically.

### Others

There's tons of features and mods not listed here. You can just take at the [mods page](@/crestfall/mods/index.md) if you're curious about what else is in here.
