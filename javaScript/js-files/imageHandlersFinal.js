import {
    countHapoel,
    countMaccabi,
    incrementHapoel,
    incrementMaccabi,
    incrementCurrentHTA, 
    decrementCurrentHTA, 
    incrementCurrentMTA, 
    decrementCurrentMTA,
    getWon, 
} from './config.js';
import { selectPlayerToFight,
    removeFromFight,
    removePlayer } from './buttonsInformationMethods.js';
import { generatePlayerHtml } from './playerHtml.js'; 
    export function toggleImagePosition(image, originalContainerId, targetContainerId, team) {
        const originalContainer = document.getElementById(originalContainerId);
        const targetContainer = document.getElementById(targetContainerId);
        const result = document.getElementById('result');
        const imageContainer = image.parentElement;
    
        if (imageContainer.parentElement === originalContainer) {
            if (targetContainer.childElementCount === 0) {
                targetContainer.appendChild(imageContainer);
                if (team === 'hapoel') {
                    incrementCurrentHTA();
                    result.innerHTML = 'You chose a player from Hapoel to fight'; 
                } else if (team === 'maccabi') {
                    incrementCurrentMTA();
                    result.innerHTML = 'You chose a player from Maccabi to fight'; 
                }
                const buttonContainer = imageContainer.querySelector('.button-container');
                buttonContainer.classList.add('selected');
    
                const selectButton = buttonContainer.querySelector(`#selectButton-${image.id}`);
                if (selectButton) {
                    buttonContainer.removeChild(selectButton.parentElement);
                    const returnButtonDiv = document.createElement('div');
                    returnButtonDiv.id = `returnFromFightDiv-${image.id}`;
                    returnButtonDiv.className = 'button-div';
    
                    const returnButton = document.createElement('button');
                    returnButton.id = `returnFromFightButton-${image.id}`;
                    returnButton.className = 'addedbuttons';
    
                    const returnImg = document.createElement('img');
                    returnImg.src = 'images/return.png';
                    returnImg.className = team === 'maccabi' ? 'return-maccabi-class button-image' : 'return-hapoel-class button-image';
    
                    returnButton.appendChild(returnImg);
                    returnButton.addEventListener('click', () => removeFromFight(image.id, team));
                    returnButtonDiv.appendChild(returnButton);
    
                    buttonContainer.appendChild(returnButtonDiv);
                }
            }
        } else {
            originalContainer.appendChild(imageContainer);
            if (team === 'hapoel') {
                decrementCurrentHTA();
                result.innerHTML = 'You chose to remove the current Hapoel fighter'; 
            } else if (team === 'maccabi') {
                decrementCurrentMTA();
                result.innerHTML = 'You chose to remove the current Maccabi fighter'; 
            }
            const buttonContainer = imageContainer.querySelector('.button-container');
            buttonContainer.classList.remove('selected');
    
            const returnButton = buttonContainer.querySelector(`#returnFromFightButton-${image.id}`);
            if (returnButton) {
                buttonContainer.removeChild(returnButton.parentElement);
                const selectButtonDiv = document.createElement('div');
                selectButtonDiv.id = `selectPlayerDiv-${image.id}`;
                selectButtonDiv.className = 'button-div';
    
                const selectButton = document.createElement('button');
                selectButton.id = `selectButton-${image.id}`;
                selectButton.className = 'addedbuttons';
    
                const selectImg = document.createElement('img');
                selectImg.src = 'images/swordtofight2.jpg';
                selectImg.className = 'select-player-class button-image';
    
                selectButton.appendChild(selectImg);
                selectButton.addEventListener('click', () => selectPlayerToFight(image.id, team));
                selectButtonDiv.appendChild(selectButton);
    
                buttonContainer.appendChild(selectButtonDiv);
            }
        }
        setTimeout(() => {
            result.innerHTML = ''; 
        }, 5000);

        document.getElementById('stats').classList.add('hidden');
        document.getElementById('stats').classList.remove('block');
    }


    export function addImage(team, playersArray, countVar, originalContainerId, targetContainerId, toggleFunction) {
        const container = document.getElementById(originalContainerId);
        const result = document.getElementById('result');
    
        if ((countHapoel >= 4 && team === 'hapoel') || (countMaccabi >= 4 && team === 'maccabi')) {
            result.innerHTML = "CAN'T ADD MORE THAN 4 PLAYERS TO A TEAM";
            setTimeout(() => {
                result.innerHTML = ''; 
            }, 5000);
            return; 
        } else if (getWon()) {
            result.innerHTML = "CAN'T ADD MORE PLAYERS, BATTLE IS OVER";
            setTimeout(() => {
                result.innerHTML = ''; 
            }, 5000);
            return; 
        }
    
        const uniqueId = `${team}-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
        const imgElement = document.createElement('img');
        const player = playersArray[Math.floor(Math.random() * playersArray.length)];
        imgElement.src = player.img;
        imgElement.alt = player.rating;
        imgElement.id = uniqueId;
        imgElement.width = 200;
        imgElement.height = 180;
        imgElement.classList.add('img-hover'); 
    
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
        if (team === 'hapoel') {
            buttonContainer.classList.add('red-button-container');
            buttonContainer.classList.add('right-of-player');
        } else if (team === 'maccabi') {
            buttonContainer.classList.add('yellow-button-container');
            buttonContainer.classList.add('left-of-player');
            imgElement.classList.add('maccabi-player'); 
        }
    
        const createButtonWithDiv = (divId, buttonId, imgSrc, clickHandler, imgClass = '') => {
            const buttonDiv = document.createElement('div');
            buttonDiv.id = divId; 
            buttonDiv.className = 'button-div';
            const button = document.createElement('button');
            button.id = buttonId;
            button.className = 'addedbuttons';
            const img = document.createElement('img');
            img.src = imgSrc;
            if (imgClass) {
                imgClass.split(' ').forEach(cls => img.classList.add(cls));
            }
            button.appendChild(img);
            button.addEventListener('click', clickHandler);
            buttonDiv.appendChild(button);
    
            return buttonDiv;
        };
    
        const buttons = [
            { divId: `selectPlayerDiv-${uniqueId}`, buttonId: `selectButton-${uniqueId}`, imgSrc: 'images/swordtofight2.jpg', clickHandler: () => selectPlayerToFight(uniqueId, team), imgClass: 'select-player-class button-image' },
            { divId: `removePlayerDiv-${uniqueId}`, buttonId: `removeButton-${uniqueId}`, imgSrc: 'images/trash.png', clickHandler: () => removePlayer(uniqueId), imgClass: 'bin-class button-image' }
        ];
    
        buttons.forEach(button => {
            buttonContainer.appendChild(createButtonWithDiv(button.divId, button.buttonId, button.imgSrc, button.clickHandler, button.imgClass));
        });
    
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');
        imageContainer.id = `container-${uniqueId}`;
        imageContainer.appendChild(imgElement);
        imageContainer.appendChild(buttonContainer);
        container.appendChild(imageContainer);
    
        if (team === 'hapoel') {
            incrementHapoel();
            result.innerHTML = `${countHapoel} out of 4 players have been added. Click on the player for further info.`;
        } else if (team === 'maccabi') {
            incrementMaccabi();
            result.innerHTML = `${countMaccabi} out of 4 players have been added. Click on the player for further info.`;  
        }
    
        setTimeout(() => {
            result.innerHTML = ''; 
        }, 5000);
    
        imgElement.addEventListener('click', function () {
            toggleFunction(this, originalContainerId, targetContainerId, team);
            document.getElementById('stats').classList.add('hidden');
        });
    
        imgElement.addEventListener('mouseover', () => {
            const htmlString = generatePlayerHtml(team, player.name);
            const info = document.getElementById('stats');
            if (info) {
                info.innerHTML = htmlString;
                info.classList.add('block');
            }
        });
    
        imgElement.addEventListener('mouseout', () => {
            const info = document.getElementById('stats');
            if (info) {
                info.classList.remove('block');
                info.classList.add('hidden');
            }
        });
    }