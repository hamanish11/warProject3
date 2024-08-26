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
    
    export function addImage(team, playersArray, countVar, originalContainerId, targetContainerId, toggleFunction) {
        const container = document.getElementById(originalContainerId);
        const result = document.getElementById('result');
    
        if ((countHapoel >= 4 && team === 'hapoel') || (countMaccabi >= 4 && team === 'maccabi')) {
            result.innerHTML = "CAN'T ADD MORE THAN 4 PLAYERS TO A TEAM";
            setTimeout(() => {
                result.innerHTML = ''; 
            }, 5000);
            return; 
        }
        else if (getWon()) {
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
            document.getElementById('stats').style.display = 'none';
        });
    
        imgElement.addEventListener('mouseover', () => {
            let htmlString = '';
            let info;
    
            if (team === 'hapoel') {
                info = document.getElementById('stats');
                switch (player.name) {
                    case 'ginat':
                        htmlString = `
                            <p class="descriptionHapoel">
                                <strong>Tomar Ginat</strong><br>
                                <span class="rating">Rating: 88</span><br>
                                Tomer Ginat (born November 7, 1994) is an Israeli professional basketball player for Hapoel Tel Aviv of the Israeli Basketball Premier League. 
                                Standing at <em>6 ft 8 in (2.03 m)</em>, he primarily plays at the power forward position. 
                                Ginat was named the <span class="highlight">Israeli League Rising Star</span> in 2017.
                            </p>
                            <div class="logos">
                                <img class="playerHover" src="images/ginat3 info.png">
                                <img class="hapoelLogo" src="images/hapoel icon.png">
                            </div>
                            `;
                        break;
                    case 'timor':
                        htmlString = `
                            <p class="descriptionHapoel">
                                <strong>Bar Timor</strong><br>
                                <span class="rating">Rating: 83</span><br>
                                Bar Timor (born April 22, 1990) is an Israeli professional basketball player for Hapoel Tel Aviv of the Israeli Basketball Premier League. 
                                Standing at <em>6 ft 2 in (1.88 m)</em>, he primarily plays at the point guard position. 
                                Timor was named the <span class="highlight">Israeli League Defensive Player of the Year in 2018.</span>
                            </p>
                            <div class="logos">
                                <img class="playerHover" src="images/timor2.png">
                                <img class="hapoelLogo" src="images/hapoel icon.png">
                            </div>
                            `;
                        break;
                    case 'munford':
                        htmlString = `
                            <p class="descriptionHapoel">
                                <strong>Xavier Munford</strong><br>
                                <span class="rating">Rating: 87</span><br>
                                Xavier Munford (born September 1, 1992) is an American professional basketball player for Hapoel Tel Aviv of the Israeli Basketball Premier League. 
                                Standing at <em>6 ft 3 in (1.91 m)</em>, he primarily plays at the guard position. 
                                Munford was named the <span class="highlight">Israeli League Most Improved Player</span> in 2021.
                            </p>
                            <div class="logos">
                                <img class="playerHover" src="images/munford info 2.png">
                                <img class="hapoelLogo" src="images/hapoel icon.png">
                            </div>
                            `;
                        break;
            }
            
            } else if (team === 'maccabi') {
                info = document.getElementById('stats');
                switch (player.name) {
                    case 'dibartolomeo':
                        htmlString = `
                            <p class="descriptionMaccabi">
                                <strong>John DiBartolomeo</strong><br>
                                <span class="rating">Rating: 82</span><br>
                                John DiBartolomeo (born March 8, 1990) is an American professional basketball player for Maccabi Tel Aviv of the Israeli Basketball Premier League. 
                                Standing at <em>5 ft 11 in (1.81 m)</em>, he primarily plays at the guard position. 
                                DiBartolomeo was named the <span class="highlight">Israeli League Champion</span> in 2022.
                            </p>
                            <div class="logos">
                                <img class="playerHover" src="images/dibartolomeo info 2.png">
                                <img class="maccabiLogo" src="images/maccabi info 2.png">
                            </div>
                            `;
                        break;
                    case 'blatt':
                        htmlString = `
                            <p class="descriptionMaccabi">
                                <strong>Tamir Blatt</strong><br>
                                <span class="rating">Rating: 85</span><br>
                                Tamir Blatt (born March 12, 1999) is an Israeli professional basketball player for Maccabi Tel Aviv of the Israeli Basketball Premier League. 
                                Standing at <em>6 ft 0 in (1.83 m)</em>, he primarily plays at the point guard position. 
                                Blatt was named the <span class="highlight">Israeli League Best Young Player</span> in 2020.
                            </p>
                            <div class="logos">
                                <img class="playerHover" src="images/blatt info 2.png">
                                <img class="maccabiLogo" src="images/maccabi info 2.png">
                            </div>
                            `;
                        break;
                    case 'rivero':
                        htmlString = `
                            <p class="descriptionMaccabi">
                                <strong>Jasiel Rivero</strong><br>
                                <span class="rating">Rating: 86</span><br>
                                Jasiel Rivero (born June 6, 1993) is a Cuban professional basketball player for Maccabi Tel Aviv of the Israeli Basketball Premier League. 
                                Standing at <em>6 ft 8 in (2.03 m)</em>, he primarily plays at the power forward position. 
                                Rivero was named the <span class="highlight">Israeli League Import of the Year</span> in 2022.
                            </p>
                            <div class="logos">
                                <img class="playerHover" src="images/rivero info 2.png">
                                <img class="maccabiLogo" src="images/maccabi info 2.png">
                            </div>
                            `;
                        break;
                }
            }
            if (info) {
                info.innerHTML = htmlString;
                info.style.display = 'block';
            }
        });
    
        imgElement.addEventListener('mouseout', () => {
            const info = document.getElementById('stats');
            info.style.display = 'none';
        });
    }
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

        document.getElementById('stats').style.display = 'none';
    }