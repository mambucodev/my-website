+++
title = "Crestfall's Mods"
description = "A full list of the mods installed on Crestfall, with links to their Modrinth pages."
[extra]
styles = ["crestfall/style.css"]
+++

All mods are **server-side only** — you don't need to install anything to play. They're all sourced from [Modrinth](https://modrinth.com/).

{% alert(icon="info", title="Why no Geyser or ViaVersion?", color="blue") %}
Crestfall sits behind a **Velocity proxy** that also fronts other servers I occasionally host. **Geyser** (for Bedrock clients) and the **ViaVersion + ViaBackwards + ViaRewind** stack (for older client versions) live on the proxy, not on the backend — so they won't show up in the list below.
{% end %}

{% alert(icon="lightbulb", title="Got a mod suggestion?", color="green") %}
Drop it in the [Matrix room](https://matrix.to/#/#crestfall:mambuco.dev/) or [contact me directly](@/socials/index.md) — I'm always open to new ideas!
{% end %}

### World Generation

<div class="mod-grid">
{{ mod_item(name="Terralith", icon="mountains", slug="terralith", jar="Terralith_1.21.11_v2.6.1_Fabric.jar") }}
{{ mod_item(name="Tectonic", icon="mountains", slug="tectonic", jar="tectonic-3.0.19-fabric-1.21.11.jar") }}
{{ mod_item(name="Incendium", icon="fire", slug="incendium", jar="Incendium_26.1_v5.4.12.jar") }}
{{ mod_item(name="Nullscape", icon="planet", slug="nullscape", jar="Nullscape_1.21.x_v1.2.17.jar") }}
{{ mod_item(name="Geophilic", icon="flower", slug="geophilic", jar="Geophilic v3.4.6.mod.jar") }}
{{ mod_item(name="Explorify", icon="compass", slug="explorify", jar="Explorify v1.6.4 f15-88.mod.jar") }}
{{ mod_item(name="Structory", icon="house-line", slug="structory", jar="Structory_26.1_v1.3.16.jar") }}
{{ mod_item(name="Structory: Towers", icon="building", slug="structory-towers", jar="Structory_Towers_26.1_v1.0.16.jar") }}
{{ mod_item(name="Wabi-Sabi Structures", icon="buildings", slug="wabi-sabi-structures", jar="Wabi-Sabi Structures 3.0.5-1.21.11.jar") }}
</div>

### Gameplay

<div class="mod-grid">
{{ mod_item(name="FallingTree", icon="tree", slug="fallingtree", jar="FallingTree-1.21.11-1.21.11.3.jar") }}
{{ mod_item(name="Simple Voice Chat", icon="microphone", slug="simple-voice-chat", jar="voicechat-fabric-1.21.11-2.6.15.jar") }}
{{ mod_item(name="Axes Are Weapons", icon="sword", slug="axes-are-weapons", jar="AxesAreWeapons-1.9.5-fabric-1.21.11.jar") }}
{{ mod_item(name="RightClickHarvest", icon="plant", slug="rightclickharvest", jar="rightclickharvest-fabric-4.6.1+1.21.11.jar") }}
{{ mod_item(name="Healing Campfire", icon="campfire", slug="healing-campfire", jar="healingcampfire-1.21.11-6.2.jar") }}
{{ mod_item(name="Unloaded Activity", icon="hourglass", slug="unloaded-activity", jar="unloadedactivity-v0.6.10+1.21.11.jar") }}
{{ mod_item(name="Despawning Eggs Hatch", icon="egg", slug="despawning-eggs-hatch", jar="despawningeggshatch-1.21.11-4.5.jar") }}
{{ mod_item(name="Dynamic Lights", icon="lightbulb", slug="dynamic-lights", jar="dynamiclights-v1.9.2-mc1.17-26.1.1-mod.jar") }}
{{ mod_item(name="NetherPortalFix", icon="door", slug="netherportalfix", jar="netherportalfix-fabric-1.21.11-21.11.2.jar") }}
{{ mod_item(name="Distant Horizons", icon="eye", slug="distanthorizons", jar="DistantHorizons-2.4.5-b-1.21.11-fabric-neoforge.jar", note="Requires the client mod to use.") }}
</div>

### Performance

<div class="mod-grid">
{{ mod_item(name="Lithium", icon="lightning", slug="lithium", jar="lithium-fabric-0.21.4+mc1.21.11.jar") }}
{{ mod_item(name="C2ME", icon="lightning", slug="c2me-fabric", jar="c2me-fabric-mc1.21.11-0.3.6.0.0.jar") }}
{{ mod_item(name="Krypton", icon="wifi-high", slug="krypton", jar="krypton-0.2.10.jar") }}
{{ mod_item(name="FerriteCore", icon="memory", slug="ferrite-core", jar="ferritecore-8.2.0-fabric.jar") }}
{{ mod_item(name="Very Many Players", icon="users-three", slug="vmp-fabric", jar="vmp-fabric-mc1.21.11-0.2.0+beta.7.227-all.jar") }}
{{ mod_item(name="ScalableLux", icon="sun", slug="scalablelux", jar="ScalableLux-0.1.6+fabric.c25518a-all.jar") }}
{{ mod_item(name="spark", icon="chart-line", slug="spark", jar="spark-1.10.170-fabric.jar") }}
{{ mod_item(name="Debugify", icon="bug", slug="debugify", jar="debugify-1.21.11+1.0.jar") }}
{{ mod_item(name="Let Me Despawn", icon="ghost", slug="lmd", jar="LetMeDespawn-1.21.11-x-fabric-1.6.2.jar") }}
</div>

### Administration

<div class="mod-grid">
{{ mod_item(name="BlueMap", icon="map-trifold", slug="bluemap", jar="bluemap-5.16-fabric.jar") }}
{{ mod_item(name="BlueMap Sign Markers", icon="map-pin", slug="bluemap-sign-markers", jar="bluemapsignmarkers-1.21.11-0.15.0.68.jar") }}
{{ mod_item(name="Chunky", icon="grid-four", slug="chunky", jar="Chunky-Fabric-1.4.55.jar") }}
{{ mod_item(name="Advanced Backups", icon="cloud-arrow-up", slug="advanced-backups", jar="AdvancedBackups-fabric-1.21.11-4.0.jar") }}
{{ mod_item(name="EasyAuth", icon="lock", slug="easyauth", jar="easyauth-mc1.21.11-3.4.3.jar") }}
{{ mod_item(name="EasyWhitelist", icon="list-checks", slug="easywhitelist", jar="easywhitelist-1.1.3.jar") }}
{{ mod_item(name="Essential Commands", icon="terminal", slug="essential-commands", jar="essential_commands-0.38.6-mc1.21.11.jar") }}
{{ mod_item(name="LuckPerms", icon="shield-check", slug="luckperms", jar="LuckPerms-Fabric-5.5.21.jar") }}
{{ mod_item(name="Floodgate", icon="device-mobile", slug="floodgate", jar="Floodgate-Fabric-2.2.6-b55.jar") }}
{{ mod_item(name="SkinsRestorer", icon="paint-brush", slug="skinsrestorer", jar="SkinsRestorer-Mod-Fabric-15.11.0.jar") }}
{{ mod_item(name="No Chat Reports", icon="chat-circle", slug="no-chat-reports", jar="NoChatReports-FABRIC-1.21.11-v2.18.0.jar") }}
{{ mod_item(name="CrashExploitFixer", icon="shield-warning", slug="crashexploitfixer", jar="crashexploitfixer-fabric-1.2.0+1.21.5.jar") }}
{{ mod_item(name="Vanilla Permissions", icon="key", slug="vanilla-permissions", jar="vanilla-permissions-0.3.3+1.21.11.jar") }}
{{ mod_item(name="FabricProxy-Lite", icon="plugs-connected", slug="fabricproxy-lite", jar="FabricProxy-Lite-2.11.0.jar") }}
{{ mod_item(name="InvView", icon="backpack", slug="invview", jar="InvView-1.4.19-1.21.11+.jar") }}
{{ mod_item(name="Ledger", icon="notebook", slug="ledger", jar="ledger-1.3.19.jar") }}
{{ mod_item(name="LuckPerms Placeholders", icon="puzzle-piece", slug="luckperms-placeholders", jar="LuckPerms-Fabric-Placeholders.jar") }}
{{ mod_item(name="Styled Chat", icon="chat-text", slug="styled-chat", jar="styled-chat-2.11.0+1.21.11.jar") }}
{{ mod_item(name="Styled Player List", icon="list-bullets", slug="styled-player-list", jar="styledplayerlist-3.10.0+1.21.11.jar") }}
</div>

### Libraries

<div class="mod-grid">
{{ mod_item(name="Fabric API", icon="package", slug="fabric-api", jar="fabric-api-0.141.3+1.21.11.jar") }}
{{ mod_item(name="Cloth Config API", icon="gear", slug="cloth-config", jar="cloth-config-21.11.153-fabric.jar") }}
{{ mod_item(name="Architectury API", icon="package", slug="architectury-api", jar="architectury-19.0.1-fabric.jar") }}
{{ mod_item(name="Balm", icon="package", slug="balm", jar="balm-fabric-1.21.11-21.11.8.jar") }}
{{ mod_item(name="Collective", icon="package", slug="collective", jar="collective-1.21.11-8.17.jar") }}
{{ mod_item(name="JamLib", icon="package", slug="jamlib", jar="jamlib-fabric-1.3.6+1.21.11.jar") }}
{{ mod_item(name="Bad Packets", icon="package", slug="badpackets", jar="badpackets-fabric-0.11.2.jar") }}
{{ mod_item(name="Lithostitched", icon="package", slug="lithostitched", jar="lithostitched-1.6.1-fabric-1.21.11.jar") }}
{{ mod_item(name="Almanac", icon="package", slug="almanac", jar="Almanac-1.21.11-x-fabric-1.6.2.jar") }}
{{ mod_item(name="Fabric Language Kotlin", icon="package", slug="fabric-language-kotlin", jar="fabric-language-kotlin-1.13.10+kotlin.2.3.20.jar") }}
</div>

<div class="buttons">
<a href="/crestfall/">Go Back</a>
</div>
