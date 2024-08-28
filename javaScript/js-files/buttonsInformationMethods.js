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





export function removePlayer(imageId) {
    const imageContainer = document.getElementById(`container-${imageId}`);
    const result = document.getElementById('result');
    result.classList.remove('error', 'success');
    result.classList.add('success');
    
    let info;
    if (imageContainer) {
        const teamHTA = imageId.slice(0, 6);
        const teamMTA = imageId.slice(0, 7);

        if (teamHTA === 'hapoel') {
            info = document.getElementById('hapoelPlayerInformation');
        } else if (teamMTA === 'maccabi') {
            info = document.getElementById('maccabiPlayerInformation');
        }
        imageContainer.remove();
        if (info) {
            info.classList.add('hidden');
        }
        result.innerHTML = 'Player deleted successfully'; 
        setTimeout(() => {
            result.innerHTML = ''; 
        }, 5000); 
        
        if (imageId.includes('hapoel')) {
            setCountHapoel(getCountHapoel() - 1);
        } else if (imageId.includes('maccabi')) {
            setCountMaccabi(getCountMaccabi() - 1);
        }
    }
    result.classList.remove('error', 'success');
}


const createSelectFromFight = () => {
    let doesHappen = false;

    return function selectPlayerToFight(imageId, team) {
        const result = document.getElementById('result');
        const imageContainer = document.getElementById(`container-${imageId}`);
        const targetContainerId = (team === 'hapoel') ? 'currHapoel' : 'currMaccabi';
        const targetContainer = document.getElementById(targetContainerId);

        if (doesHappen) {
            doesHappen = false;
            return;
        }

        if (targetContainer.childElementCount > 0 || imageContainer.parentElement.id === targetContainerId) {
            result.innerHTML = "CAN'T ADD PLAYER: PLAYER IS ALREADY IN THE FIGHT POSITION";
            result.classList.remove('success');
            result.classList.add('error');
            doesHappen = true;
            return; 
        }

        targetContainer.appendChild(imageContainer);
        doesHappen = true;
        result.classList.remove('error');
        result.classList.add('success');
        if (team === 'hapoel') {
            setCurrentHTA(getCurrentHTA() + 1);
            result.innerHTML = 'Player added to fight';
        } else if (team === 'maccabi') {
            setCurrentMTA(getCurrentMTA() + 1);
            result.innerHTML = 'Player added to fight';
        }
        const buttonContainer = imageContainer.querySelector('.button-container');
        buttonContainer.classList.add('selected');
        
        const selectButtonDiv = buttonContainer.querySelector(`#selectPlayerDiv-${imageId}`);
        if (selectButtonDiv) {
            buttonContainer.removeChild(selectButtonDiv);
            const returnButtonDiv = document.createElement('div');
            returnButtonDiv.id = `returnFromFightDiv-${imageId}`;
            returnButtonDiv.className = 'button-div';

            const returnButton = document.createElement('button');
            returnButton.id = `returnFromFightButton-${imageId}`;
            returnButton.className = 'addedbuttons';

            const returnImg = document.createElement('img');
            returnImg.src = 'images/return.png';
            returnImg.className = team === 'maccabi' ? 'return-maccabi-class button-image' : 'return-hapoel-class button-image';

            returnButton.appendChild(returnImg);
            returnButton.addEventListener('click', () => removeFromFight(imageId, team));
            returnButtonDiv.appendChild(returnButton);

            buttonContainer.appendChild(returnButtonDiv);
        }

        setTimeout(() => {
            result.innerHTML = ''; 
        }, 5000);
    };
};

export const selectPlayerToFight = createSelectFromFight();


const createRemoveFromFight = () => {
    let doesHappen = false;

    return function removeFromFight(playerId, team) {
        const result = document.getElementById('result');
        const imageContainer = document.getElementById(`container-${playerId}`);
        const originalContainerId = (team === 'hapoel') ? 'solidersHTA' : 'solidersMTA';
        const targetContainerId = (team === 'hapoel') ? 'currHapoel' : 'currMaccabi';

        if (doesHappen) {
            doesHappen = false;
            return;
        }

        if (!imageContainer || imageContainer.parentElement.id !== targetContainerId) {
            result.innerHTML = 'Error: Player is not in the fight spot.';
            result.classList.remove('success');
            result.classList.add('error');
            doesHappen = true;
            return;
        }

        document.getElementById(originalContainerId).appendChild(imageContainer);

        if (team === 'hapoel') {
            setCurrentHTA(getCurrentHTA() - 1);
            result.innerHTML = 'Player removed from fight spot and returned to soldiers.';
        } else if (team === 'maccabi') {
            setCurrentMTA(getCurrentMTA() - 1);
            result.innerHTML = 'Player removed from fight spot and returned to soldiers.';
        }
        const buttonContainer = imageContainer.querySelector('.button-container');
        buttonContainer.classList.remove('selected');
        
        const returnButtonDiv = buttonContainer.querySelector(`#returnFromFightDiv-${playerId}`);
        if (returnButtonDiv) {
            buttonContainer.removeChild(returnButtonDiv);
            const selectButtonDiv = document.createElement('div');
            selectButtonDiv.id = `selectPlayerDiv-${playerId}`;
            selectButtonDiv.className = 'button-div';

            const selectButton = document.createElement('button');
            selectButton.id = `selectButton-${playerId}`;
            selectButton.className = 'addedbuttons';

            const selectImg = document.createElement('img');
            selectImg.src = 'images/swordtofight2.jpg';
            selectImg.className = 'select-player-class button-image';

            selectButton.appendChild(selectImg);
            selectButton.addEventListener('click', () => selectPlayerToFight(playerId, team));
            selectButtonDiv.appendChild(selectButton);

            buttonContainer.appendChild(selectButtonDiv);
        }

        result.classList.remove('error');
        result.classList.add('success');
        doesHappen = true; 

        setTimeout(() => {
            result.innerHTML = ''; 
        }, 5000);
    };
};

export const removeFromFight = createRemoveFromFight();

document.addEventListener('DOMContentLoaded', function() {
    var closeButton = document.querySelector('.closeButton');
    var introductionDiv = document.querySelector('.introduction');

    if (closeButton && introductionDiv) {
        closeButton.addEventListener('click', function() {
            introductionDiv.classList.add('hidden');
        });
    } else {
        console.error('Required elements not found.');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const introDiv = document.querySelector('.introduction');
    const closeButton = document.querySelector('.closeButton');

    function handleClickOutside(event) {
        if (!introDiv.contains(event.target) && event.target !== closeButton) {
            introDiv.classList.add('hidden');
        }
    }

    document.addEventListener('click', handleClickOutside);

    closeButton.addEventListener('click', () => {
        introDiv.classList.add('hidden');
    });
});

