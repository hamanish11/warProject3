export let countHapoel = 0;
export let countMaccabi = 0;
export let currentHTA = 0;
export let currentMTA = 0;
export let counterHTAHP = 100;
export let counterMTAHP = 100;
export let counterHTADamage = 0;
export let counterMTADamage = 0;
export let intervalHTAHP = null;
export let intervalMTAHP = null;
export let intervalHTADmg = null;
export let intervalMTADmg = null;
export let shouldIntervalStoppedHTA = false;
export let shouldIntervalStoppedMTA = false;
export let won = false;


export function incrementCurrentHTA() {
    currentHTA++;
}

export function decrementCurrentHTA() {
    if (currentHTA > 0) currentHTA--;
}

export function getCurrentHTA() {
    return currentHTA;
}

export function incrementCurrentMTA() {
    currentMTA++;
}

export function decrementCurrentMTA() {
    if (currentMTA > 0) currentMTA--;
}

export function getCurrentMTA() {
    return currentMTA;
}


export function incrementHapoel() {
    if (countHapoel < 4) countHapoel++;
}

export function decrementHapoel() {
    if (countHapoel > 0) countHapoel--;
}

export function incrementMaccabi() {
    if (countMaccabi < 4) countMaccabi++;
}

export function decrementMaccabi() {
    if (countMaccabi > 0) countMaccabi--;
}

export function getCountHapoel() {
    return countHapoel;
}

export function getCountMaccabi() {
    return countMaccabi;
}

export function setCountHapoel(value) { countHapoel = value; }
export function setCountMaccabi(value) { countMaccabi = value; }




export function setCurrentHTA(value) { currentHTA = value; }
export function setCurrentMTA(value) { currentMTA = value; }

export function getCounterHTAHP() { return counterHTAHP; }
export function setCounterHTAHP(value) { counterHTAHP = value; }

export function getCounterMTAHP() { return counterMTAHP; }
export function setCounterMTAHP(value) { counterMTAHP = value; }

export function getCounterHTADamage() { return counterHTADamage; }
export function setCounterHTADamage(value) { console.log("setCounter"); counterHTADamage = value; }

export function getCounterMTADamage() { return counterMTADamage; }
export function setCounterMTADamage(value) { counterMTADamage = value; }

export function getIntervalHTAHP() { return intervalHTAHP; }
export function setIntervalHTAHP(value) { intervalHTAHP = value; }

export function getIntervalMTAHP() { return intervalMTAHP; }
export function setIntervalMTAHP(value) { intervalMTAHP = value; }

export function getIntervalHTADmg() { return intervalHTADmg; }
export function setIntervalHTADmg(value) { intervalHTADmg = value; }

export function getIntervalMTADmg() { return intervalMTADmg; }
export function setIntervalMTADmg(value) { intervalMTADmg = value; }

export function getShouldIntervalStoppedHTA() { return shouldIntervalStoppedHTA; }
export function setShouldIntervalStoppedHTA(value) { shouldIntervalStoppedHTA = value; }

export function getShouldIntervalStoppedMTA() { return shouldIntervalStoppedMTA; }
export function setShouldIntervalStoppedMTA(value) { shouldIntervalStoppedMTA = value; }

export function getWon() { return won; }
export function setWon(value) { won = value; }