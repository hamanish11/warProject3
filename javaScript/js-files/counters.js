function updateCounterHTAlife() {
    counterHTAHP--;
    if (counterHTAHP >= 0 && shouldIntervalStoppedHTA == false) {
      document.getElementsByClassName('hpHTA')[0].textContent = counterHTAHP;
    } else {
      setTimeout(function() {
        clearInterval(intervalHTAHP);
      }, 1);
    }
  }
  
  function updateCounterDamageHTA() {
    counterHTADamage++;
    if (counterHTADamage >= 0 && shouldIntervalStoppedHTA == false) {
      document.getElementsByClassName('damageTakenHTA')[0].textContent = counterHTADamage;
    } else {
      setTimeout(function() {
        clearInterval(intervalHTADmg);
      }, 1);
    }
  }
  
  function updateCounterMTAlife() {
    counterMTAHP--;
    if (counterMTAHP >= 0 && shouldIntervalStoppedMTA == false) {
      document.getElementsByClassName('hpMTA')[0].textContent = counterMTAHP;
    } else {
      setTimeout(function() {
        clearInterval(intervalMTAHP);
      }, 1000);
    }
  }
  
  function updateCounterDamageMTA() {
    counterMTADamage++;
    if (counterMTADamage >= 0 && shouldIntervalStoppedMTA == false) {
      document.getElementsByClassName('damageTakenMTA')[0].textContent = counterMTADamage;
    } else {
      setTimeout(function() {
        clearInterval(intervalMTADmg);
      }, 1000);
    }
  }