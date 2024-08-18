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




//  export function removePlayer(imageId) {
//     let image = document.getElementById(imageId);
//     let teamHTA = imageId.slice(0,6);
//     let teamMTA = imageId.slice(0,7);
//     let result = document.getElementById('result');
//     result.style.color = 'white'; 
//     let info;

//     if (image) {
//         if(teamHTA === 'hapoel'){
//             info = document.getElementById('hapoelPlayerInformation');
//         }
//         else if(teamMTA === 'maccabi'){
//             info = document.getElementById('maccabiPlayerInformation');
//         }
//         image.remove();

//         if (info) {
//             info.style.display = 'none';
//         }
//         result.style.color = 'green'; 
//         result.innerHTML = 'player deleted succcesfully'; 
//         setTimeout(() => {
//             result.innerHTML = ''; 
//         }, 5000); 
        
//         if (imageId.includes('hapoel')) {
//             setCountHapoel(getCountHapoel()-1);
//         } else if (imageId.includes('maccabi')) {
//             setCountMaccabi(getCountMaccabi()-1);
//         }
//     }
//     result.style.color = 'white'; 

// }




// const createselectfromfight = () => {
//     let doesHappend = false;

//     return function selectPlayerToFight(imageId, team) {
//         console.log(getCurrentHTA());
//         if(doesHappend){
//             console.log("did happen");
//             console.log(getCurrentHTA());
//             doesHappend = false;
//             return;
//         }
//         const result = document.getElementById('result');
//         const image = document.getElementById(imageId);
//         const targetContainerId = (team === 'hapoel') ? 'currHapoel' : 'currMaccabi';
//         const targetContainer = document.getElementById(targetContainerId);
//         console.log(targetContainerId);
//         console.log(image.parentElement.id);
//         console.log(targetContainer.childElementCount);
//         if (targetContainer.childElementCount > 0 || image.parentElement.id === targetContainerId) {
//             const result = document.getElementById('result');
//             result.style.color = 'red'; 
//             result.innerHTML = 'CAN\'T ADD PLAYER: PLAYER IS ALREADY IN THE FIGHT POSITION';
//             doesHappend = true;
//             return; 
//         }
    
//         document.getElementById(targetContainerId).appendChild(image);
//         doesHappend = true;
//         result.style.color = 'white'; 
//         if (team === 'hapoel') {
//             setCurrentHTA(getCurrentHTA() + 1);
//             result.innerHTML = 'Player added to fight';
//             console.log(getCurrentHTA());
//         } else if (team === 'maccabi') {
//             setCurrentMTA(getCurrentMTA() + 1);
//             result.innerHTML = 'Player added to fight ';
//             console.log(getCurrentHTA());
//         }
        
//     };
// };

// export const selectPlayerToFight = createselectfromfight();




// const createRemoveFromFight = () => {
//     let doesHappend = false;



//     return function removeFromFight(playerId, team) {
//         const result = document.getElementById('result');
//         const playerImage = document.getElementById(playerId);
//         const originalContainerId = (team === 'hapoel') ? 'solidersHTA' : 'solidersMTA';
//         const targetContainerId = (team === 'hapoel') ? 'currHapoel' : 'currMaccabi';        if(team === 'hapoel'){
//             if(getCurrentHTA()<1&&doesHappend){
//                 console.log("did happen");
//                 doesHappend = true;
//                 return;
//             }
//             else if (!playerImage || playerImage.parentElement.id !== targetContainerId) {
//                 console.log("sold");
//                 console.log("Player in soldiers");
//                 result.style.color = 'red'; 
//                 result.innerHTML = 'Error: Player is not in the fight spot.';
//                 doesHappend = true;
//                 return;
//             }
    
//             console.log("curr");
//             document.getElementById(originalContainerId).appendChild(playerImage);
    
//             if (team === 'hapoel') {
//                 setCurrentHTA(getCurrentHTA() - 1);
//                 result.innerHTML = 'Player removed from fight spot and returned to soldiers.';
//             } else if (team === 'maccabi') {
//                 setCurrentMTA(getCurrentMTA() - 1);
//                 result.innerHTML = 'Player removed from fight spot and returned to soldiers.';
//             }
    
//             result.style.color = 'white'; 
//             doesHappend = true; 
//         }
//         else{
//             if(getCurrentMTA()<1&&doesHappend){
//                 console.log("did happen");
//                 console.log(getCurrentMTA());
//                 doesHappend = true;
//                 return;
//             }
//             else if (!playerImage || playerImage.parentElement.id !== targetContainerId) {
//                 console.log("sold");
//                 console.log("Player in soldiers");
//                 result.style.color = 'red'; 
//                 result.innerHTML = 'Error: Player is not in the fight spot.';
//                 doesHappend = true;
//                 return;
//             }
    
//             console.log("curr");
//             document.getElementById(originalContainerId).appendChild(playerImage);
    
//             if (team === 'hapoel') {
//                 setCurrentHTA(getCurrentHTA() - 1);
//                 result.innerHTML = 'Player removed from fight spot and returned to soldiers.';
//             } else if (team === 'maccabi') {
//                 setCurrentMTA(getCurrentMTA() - 1);
//                 result.innerHTML = 'Player removed from fight spot and returned to soldiers.';
//             }
    
//             result.style.color = 'white'; 
//             doesHappend = true; 
//         }

//     };
// };

// export const removeFromFight = createRemoveFromFight();






export function removePlayer(imageId) {
    const imageContainer = document.getElementById(`container-${imageId}`);
    const result = document.getElementById('result');
    result.style.color = 'white'; 
    let info;

    if (imageContainer) {
        const teamHTA = imageId.slice(0, 6);
        const teamMTA = imageId.slice(0, 7);

        if (teamHTA === 'hapoel') {
            info = document.getElementById('hapoelPlayerInformation');
        } else if (teamMTA === 'maccabi') {
            info = document.getElementById('maccabiPlayerInformation');
        }

        // Remove the image container which includes both the image and buttons
        imageContainer.remove();

        if (info) {
            info.style.display = 'none';
        }
        result.style.color = 'green'; 
        result.innerHTML = 'Player deleted successfully'; 
        setTimeout(() => {
            result.innerHTML = ''; 
        }, 5000); 
        
        // Update player counts
        if (imageId.includes('hapoel')) {
            setCountHapoel(getCountHapoel() - 1);
        } else if (imageId.includes('maccabi')) {
            setCountMaccabi(getCountMaccabi() - 1);
        }
    }
    result.style.color = 'white'; 
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
            result.style.color = 'red'; 
            result.innerHTML = 'CAN\'T ADD PLAYER: PLAYER IS ALREADY IN THE FIGHT POSITION';
            doesHappen = true;
            return; 
        }

        targetContainer.appendChild(imageContainer);
        doesHappen = true;
        result.style.color = 'white'; 
        if (team === 'hapoel') {
            setCurrentHTA(getCurrentHTA() + 1);
            result.innerHTML = 'Player added to fight';
        } else if (team === 'maccabi') {
            setCurrentMTA(getCurrentMTA() + 1);
            result.innerHTML = 'Player added to fight';
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
            result.style.color = 'red'; 
            result.innerHTML = 'Error: Player is not in the fight spot.';
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

        result.style.color = 'white'; 
        doesHappen = true; 

        setTimeout(() => {
            result.innerHTML = ''; 
        }, 5000);
    };
};

export const removeFromFight = createRemoveFromFight();