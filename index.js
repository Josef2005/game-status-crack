const games = require('./db-games.json');

function formattedGameText(game) {
    return `id: ${game.id}
Title: ${game.title}
Release Year: ${game.release_year}
Genere: ${game.info.genre.join(', ')}
Description: ${game.info.description}
Release Price: ${game.release_price.amount} ${game.release_price.currency}
PC requirements:
Minimum requirements: CPU: ${game.pc_requirements.minimum.cpu}; RAM: ${game.pc_requirements.minimum.ram}; GPU: ${game.pc_requirements.minimum.gpu}
Recommended requirements: CPU: ${game.pc_requirements.recommended.cpu}; RAM: ${game.pc_requirements.recommended.ram}; GPU: ${game.pc_requirements.recommended.gpu}
Reviews: Source: Rating: ${game.reviews.source}; Percentage: ${game.reviews.rating_percentage}; Count: ${game.reviews.count} 
Playtime: Main story: ${game.playtime.main_story}; Completionist: ${game.playtime.completionist}
Piracy status: Cracked: ${game.piracy_status.cracked}; DRM: ${game.piracy_status.drm.join(', ')}; Cracked by: ${game.piracy_status.cracked_by}`;

}

function filterGame(condition) {
    const foundGames = games.filter(condition);

    if (foundGames.length === 0) {
        return 'No game found';
    }

    const formattedGames = foundGames.map(game => formattedGameText(game));

    return formattedGames.join('\n\n');
}

function findGame(condition) {
    const foundGame = games.find(condition);
    if (foundGame) {
        return formattedGameText(foundGame);
    } else {
        return 'No game found';
    }
}

exports.getGameById = function (gameId) {
    return findGame(game => game.id === gameId);
}

exports.getGameByTitle = function (gameTitle) {
    return findGame(game => game.title === gameTitle);
}

exports.getGames = function () {
    const allGames = games.map(game => formattedGameText(game));
    return allGames.join('\n\n');
}

exports.getGamesByGenre = function (genreGame) {
    return filterGame(game => game.info.genre.some(genre => genre.toLowerCase() === genreGame.toLowerCase().trim()));
}

exports.getCrackedGames = function () {
    return filterGame(game => game.piracy_status.cracked === true);
}

exports.getUncrackedGames = function () {
    return filterGame(game => game.piracy_status.cracked === false);
}

exports.getGameByReleaseYear = function (year) {
    return filterGame(game => game.release_year === parseInt(year));
}

exports.getGameByPriceRange = function (min, max) {
    return filterGame(game => game.release_price.amount >= min && game.release_price.amount <= max);
}

exports.getByDRM = function (drmType) {
    return filterGame(game => game.piracy_status.drm.some(drm => drm.toLowerCase() === drmType.toLowerCase().trim()));
}

exports.findGamesCrackedBy = function (crackerGroup) {
    return filterGame(game => {
        const cracker = game.piracy_status.cracked_by;
        return cracker && cracker.toLowerCase() === crackerGroup.toLowerCase();
    });
}









