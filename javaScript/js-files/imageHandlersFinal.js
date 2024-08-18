
import {
    countHapoel,
    countMaccabi,
    incrementHapoel,
    incrementMaccabi,
    incrementCurrentHTA, 
    decrementCurrentHTA, 
    incrementCurrentMTA, 
    decrementCurrentMTA, 
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
    
        const uniqueId = `${team}-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
        const imgElement = document.createElement('img');
        const player = playersArray[Math.floor(Math.random() * playersArray.length)];
        imgElement.src = player.img;
        imgElement.alt = player.rating;
        imgElement.id = uniqueId; 
        imgElement.width = 200;
        imgElement.height = 180;
        imgElement.classList.add('img-hover'); 
    
        // Create the button container
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');


        if (team === 'hapoel') {
            buttonContainer.classList.add('red-button-container');
        } else if (team === 'maccabi') {
            buttonContainer.classList.add('yellow-button-container');
        }
    
        // Create and append buttons
        const createButton = (id, imgSrc, clickHandler) => {
            const button = document.createElement('button');
            button.id = id;
            const img = document.createElement('img');
            img.src = imgSrc;
            button.appendChild(img);
            button.addEventListener('click', clickHandler);
            return button;
        };
    
        buttonContainer.appendChild(createButton(`removeButton-${uniqueId}`, 'images/trash.png', () => removePlayer(uniqueId)));
        buttonContainer.appendChild(createButton(`selectButton-${uniqueId}`, 'images/boxing.png', () => selectPlayerToFight(uniqueId, team)));
        buttonContainer.appendChild(createButton(`removeFromFightButton-${uniqueId}`, 'images/return.png', () => removeFromFight(uniqueId, team)));
    
        // Create the container for image and buttons
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
                                        Standing at <em>6 ft 8 in (2.03 m)</em>, he primarily plays at the <strong>power forward</strong> position. 
                                        Ginat was named the <span class="highlight">Israeli League Rising Star</span> in 2017.
                                    </p>
                                    <div class="logos">
                                        <img class="playerHover" src="images/ginat info 2.png">
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
                                        Standing at <em>6 ft 2 in (1.88 m)</em>, he primarily plays at the <strong>point guard</strong> position. 
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
                                        Standing at <em>6 ft 3 in (1.91 m)</em>, he primarily plays at the <strong>guard</strong> position. 
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
                                        Standing at <em>6 ft 3 in (1.81 m)</em>, he primarily plays at the <strong>guard</strong> position. 
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
                                        Standing at <em>6 ft 0 in (1.83 m)</em>, he primarily plays at the <strong>point guard</strong> position. 
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
                                        Standing at <em>6 ft 8 in (2.03 m)</em>, he primarily plays at the <strong>power forward</strong> position. 
                                        Rivero was named the <span class="highlight">Israeli League Import of the Year</span> in 2022.
                                    </p>
                                    <div class="logos">
                                    <img class="playerHover" src="images/rivero info 2.png">
                                    <img class="ginat" src="images/maccabi info 2.png">
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
                    const info = document.getElementById('stats')
                    info.style.display = 'none'
                });
    }
    

    export function toggleImagePosition(image, originalContainerId, targetContainerId, team) {
        const originalContainer = document.getElementById(originalContainerId);
        const targetContainer = document.getElementById(targetContainerId);
        const result = document.getElementById('result');
    
        // Get the image container (parent of the image)
        const imageContainer = image.parentElement;
    
        if (imageContainer.parentElement === originalContainer) {
            // Move the entire image container to the target container
            if (targetContainer.childElementCount === 0) {
                targetContainer.appendChild(imageContainer);
                if (team === 'hapoel') {
                    incrementCurrentHTA();
                    result.innerHTML = 'You chose a player from Hapoel to fight'; 
                } else if (team === 'maccabi') {
                    incrementCurrentMTA();
                    result.innerHTML = 'You chose a player from Maccabi to fight'; 
                }
            }
        } else {
            // Move the entire image container back to the original container
            originalContainer.appendChild(imageContainer);
            if (team === 'hapoel') {
                decrementCurrentHTA();
                result.innerHTML = 'You chose to remove the current Hapoel fighter'; 
            } else if (team === 'maccabi') {
                decrementCurrentMTA();
                result.innerHTML = 'You chose to remove the current Maccabi fighter'; 
            }
        }
    
        setTimeout(() => {
            result.innerHTML = ''; 
        }, 5000);
    }

// export function addImage(team, playersArray, countVar, originalContainerId, targetContainerId, toggleFunction) {
//     const container = document.getElementById(originalContainerId);
//     const result = document.getElementById('result');

//     if ((countHapoel >= 4 && team === 'hapoel') || (countMaccabi >= 4 && team === 'maccabi')) {
//         result.innerHTML = "CAN'T ADD MORE THAN 4 PLAYERS TO A TEAM";
//         setTimeout(() => {
//             result.innerHTML = ''; 
//         }, 5000);
//         return; 
//     }

//     const uniqueId = `${team}-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
    

    
//     const imgElement = document.createElement('img');
//     const player = playersArray[Math.floor(Math.random() * playersArray.length)];
//     imgElement.src = player.img;
//     imgElement.alt = player.rating;
//     imgElement.id = uniqueId; 
//     imgElement.width = 200;
//     imgElement.height = 180;
//     imgElement.classList.add('img-hover'); 
//     container.appendChild(imgElement);

//     if (team === 'hapoel') {
//         incrementHapoel();
//         result.innerHTML = `${countHapoel} out of 4 players have been added. Click on the player for further info.`;
//     } else if (team === 'maccabi') {
//         incrementMaccabi();
//         result.innerHTML = `${countMaccabi} out of 4 players have been added. Click on the player for further info.`;  
//     }

//     setTimeout(() => {
//         result.innerHTML = ''; 
//     }, 5000);

//     imgElement.addEventListener('click', function () {
//         toggleFunction(this, originalContainerId, targetContainerId, team);
//     });

//     imgElement.addEventListener('mouseover', () => {
//         let htmlString = '';
//         let info;
//         let buttonsDiv;
//         let buttonsString = '';
//         let removeButtonId, selectButtonId, removeFromFightButtonId;

//         if (team === 'hapoel') {
//             info = document.getElementById('stats');
//             removeButtonId = `removeHapoelButton-${uniqueId}`;
//             selectButtonId = `selectHapoelButton-${uniqueId}`;
//             removeFromFightButtonId = `removeFromHapoelFightButton-${uniqueId}`;
//             buttonsDiv = document.getElementById('hapoelPlayerInformation');
//             switch (player.name) {
//                 case 'ginat':
//                     htmlString = `
//                         <p class="descriptionHapoel">
//                             <strong>Tomar Ginat</strong><br>
//                             <span class="rating">Rating: 88</span><br>
//                             Tomer Ginat (born November 7, 1994) is an Israeli professional basketball player for Hapoel Tel Aviv of the Israeli Basketball Premier League. 
//                             Standing at <em>6 ft 8 in (2.03 m)</em>, he primarily plays at the <strong>power forward</strong> position. 
//                             Ginat was named the <span class="highlight">Israeli League Rising Star</span> in 2017.
//                         </p>
//                             <img class="playerHover" src="images/ginat info 2.png">
//                             <img class="hapoelLogo" src="images/hapoel icon.png">
//                         `;
//                     buttonsString = `
//                         <button id="${removeButtonId}" class="addbutton red-button">
//                             <img class="trash" src="images/trash.png">
//                         </button>
//                         <button id="${selectButtonId}" class="addbutton red-button"> 
//                             <img class="boxing" src="images/boxing.png">
//                         </button>
//                         <button id="${removeFromFightButtonId}" class="addbutton red-button">
//                             <img class="return" src="images/return.png">
//                         </button>
//                     `;
//                     break;
//                 case 'timor':
//                     htmlString = `
//                         <p class="descriptionHapoel">
//                             <strong>Bar Timor</strong><br>
//                             <span class="rating">Rating: 83</span><br>
//                             Bar Timor (born April 22, 1990) is an Israeli professional basketball player for Hapoel Tel Aviv of the Israeli Basketball Premier League. 
//                             Standing at <em>6 ft 2 in (1.88 m)</em>, he primarily plays at the <strong>point guard</strong> position. 
//                             Timor was named the <span class="highlight">Israeli League Defensive Player of the Year in 2018.</span>
//                         </p>
//                             <img class="playerHover" src="images/timor info 2.png">
//                             <img class="hapoelLogo" src="images/hapoel icon.png">
//                         `;
//                     buttonsString = `    
//                         <button id="${removeButtonId}" class="addbutton red-button">
//                             <img class="trash" src="images/trash.png">
//                         </button>
//                         <button id="${selectButtonId}" class="addbutton red-button"> 
//                             <img class="boxing" src="images/boxing.png">
//                         </button>
//                         <button id="${removeFromFightButtonId}" class="addbutton red-button">
//                             <img class="return" src="images/return.png">
//                         </button>
//                     `;
//                     break;
//                 case 'munford':
//                     htmlString = `
//                         <p class="descriptionHapoel">
//                             <strong>Xavier Munford</strong><br>
//                             <span class="rating">Rating: 87</span><br>
//                             Xavier Munford (born September 1, 1992) is an American professional basketball player for Hapoel Tel Aviv of the Israeli Basketball Premier League. 
//                             Standing at <em>6 ft 3 in (1.91 m)</em>, he primarily plays at the <strong>guard</strong> position. 
//                             Munford was named the <span class="highlight">Israeli League Most Improved Player</span> in 2021.
//                         </p>
//                             <img class="playerHover" src="images/munford info 2.png">
//                             <img class="hapoelLogo" src="images/hapoel icon.png">
//                         `;
//                     buttonsString = `
//                         <button id="${removeButtonId}" class="addbutton red-button">
//                             <img class="trash" src="images/trash.png">
//                         </button>
//                         <button id="${selectButtonId}" class="addbutton red-button"> 
//                             <img class="boxing" src="images/boxing.png">
//                         </button>
//                         <button id="${removeFromFightButtonId}" class="addbutton red-button">
//                             <img class="return" src="images/return.png">
//                         </button>
//                     `;
//                     break;
//             }
//         } else if (team === 'maccabi') {
//             info = document.getElementById('stats');
//             removeButtonId = `removeMaccabiButton-${uniqueId}`;
//             selectButtonId = `selectMaccabiButton-${uniqueId}`;
//             removeFromFightButtonId = `removeFromMaccabiFightButton-${uniqueId}`;
//             buttonsDiv = document.getElementById('maccabiPlayerInformation');
//             switch (player.name) {
//                 case 'dibartolomeo':
//                     htmlString = `
//                         <p class="descriptionMaccabi">
//                             <strong>John DiBartolomeo</strong><br>
//                             <span class="rating">Rating: 82</span><br>
//                             John DiBartolomeo (born March 8, 1990) is an American professional basketball player for Maccabi Tel Aviv of the Israeli Basketball Premier League. 
//                             Standing at <em>6 ft 3 in (1.81 m)</em>, he primarily plays at the <strong>guard</strong> position. 
//                             DiBartolomeo was named the <span class="highlight">Israeli League Champion</span> in 2022.
//                         </p>
//                         <img class="playerHover" src="images/dibartolomeo info 2.png">
//                         <img class="maccabiLogo" src="images/maccabi info 2.png">
//                         `;
//                     buttonsString = `
//                         <button id="${removeButtonId}" class="addbutton yellow-button">
//                             <img class="trash" src="images/trash.png">
//                         </button>
//                         <button id="${selectButtonId}" class="addbutton yellow-button">
//                             <img class="boxing" src="images/boxing.png">
//                         </button>
//                         <button id="${removeFromFightButtonId}" class= "addbutton yellow-button"> 
//                             <img class="returnMaccabi" src="images/return.png">
//                         </button>
//                     `;
//                     break;
//                 case 'blatt':
//                     htmlString = `
//                         <p class="descriptionMaccabi">
//                             <strong>Tamir Blatt</strong><br>
//                             <span class="rating">Rating: 85</span><br>
//                             Tamir Blatt (born March 12, 1999) is an Israeli professional basketball player for Maccabi Tel Aviv of the Israeli Basketball Premier League. 
//                             Standing at <em>6 ft 0 in (1.83 m)</em>, he primarily plays at the <strong>point guard</strong> position. 
//                             Blatt was named the <span class="highlight">Israeli League Best Young Player</span> in 2020.
//                         </p>
//                         <img class="playerHover" src="images/blatt info 2.png">
//                         <img class="maccabiLogo" src="images/maccabi info 2.png">
//                         `;
//                     buttonsString = `
//                         <button id="${removeButtonId}" class="addbutton yellow-button">
//                             <img class="trash" src="images/trash.png">
//                         </button>
//                         <button id="${selectButtonId}" class="addbutton yellow-button"> 
//                             <img class="boxing" src="images/boxing.png">
//                         </button>
//                         <button id="${removeFromFightButtonId}" class="addbutton yellow-button">
//                             <img class="returnMaccabi" src="images/return.png">
//                         </button>
//                     `;
//                     break;
//                 case 'rivero':
//                     htmlString = `
//                         <p class="descriptionMaccabi">
//                             <strong>Jasiel Rivero</strong><br>
//                             <span class="rating">Rating: 86</span><br>
//                             Jasiel Rivero (born June 6, 1993) is a Cuban professional basketball player for Maccabi Tel Aviv of the Israeli Basketball Premier League. 
//                             Standing at <em>6 ft 8 in (2.03 m)</em>, he primarily plays at the <strong>power forward</strong> position. 
//                             Rivero was named the <span class="highlight">Israeli League Import of the Year</span> in 2022.
//                         </p>
//                         <img class="playerHover" src="images/rivero info 2.png">
//                         <img class="ginat" src="images/maccabi info 2.png">
//                         `;
//                     buttonsString = `
//                         <button id="${removeButtonId}" class="addbutton yellow-button">
//                             <img class="trash" src="images/trash.png"> 
//                         </button>
//                         <button id="${selectButtonId}" class="addbutton yellow-button"> 
//                             <img class="boxing" src="images/boxing.png">
//                         </button>
//                         <button id="${removeFromFightButtonId}" class="addbutton yellow-button">
//                             <img class="maccabiLogo" src="images/return.png">
//                         </button>
//                     `;
//                     break;
//             }
//         }

//         if (info && buttonsDiv) {
//             info.innerHTML = htmlString;
//             buttonsDiv.innerHTML = buttonsString;
//             info.style.display = 'block';
//             buttonsDiv.style.display = 'block'

//             document.addEventListener('click', function(event) {
//                 if (event.target.id === removeButtonId) {
//                     removePlayer(imgElement.id);
//                 } else if (event.target.id === selectButtonId) {
//                     selectPlayerToFight(imgElement.id, team);
//                 } else if (event.target.id === removeFromFightButtonId) {
//                     removeFromFight(imgElement.id, team);
//                 }
//             });
            
//         }
//     });

//     imgElement.addEventListener('mouseout', (event) => {
//         const buttons = team === 'hapoel' 
//             ? document.getElementById('hapoelPlayerInformation') 
//             : document.getElementById('maccabiPlayerInformation');
//         const info = document.getElementById('stats')
//         if (buttons && !buttons.contains(event.relatedTarget)) {
//             buttons.style.display = 'none'; 
//             info.style.display = 'none'
//         }
//     });
// }

// export function toggleImagePosition(image, originalContainerId, targetContainerId, team) {
//     const originalContainer = document.getElementById(originalContainerId);
//     const targetContainer = document.getElementById(targetContainerId);
//     const result = document.getElementById('result');

//     if (image.parentElement === originalContainer) {
//         if (targetContainer.childElementCount === 0) {
//             targetContainer.appendChild(image);
//             if (team === 'hapoel') {
//                 incrementCurrentHTA();
//                 result.innerHTML = 'You chose a player from Hapoel to fight'; 
//             } else if (team === 'maccabi') {
//                 incrementCurrentMTA();
//                 result.innerHTML = 'You chose a player from Maccabi to fight'; 
//             }
//         }
//     } else {
//         originalContainer.appendChild(image);
//         if (team === 'hapoel') {
//             decrementCurrentHTA();
//             result.innerHTML = 'You chose to remove the current Hapoel fighter'; 
//         } else if (team === 'maccabi') {
//             decrementCurrentMTA();
//             result.innerHTML = 'You chose to remove the current Maccabi fighter'; 
//         }
//     }

//     setTimeout(() => {
//         result.innerHTML = ''; 
//     }, 5000);
// }


