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
  getCounterMTAHP,
  getCounterHTADamage,
  getCounterMTADamage,
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
        return; 
    }

    if (!imgHapoel || !imgMaccabi) {
        container.innerHTML = "THERE IS AT LEAST ONE PLAYER MISSING IN THE CURRENT PLAYER SPOT";
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