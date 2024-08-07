
  
export let counterHTAHP = 100;
export let counterMTAHP = 100;
export let counterHTADamage = 0;
export let counterMTADamage = 0;


export function updateCounterLife(counter, className) {
  document.getElementsByClassName(className)[0].textContent = counter;
}

export function updateCounterHTAlife() {
  counterHTAHP--;
  updateCounterLife(counterHTAHP, 'hpHTA');
}

export function updateCounterMTAlife() {
  counterMTAHP--;
  updateCounterLife(counterMTAHP, 'hpMTA');
}

export function updateCounterDamageHTA() {
  counterHTADamage++;
  updateCounterLife(counterHTADamage, 'damageTakenHTA');
}

export function updateCounterDamageMTA() {
  counterMTADamage++;
  updateCounterLife(counterMTADamage, 'damageTakenMTA');
}

  

  