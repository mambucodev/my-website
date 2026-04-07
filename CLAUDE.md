# mambuco.dev

## Overview

Personal website and project hub for [mambuco.dev](https://mambuco.dev), built with **Zola** (Rust-based static site generator) and the **Ametrine** theme (git submodule from Codeberg). No Node.js, no package.json — Zola handles everything.

## Stack

- **Zola** v0.22.0 — static site generator
- **Tera** — template engine (Jinja2-like)
- **SCSS** — styling, compiled natively by Zola
- **Ametrine** — theme (git submodule, do not edit directly)
- **Vanilla JS** — minimal client-side scripts, no frameworks

## Architecture

Static site — no server-side runtime. Content is Markdown with TOML front-matter. Styling is SCSS with CSS custom properties from the theme's design token system.

### Directory Structure

- `content/` — Markdown pages. `_index.md` = section, `index.md` = page. Blog posts are co-located directories (`blog/YYYY-MM-DD-slug/index.md` + assets).
- `templates/` — Site-level template overrides. `base.html` extends `ametrine/templates/base.html`.
- `sass/` — Site-level SCSS. Per-page styles in subdirectories (e.g., `sass/about/style.scss`). Theme styles in `themes/ametrine/sass/`.
- `static/` — Served as-is. Favicon, badges, avatar, JS files.
- `themes/ametrine/` — Git submodule. Override via site-level templates/sass, never edit directly.
- `config.toml` — Single source of truth for site metadata, nav links, footer, analytics, accent colors, extra CSS/JS, and taxonomies.

### Key Pages

- **About** — personal info, stat cards, music shelf, game shelf, badge board
- **Portfolio** — project cards with tech tags
- **Socials** — Discord presence (Lanyard API), social link cards
- **Blog** — posts with tags taxonomy
- **Crestfall** — Minecraft server page with live status (mcstatus.io API), sub-pages for rules and mods

### Styling

SCSS only. The theme provides design tokens via CSS custom properties (`--bg-color`, `--accent-color`, `--rounded-corner`, `--edge-highlight`, etc.). Per-page stylesheets are registered in page front-matter under `[extra] styles`. Global extra stylesheets are in `config.toml` under `[extra] styles`.

### Client-side JS

- **Lanyard API** — Discord presence on socials page and nav icon
- **mcstatus.io API** — Minecraft server status on crestfall page
- **Quicklink** — link prefetching/prerendering on hover

## Development

```bash
# Serve locally with live reload (default: http://127.0.0.1:1111)
zola serve

# Production build (output to public/)
zola build

# Check for broken links and other issues
zola check
```

Container build (uses Podman, not Docker):
```bash
podman build -t my-website .
```

## Conventions

- SCSS only for styling — no Tailwind, no CSS-in-JS
- Theme overrides go in site-level `sass/` and `templates/`, never in `themes/ametrine/`
- Per-page styles follow the pattern `sass/<page>/style.scss`, loaded via `[extra] styles` in front-matter
- Shortcodes from theme: `emoji`, `image`, `alert`, `crt`, `icon`, `mastodon`, `youtube`, `vimeo`, `audio`, `video`
- Site adds custom shortcodes: `badges`, `music_shelf`, `game_shelf`
- Icons use the `{{ icon(name="...") }}` shortcode (Phosphor icons via the theme)

## Key Decisions

- **No build tooling beyond Zola** — SCSS compilation, minification, and feeds are all handled by Zola natively
- **Theme as submodule** — allows upstream updates without forking; all customisation is via overrides
- **Dockerfile** is a two-stage build: Zola compiles, then `static-web-server` serves `public/`
- **Crestfall sub-pages** (rules, mods) load `crestfall/style.css` via their own front-matter since sub-pages don't inherit parent styles

### Theme Update

```bash
git submodule update --remote themes/ametrine
```

## Tone

This website is personal but serious — it's a hub for all projects and passions. Content should be clean and professional, not overly casual.

## Maintenance

- Update this file after every large-scale code change (new modules, refactors, architectural shifts). Do not update it for small fixes or style changes.
