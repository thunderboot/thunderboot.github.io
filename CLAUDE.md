# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a GitHub Pages static website for Thunderboot Studios, a mobile game publisher. The site serves as a landing page showcasing various mobile games with links to App Store and Google Play.

**Domain**: thunderboot.com (via CNAME)

## Architecture

### Directory Structure

The repository follows a **game-per-directory** pattern:
- Root `index.html`: Main landing page with Thunderboot logo and orbiting app circles
- Each game has its own directory (e.g., `findle/`, `minesweeper/`, `steviesays/`)
- Shared assets in `graphics/` directory (App Store/Google Play badges, logos, backgrounds)

### Main Page Structure

The root `index.html` features:
- "THUNDERBOOT" header anchored to top
- Center logo (`graphics/tb_logo.png`) with app icons orbiting around it
- App circles are dynamically positioned in a ring with equal spacing
- Floating animation makes circles drift gently
- Footer with auto-updating copyright year

**App Configuration**: Apps shown on the main page are defined in the `apps` array in the JavaScript:
```javascript
const apps = [
    { name: 'App Name', folder: 'foldername', icon: 'path/to/icon.png' },
    // ...
];
```
Adding or removing entries automatically adjusts circle positions.

### Game Directory Patterns

Each game directory typically contains:
- `index.html`: Landing page for the game with app store links
- `privacypolicy.html`: Privacy policy (required for mobile app stores)
- `termsofservice.html`: Terms of service (optional, some games have it)
- `graphics/`: Game-specific graphics and icons
- `script.js` / `style.css`: Custom styling/interaction (used by some games like `findle/`, `wordswiperultimate/`)

**Note**: Some older games have their own favicon files (android-chrome-*.png, apple-touch-icon.png, etc.) while newer ones share the root favicon.

### Key Files

- `app-ads.txt`: Ad network authorization file for Unity Gaming Services and other ad networks
- `otherapps/otherapps.json`: JSON feed listing featured apps with metadata (name, icon URL, store links)
- `graphics/`: Shared assets
  - `appstore.png`, `googleplay.png`: Store badge images (used in game subpages)
  - `tb_logo.png`, `tb_logo_small.png`: ThunderBoot branding (logo used on main page)

## Game Website Patterns

### Standard Game Landing Page

Most games follow this HTML structure:
1. Logo/header graphic centered vertically
2. Footer with App Store and Google Play badge links
3. Copyright footer with auto-updating year (`<script>document.getElementById("year").innerHTML = new Date().getFullYear();</script>`)

**Example**: `minesweeper/index.html`, `colorpopmansion/index.html`

### Interactive Landing Pages

Some games (e.g., `findle/`, `wordswiperultimate/`) have animated or interactive elements:
- Separate `style.css` for custom styling
- `script.js` for animations or interactions

## Common Tasks

### Adding a New Game

1. Create a new directory: `mkdir <gamename>`
2. Add required files:
   - `index.html`: Game landing page with store links
   - `privacypolicy.html`: Privacy policy (see existing games for template)
   - `graphics/`: Directory for game-specific images (include an icon for the main page)
3. Update root `index.html`: Add entry to the `apps` array in the JavaScript section:
   ```javascript
   { name: 'Game Name', folder: 'gamefolder', icon: 'gamefolder/graphics/icon.png' }
   ```
4. Optionally update `otherapps/otherapps.json` if this is a featured app

### Updating App Store Links

Game store links follow this pattern:
- **iOS**: `https://apps.apple.com/app/<game-name>/id<app-id>`
- **Android**: `https://play.google.com/store/apps/details?id=com.thunderboot.<gamename>`

### Privacy Policy Updates

Privacy policies follow a standard template referencing:
- Google (advertising)
- Unity (in-app purchases via Unity Gaming Services)

Standard contact email: `privacy@thunderboot.com`

### Renaming Games

When renaming a game (e.g., "Word Blocks Ultimate" to "Findle"):
1. Rename directory
2. Update the `apps` array entry in root `index.html`
3. Update all references in the game's `index.html`
4. Update store links
5. Update privacy policy
6. Update `otherapps.json` if applicable

## Git Workflow

- **Main branch**: `master`
- Repository is deployed via GitHub Pages
- Changes pushed to master are automatically deployed

## Technical Details

- No build process - this is a pure static HTML/CSS/JS site
- No package manager or dependencies
- Files are served directly by GitHub Pages
- Main page uses `requestAnimationFrame` for smooth floating animation
- Responsive design:
  - Main page uses `clamp()`, `min(vw, vh)`, and media queries for portrait/landscape
  - Game subpages use `@media only screen and (max-width: 600px)` patterns

## Ad Integration

Unity Gaming Services is the primary ad/IAP provider (see `app-ads.txt` line 95):
```
unity.com, 1725701, DIRECT, 96cabb5fbdde37a7
```

All other entries are RESELLER relationships for programmatic ad networks.
