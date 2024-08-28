import { hapoelPlayers, maccabiPlayers } from './players.js';

function getPlayerData(team, playerName) {
    if (team === 'hapoel') {
        return hapoelPlayers.find(player => player.name === playerName);
    } else if (team === 'maccabi') {
        return maccabiPlayers.find(player => player.name === playerName);
    }
    return null;
}

export function generatePlayerHtml(team, playerName) {
    const playerInfo = getPlayerData(team, playerName);

    if (!playerInfo) return '';

    return `
        <p class="${team === 'hapoel' ? 'descriptionHapoel' : 'descriptionMaccabi'}">
            <strong>${playerInfo.name.charAt(0).toUpperCase() + playerInfo.name.slice(1)}</strong><br>
            <span class="rating">Rating: ${playerInfo.rating}</span><br>
            ${playerInfo.hoverText}
        </p>
        <div class="logos">
            <img class="playerHover" src="${playerInfo.additionalImg}">
            <img class="${team === 'hapoel' ? 'hapoelLogo' : 'maccabiLogo'}" src="images/${team}_icon.png">
        </div>
    `;
}