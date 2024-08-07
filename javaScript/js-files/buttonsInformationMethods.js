import {
    getCountHapoel,
    getCountMaccabi,
    getCurrentHTA,
    getCurrentMTA,
    setCountHapoel,
    setCountMaccabi,
    setCurrentHTA,
    setCurrentMTA,
} from './config.js';
import { toggleImagePosition } from './imageHandlersFinal.js';

 export function removePlayer(imageId) {
    let image = document.getElementById(imageId);
    let teamHTA = imageId.slice(0,6);
    let teamMTA = imageId.slice(0,7);
    let result = document.getElementById('result');
    result.style.color = 'white'; 
    let info;

    if (image) {
        if(teamHTA === 'hapoel'){
            info = document.getElementById('hapoelPlayerInformation');
        }
        else if(teamMTA === 'maccabi'){
            info = document.getElementById('maccabiPlayerInformation');
        }
        image.remove();

        if (info) {
            info.style.display = 'none';
        }
        result.style.color = 'green'; 
        result.innerHTML = 'player deleted succcesfully'; 
        setTimeout(() => {
            result.innerHTML = ''; 
        }, 5000); 
        
        if (imageId.includes('hapoel')) {
            setCountHapoel(getCountHapoel()-1);
        } else if (imageId.includes('maccabi')) {
            setCountMaccabi(getCountMaccabi()-1);
        }
    }
    result.style.color = 'white'; 

}

export function selectPlayerToFight(imageId, team) {
    const image = document.getElementById(imageId);

    const originalContainerId = (team === 'hapoel') ? 'solidersHTA' : 'solidersMTA';
    const targetContainerId = (team === 'hapoel') ? 'currHapoel' : 'currMaccabi';

    const targetContainer = document.getElementById(targetContainerId);

    if (targetContainer.childElementCount > 0) {
        const result = document.getElementById('result');
        result.style.color = 'red'; 
        result.innerHTML = 'CAN\'T ADD PLAYER: THERE\'S ALREADY A PLAYER IN THE FIGHT SPOT';

        setTimeout(() => {
            result.innerHTML = ''; 
        }, 5000);

        return; 
    }

    if (image.parentElement.id === targetContainerId) {
        const result = document.getElementById('result');
        result.style.color = 'red'; 
        result.innerHTML = 'CAN\'T SELECT PLAYER TO FIGHT: PLAYER IS ALREADY IN THE FIGHT POSITION';
        setTimeout(() => {
            result.innerHTML = ''; 
        }, 5000);

        return; 
    }

    result.style.color = 'white'; 
    toggleImagePosition(image, originalContainerId, targetContainerId, team);

}

export function removeFromFight(playerId, team) {
    let result = document.getElementById('result');
    result.style.color = 'white'; 
    const playerImage = document.getElementById(playerId);
    if (!playerImage) return;

    let originalContainerId, targetContainerId;
    if (team === 'hapoel') {
        originalContainerId = 'solidersHTA';
        targetContainerId = 'currHapoel';
    } else if (team === 'maccabi') {
        originalContainerId = 'solidersMTA';
        targetContainerId = 'currMaccabi';
    }

    if (playerImage.parentElement.id !== targetContainerId) {
        result.style.color = 'red'; 
        result.innerHTML = 'Error: Player is not currently in the fight spot for the selected team.';
        result.style.color = 'white'; 
        setTimeout(() => {
            result.innerHTML = ''; 
        }, 5000);

        return; 
    }

    document.getElementById(originalContainerId).appendChild(playerImage);

    if (team === 'hapoel') {
        setCurrentHTA(getCurrentHTA()-1);
        result.innerHTML = 'Player removed from fight spot and returned to Hapoel soldiers.';
    } else if (team === 'maccabi') {
        setCurrentMTA(getCurrentMTA()-1);
        result.innerHTML = 'Player removed from fight spot and returned to Maccabi soldiers.';
    }

    setTimeout(() => {
        result.innerHTML = ''; 
    }, 5000);
}


