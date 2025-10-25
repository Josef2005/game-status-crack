# Game Status DB

A simple, dependency-free JavaScript library for getting detailed information and status about video games from a local
database.

This library provides quick access to data such as genre, description, system requirements, release price, piracy
status (including DRM and cracking group), and more, without the need for external API calls.

## Features

- **Local Database:** All data is included with the package. No external API keys or network requests are needed. It
  works offline.
- **Rich Data:** Provides comprehensive game data, from system requirements to piracy status.
- **Simple API:** An intuitive set of functions to search and filter the game database.
- **Zero Dependencies:** Written in pure JavaScript, making it lightweight and compatible with any Node.js project.

## Database

The library uses a local, static database of games. You can find a complete list of all included game titles and their
corresponding IDs in the following file:

➡️ **[list-games.txt](list-games.txt)**

This file is useful for finding the correct `gameId` to use with functions like `getGameById()`.

## Installation

Install the package using npm:

```bash
npm install game-status-crack
```

## Usage

Import the library into your project and start using the exported functions.

```javascript
// Using CommonJS (require)
const gameDB = require('game-status-crack');

// --- Example 1: Get a single game by its ID ---
const cyberpunk = gameDB.getGameById("cyberpunk-2077");
console.log(cyberpunk);

// --- Example 2: Get all games of a specific genre ---
const rpgGames = gameDB.getGamesByGenre("Action RPG");
console.log(rpgGames);

// --- Example 3: Find all games cracked by a specific group ---
// Search is case-insensitive
const empressCracks = gameDB.findGamesCrackedBy("empress");
console.log(empressCracks);
```

### Example Output

A call to `getGameById("cyberpunk-2077")` will return a formatted string like this:

```
id: cyberpunk-2077
Title: Cyberpunk 2077
Release Year: 2020
Genre: Action RPG, Open World
Description: An open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification.
Release Price: 59.99 EUR
PC requirements:
Minimum requirements: CPU: Core i7-6700; RAM: 12 GB; GPU: GTX 1060 6GB
Recommended requirements: CPU: Core i7-12700; RAM: 16 GB; GPU: RTX 2060 SUPER
Reviews: Source: Steam; Percentage: 83; Count: 568450
Playtime: Main story: 25 hours; Completionist: 105 hours
Piracy status: Cracked: true; DRM: Steam; Cracked by: CODEX
```

---

## API Reference

All functions return a formatted string or a list of formatted strings.

### Single-Game Lookups

* `getGameById(gameId)`: Finds a single game by its unique ID (e.g., `"cyberpunk-2077"`).
* `getGameByTitle(gameTitle)`: Finds the first game that matches the exact title (case-insensitive).

### Multi-Game Lookups (Filtering)

* `getGames()`: Returns a formatted list of all games in the database.
* `getGamesByGenre(genre)`: Returns all games that include the specified genre.
* `getCrackedGames()`: Returns all games with a piracy status of `cracked: true`.
* `getUncrackedGames()`: Returns all games with a piracy status of `cracked: false`.
* `getGameByReleaseYear(year)`: Returns all games released in a specific year.
* `getGameByPriceRange(min, max)`: Returns all games with a release price between `min` and `max`.
* `getByDRM(drmType)`: Returns all games that use a specific DRM protection.
* `findGamesCrackedBy(crackerGroup)`: Returns all games cracked by a specific group.

---

## Contributing

This is an open-source project. Contributions to expand the database or improve the functions are welcome. Please feel
free to open an issue or submit a pull request on [GitHub](https://github.com/Josef2005/game-status-crack.git).
