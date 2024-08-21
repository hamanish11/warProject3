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

export function prepareForFight() {
  let container = document.getElementById('result');
  
  if (getCurrentHTA() === 0 && getCurrentMTA() === 0 && !getWon()) {
      container.innerHTML = "PLEASE ADD PLAYERS TO THE CENTER OF THE ARENA, THE ARENA IS EMPTY!";
  } else if (getWon()) {
      startFireworks();
      container.innerHTML = "CAN'T FIGHT, THE BATTLE IS OVER";
  } else if (getCountMaccabi() === 0) {
      setWon(true);
      startFireworks();
      container.innerHTML = "CONGRATS, HAPOEL WON THE GAME!";
  } else if (getCountHapoel() === 0) {
      setWon(true);
      startFireworks();
      container.innerHTML = "BETTER LUCK NEXT TIME, MACCABI WON THE GAME....";
  } else if (getCurrentHTA() === 0 || getCurrentMTA() === 0) {
      container.innerHTML = "PLAYER FROM THE OTHER SIDE IS MISSING....";
  } else {
      resetCounters();
      
      clearInterval(getIntervalHTAHP());
      clearInterval(getIntervalMTAHP());
      clearInterval(getIntervalHTADmg());
      clearInterval(getIntervalMTADmg());
      
      setIntervalHTAHP(setInterval(updateCounterHTAlife, 20));
      setIntervalMTAHP(setInterval(updateCounterMTAlife, 20));
      setIntervalHTADmg(setInterval(updateCounterDamageHTA, 20));
      setIntervalMTADmg(setInterval(updateCounterDamageMTA, 20));
      
      setShouldIntervalStoppedHTA(false);
      setShouldIntervalStoppedMTA(false);
      movement('currHapoel', 'moveHapoel');
      movement('currMaccabi', 'moveMaccabi');
      
      setTimeout(() => {
          clearInterval(getIntervalHTAHP());
          clearInterval(getIntervalMTAHP());
          clearInterval(getIntervalHTADmg());
          clearInterval(getIntervalMTADmg());
          fight(); 
      }, 2500);
  }
  
  setTimeout(() => {
      container.innerHTML = ''; 
  }, 5000);

  console.log('HTA HP:', getCounterHTAHP());
  console.log('MTA HP:', getCounterMTAHP());
}

export function fight() {
  let container = document.getElementById('result');
  container.innerHTML = "";
  let container1 = document.getElementById('currHapoel');
  let imgHapoel = container1.querySelector('img');
  let container2 = document.getElementById('currMaccabi');
  let imgMaccabi = container2.querySelector('img');

  if (imgMaccabi && imgHapoel) {
      if (imgMaccabi.alt > imgHapoel.alt) {
          container1.innerHTML = "";
          setCurrentHTA(getCurrentHTA() - 1);
          setCountHapoel(getCountHapoel() - 1);
          container.innerHTML += 'MACCABI WON THIS ROUND';
      } else if (imgHapoel.alt > imgMaccabi.alt) {
          container2.innerHTML = "";
          setCurrentMTA(getCurrentMTA() - 1);
          setCountMaccabi(getCountMaccabi() - 1);
          container.innerHTML += 'HAPOEL WON THIS ROUND';
      }
  }

  resetCounters();

  console.log('HTA HP Reset:', getCounterHTAHP());
  console.log('MTA HP Reset:', getCounterMTAHP());
  console.log('HTA Damage Reset:', getCounterHTADamage());
  console.log('MTA Damage Reset:', getCounterMTADamage());

  setShouldIntervalStoppedHTA(true);
  setShouldIntervalStoppedMTA(true);
}