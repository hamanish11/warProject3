
import { addImage } from './imageHandlersFinal.js';
import { toggleImagePosition } from './imageHandlersFinal.js';
import {
    currentHTA,
    currentMTA,
    getWon
} from './config.js';
import { startFireworks } from './fireworks.js';
import { prepareForFight} from './fight.js';
import { hapoelPlayers, maccabiPlayers } from './players.js';






document.addEventListener('DOMContentLoaded', function() {
    const fightButton = document.getElementById('fight');
    fightButton.addEventListener('click', prepareForFight);
  
  });





document.addEventListener('DOMContentLoaded', function() {
    if (getWon()) {
        startFireworks();
    }
    else{
        console.log('nope');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('hapoel').addEventListener('click', function() {
        addImage('hapoel', hapoelPlayers, currentHTA, 'solidersHTA', 'currHapoel', toggleImagePosition);
    });

    document.getElementById('maccabi').addEventListener('click', function() {
        addImage('maccabi', maccabiPlayers, currentMTA, 'solidersMTA', 'currMaccabi', toggleImagePosition);
    });
});


