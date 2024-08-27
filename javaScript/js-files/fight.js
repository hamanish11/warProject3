import {
  getCountHapoel,
  getCountMaccabi,
  setCountHapoel,
  setCountMaccabi,
  getCurrentHTA,
  getCurrentMTA,
  setCurrentMTA,
  setCurrentHTA,
  getCounterHTAHP,
  setCounterHTAHP,
  getCounterMTAHP,
  setCounterMTAHP,
  getCounterHTADamage,
  setCounterHTADamage,
  getCounterMTADamage,
  setCounterMTADamage,
  getIntervalHTAHP,
  setIntervalHTAHP,
  getIntervalMTAHP,
  setIntervalMTAHP,
  getIntervalHTADmg,
  setIntervalHTADmg,
  getIntervalMTADmg,
  setIntervalMTADmg,
  setShouldIntervalStoppedHTA,
  setShouldIntervalStoppedMTA,
  getWon,
  setWon
} from './config.js';
import { movement } from './movement.js'; 
import {
  updateCounterHTAlife,
  updateCounterMTAlife,
  updateCounterDamageHTA,
  updateCounterDamageMTA,
  resetCounters
} from './counters.js';
import { startFireworks } from './fireworks.js';


// export function prepareForFight() {
//     let container = document.getElementById('result');
//     if (getCurrentHTA() === 0 && getCurrentMTA() === 0 && !getWon()) {
//         container.innerHTML = "PLEASE ADD PLAYERS TO THE CENTER OF THE ARENA, THE ARENA IS EMPTY!";
//     } else if (getWon()) {
//         startFireworks();
//         container.innerHTML = "CAN'T FIGHT, THE BATTLE IS OVER. RETURN TO THE HOME PAGE";
//     } else if (getCurrentHTA() === 0 || getCurrentMTA() === 0) {
//         container.innerHTML = "THERE IS AT LEAST ONE PLAYER MISSING IN THE CURRENT PLAYER SPOT";
//     } else {
//         resetCounters();
        
//         clearInterval(getIntervalHTAHP());
//         clearInterval(getIntervalMTAHP());
//         clearInterval(getIntervalHTADmg());
//         clearInterval(getIntervalMTADmg());
        
//         setIntervalHTAHP(setInterval(updateCounterHTAlife, 20));
//         setIntervalMTAHP(setInterval(updateCounterMTAlife, 20));
//         setIntervalHTADmg(setInterval(updateCounterDamageHTA, 20));
//         setIntervalMTADmg(setInterval(updateCounterDamageMTA, 20));
        
//         setShouldIntervalStoppedHTA(false);
//         setShouldIntervalStoppedMTA(false);
//         movement('currHapoel', 'moveHapoel');
//         movement('currMaccabi', 'moveMaccabi');
//         setTimeout(() => {
//             clearInterval(getIntervalHTAHP());
//             clearInterval(getIntervalMTAHP());
//             clearInterval(getIntervalHTADmg());
//             clearInterval(getIntervalMTADmg());
//             fight(); 
//         }, 2500);
//     }
    
//     setTimeout(() => {
//         container.innerHTML = ''; 
//     }, 5000);
  
//     console.log('HTA HP:', getCounterHTAHP());
//     console.log('MTA HP:', getCounterMTAHP());
//   }
  
//   export function fight() {
//     let container = document.getElementById('result');
//     container.innerHTML = "";
//     let container1 = document.getElementById('currHapoel');
//     let imgHapoel = container1.querySelector('img');
//     let container2 = document.getElementById('currMaccabi');
//     let imgMaccabi = container2.querySelector('img');


//     if (!imgMaccabi || !imgHapoel) {
//         container.innerHTML = "FIGHT CANNOT PROCEED: ONE OR BOTH PLAYERS ARE MISSING.";
//         resetCounters();
//         console.log('Fight aborted: Missing one or both images.');
//         return;  
//     }
  
//     if (imgMaccabi && imgHapoel) {
//         if (imgMaccabi.alt > imgHapoel.alt) {
//             container1.innerHTML = "";
//             setCurrentHTA(getCurrentHTA() - 1);
//             setCountHapoel(getCountHapoel() - 1);
//             container.innerHTML += 'MACCABI WON THIS ROUND';
//             if (getCountHapoel() === 0) {
//                 setWon(true);
//                 startFireworks();
//                 container.innerHTML = "BETTER LUCK NEXT TIME, MACCABI WON THE GAME....";
//             }
//         } else if (imgHapoel.alt > imgMaccabi.alt) {
//             container2.innerHTML = "";
//             setCurrentMTA(getCurrentMTA() - 1);
//             setCountMaccabi(getCountMaccabi() - 1);
//             container.innerHTML += 'HAPOEL WON THIS ROUND';
//             if (getCountMaccabi() === 0) {
//                 setWon(true);
//                 startFireworks();
//                 container.innerHTML = "CONGRATS, HAPOEL WON THE GAME!";
//                 displayRefreshButton();
//             }
//         }
//     }
  
//     resetCounters();
  
//     console.log('HTA HP Reset:', getCounterHTAHP());
//     console.log('MTA HP Reset:', getCounterMTAHP());
//     console.log('HTA Damage Reset:', getCounterHTADamage());
//     console.log('MTA Damage Reset:', getCounterMTADamage());
  
//     setShouldIntervalStoppedHTA(true);
//     setShouldIntervalStoppedMTA(true);
//   }











// export function prepareForFight() {
//     let container = document.getElementById('result');
//     let currentHTA = getCurrentHTA();
//     let currentMTA = getCurrentMTA();

//     // Clear previous messages and stop any ongoing intervals or animations
//     container.innerHTML = '';
//     clearInterval(getIntervalHTAHP());
//     clearInterval(getIntervalMTAHP());
//     clearInterval(getIntervalHTADmg());
//     clearInterval(getIntervalMTADmg());
//     setShouldIntervalStoppedHTA(true);
//     setShouldIntervalStoppedMTA(true);

//     // Check for missing players immediately
//     let imgHapoel = document.getElementById('currHapoel')?.querySelector('img');
//     let imgMaccabi = document.getElementById('currMaccabi')?.querySelector('img');

//     if (currentHTA === 0 || currentMTA === 0) {
//         container.innerHTML = "THERE IS AT LEAST ONE PLAYER MISSING IN THE CURRENT PLAYER SPOT";
//         console.log('Fight aborted: Missing player.');
//         return; // Exit early
//     }

//     if (!imgHapoel || !imgMaccabi) {
//         container.innerHTML = "THERE IS AT LEAST ONE PLAYER MISSING IN THE CURRENT PLAYER SPOT";
//         console.log('Fight aborted: Missing one or both images.');
//         return;
//     }

//     if (currentHTA === 0 && currentMTA === 0 && !getWon()) {
//         container.innerHTML = "PLEASE ADD PLAYERS TO THE CENTER OF THE ARENA, THE ARENA IS EMPTY!";
//         return;
//     }

//     if (getWon()) {
//         startFireworks();
//         container.innerHTML = "CAN'T FIGHT, THE BATTLE IS OVER. RETURN TO THE HOME PAGE";
//         return;
//     }

//     // Proceed with the fight preparation
//     resetCounters();
//     setIntervalHTAHP(setInterval(updateCounterHTAlife, 20));
//     setIntervalMTAHP(setInterval(updateCounterMTAlife, 20));
//     setIntervalHTADmg(setInterval(updateCounterDamageHTA, 20));
//     setIntervalMTADmg(setInterval(updateCounterDamageMTA, 20));

//     setShouldIntervalStoppedHTA(false);
//     setShouldIntervalStoppedMTA(false);

//     // Only initiate movement if both players are present
//     movement('currHapoel', 'moveHapoel');
//     movement('currMaccabi', 'moveMaccabi');

//     // Use a small timeout to ensure UI update is visible
//     setTimeout(() => {
//         container.innerHTML = ''; 
//     }, 0); // Immediate clearing of message

//     setTimeout(() => {
//         if (currentHTA > 0 && currentMTA > 0 && imgHapoel && imgMaccabi) {
//             fight(); // Only proceed if no players are missing
//         }
//     }, 2500); // Allow time for any pending UI updates
// }
// export function fight() {
//     let container = document.getElementById('result');
//     container.innerHTML = ""; // Clear any previous messages
//     let container1 = document.getElementById('currHapoel');
//     let imgHapoel = container1?.querySelector('img');
//     let container2 = document.getElementById('currMaccabi');
//     let imgMaccabi = container2?.querySelector('img');

//     if (!imgMaccabi || !imgHapoel) {
//         container.innerHTML = "FIGHT CANNOT PROCEED: ONE OR BOTH PLAYERS ARE MISSING.";
//         resetCounters();
//         console.log('Fight aborted: Missing one or both images.');
//         return;  
//     }

//     if (imgMaccabi && imgHapoel) {
//         if (imgMaccabi.alt > imgHapoel.alt) {
//             container1.innerHTML = "";
//             setCurrentHTA(getCurrentHTA() - 1);
//             setCountHapoel(getCountHapoel() - 1);
//             container.innerHTML += 'MACCABI WON THIS ROUND';
//             if (getCountHapoel() === 0) {
//                 setWon(true);
//                 startFireworks();
//                 container.innerHTML = "BETTER LUCK NEXT TIME, MACCABI WON THE GAME....";
//                 displayRefreshButton(); // Display the refresh button if needed
//             }
//         } else if (imgHapoel.alt > imgMaccabi.alt) {
//             container2.innerHTML = "";
//             setCurrentMTA(getCurrentMTA() - 1);
//             setCountMaccabi(getCountMaccabi() - 1);
//             container.innerHTML += 'HAPOEL WON THIS ROUND';
//             if (getCountMaccabi() === 0) {
//                 setWon(true);
//                 startFireworks();
//                 container.innerHTML = "CONGRATS, HAPOEL WON THE GAME!";
//                 displayRefreshButton(); // Display the refresh button if needed
//             }
//         }
//     }
//     console.log('one line before reset');
//     resetCounters();

//     console.log('HTA HP Reset:', getCounterHTAHP());
//     console.log('MTA HP Reset:', getCounterMTAHP());
//     console.log('HTA Damage Reset:', getCounterHTADamage());
//     console.log('MTA Damage Reset:', getCounterMTADamage());

//     setShouldIntervalStoppedHTA(true);
//     setShouldIntervalStoppedMTA(true);
// }








export function prepareForFight() {
    let container = document.getElementById('result');
    let currentHTA = getCurrentHTA();
    let currentMTA = getCurrentMTA();

    container.innerHTML = '';
    clearInterval(getIntervalHTAHP());
    clearInterval(getIntervalMTAHP());
    clearInterval(getIntervalHTADmg());
    clearInterval(getIntervalMTADmg());
    setShouldIntervalStoppedHTA(true);
    setShouldIntervalStoppedMTA(true);

    let imgHapoel = document.getElementById('currHapoel')?.querySelector('img');
    let imgMaccabi = document.getElementById('currMaccabi')?.querySelector('img');

    if (currentHTA === 0 || currentMTA === 0) {
        container.innerHTML = "THERE IS AT LEAST ONE PLAYER MISSING IN THE CURRENT PLAYER SPOT";
        console.log('Fight aborted: Missing player.');
        return; 
    }

    if (!imgHapoel || !imgMaccabi) {
        container.innerHTML = "THERE IS AT LEAST ONE PLAYER MISSING IN THE CURRENT PLAYER SPOT";
        console.log('Fight aborted: Missing one or both images.');
        return;
    }

    if (currentHTA === 0 && currentMTA === 0 && !getWon()) {
        container.innerHTML = "PLEASE ADD PLAYERS TO THE CENTER OF THE ARENA, THE ARENA IS EMPTY!";
        return;
    }

    if (getWon()) {
        startFireworks();
        container.innerHTML = "CAN'T FIGHT, THE BATTLE IS OVER. RETURN TO THE HOME PAGE";
        return;
    }

    resetCounters();
    setIntervalHTAHP(setInterval(updateCounterHTAlife, 20));
    setIntervalMTAHP(setInterval(updateCounterMTAlife, 20));
    setIntervalHTADmg(setInterval(updateCounterDamageHTA, 20));
    setIntervalMTADmg(setInterval(updateCounterDamageMTA, 20));

    setShouldIntervalStoppedHTA(false);
    setShouldIntervalStoppedMTA(false);

    movement('currHapoel', 'moveHapoel');
    movement('currMaccabi', 'moveMaccabi');

    setTimeout(() => {
        container.innerHTML = ''; 
    }, 0);

    setTimeout(() => {
        if (currentHTA > 0 && currentMTA > 0 && imgHapoel && imgMaccabi) {
            fight(); 
        }
    }, 2500); 
}

export function fight() {
    let container = document.getElementById('result');
    container.innerHTML = ""; 
    let container1 = document.getElementById('currHapoel');
    let imgHapoel = container1?.querySelector('img');
    let container2 = document.getElementById('currMaccabi');
    let imgMaccabi = container2?.querySelector('img');

    if (!imgMaccabi || !imgHapoel) {
        container.innerHTML = "FIGHT CANNOT PROCEED: ONE OR BOTH PLAYERS ARE MISSING.";
        resetCounters();
        setShouldIntervalStoppedHTA(true);
        setShouldIntervalStoppedMTA(true);
        console.log('Fight aborted: Missing one or both images.');
        return;  
    }

    if (imgMaccabi && imgHapoel) {
        if (imgMaccabi.alt > imgHapoel.alt) {
            container1.innerHTML = "";
            setCurrentHTA(getCurrentHTA() - 1);
            setCountHapoel(getCountHapoel() - 1);
            container.innerHTML += 'MACCABI WON THIS ROUND';
            if (getCountHapoel() === 0) {
                setWon(true);
                startFireworks();
                container.innerHTML = "BETTER LUCK NEXT TIME, MACCABI WON THE GAME....";
                displayRefreshButton(); 
            }
        } else if (imgHapoel.alt > imgMaccabi.alt) {
            container2.innerHTML = "";
            setCurrentMTA(getCurrentMTA() - 1);
            setCountMaccabi(getCountMaccabi() - 1);
            container.innerHTML += 'HAPOEL WON THIS ROUND';
            if (getCountMaccabi() === 0) {
                setWon(true);
                startFireworks();
                container.innerHTML = "CONGRATS, HAPOEL WON THE GAME!";
                displayRefreshButton(); 
            }
        }
    }

    clearInterval(getIntervalHTAHP());
    clearInterval(getIntervalMTAHP());
    clearInterval(getIntervalHTADmg());
    clearInterval(getIntervalMTADmg());

    resetCounters();

    setShouldIntervalStoppedHTA(true);
    setShouldIntervalStoppedMTA(true);

    console.log('HTA HP Reset:', getCounterHTAHP());
    console.log('MTA HP Reset:', getCounterMTAHP());
    console.log('HTA Damage Reset:', getCounterHTADamage());
    console.log('MTA Damage Reset:', getCounterMTADamage());
}







  function displayRefreshButton() {
    let containerMenu = document.getElementsByClassName('containerMenu')[0]; 

    if (document.querySelector('.refreshButton')) return;

    let refreshButton = document.createElement('button');
    refreshButton.textContent = 'PLAY AGAIN';
    refreshButton.classList.add('refreshButton');
    containerMenu.appendChild(refreshButton);

    refreshButton.addEventListener('click', () => {
        location.reload(); 
    });
}