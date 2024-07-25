// function updateCounterHTAlife() {
//     counterHTAHP--;
//     if (counterHTAHP >= 0 && shouldIntervalStoppedHTA == false) {
//       document.getElementsByClassName('hpHTA')[0].textContent = counterHTAHP;
//     } else {
//       setTimeout(function() {
//         clearInterval(intervalHTAHP);
//       }, 1);
//     }
//   }
  
  
  
//   function updateCounterMTAlife() {
//     counterMTAHP--;
//     if (counterMTAHP >= 0 && shouldIntervalStoppedMTA == false) {
//       document.getElementsByClassName('hpMTA')[0].textContent = counterMTAHP;
//     } else {
//       setTimeout(function() {
//         clearInterval(intervalMTAHP);
//       }, 1000);
//     }
//   }



function updateCounterLife(counter, className) {
  let times=100;
  if (times <= 100) {
    document.getElementsByClassName(className)[0].textContent = counter;
  } else {
  }
  times--;
}

// Example usage for Hapoel team HP
function updateCounterHTAlife() {
  counterHTAHP--;
  updateCounterLife(counterHTAHP, 'hpHTA');
}

// Example usage for Maccabi team HP
function updateCounterMTAlife() {
  counterMTAHP--;
  updateCounterLife(counterMTAHP, 'hpMTA');
}

// Example usage for Hapoel team damage
function updateCounterDamageHTA() {
  counterHTADamage++;
  updateCounterLife(counterHTADamage, 'damageTakenHTA');
}

// Example usage for Maccabi team damage
function updateCounterDamageMTA() {
  counterMTADamage++;
  updateCounterLife(counterMTADamage, 'damageTakenMTA');
}
  
  // function updateCounterDamageMTA() {
  //   counterMTADamage++;
  //   if (counterMTADamage >= 0 && shouldIntervalStoppedMTA == false) {
  //     document.getElementsByClassName('damageTakenMTA')[0].textContent = counterMTADamage;
  //   } else {
  //     setTimeout(function() {
  //       clearInterval(intervalMTADmg);
  //     }, 1000);
  //   }
  // }


  // function updateCounterDamageHTA() {
  //   counterHTADamage++;
  //   if (counterHTADamage >= 0 && shouldIntervalStoppedHTA == false) {
  //     document.getElementsByClassName('damageTakenHTA')[0].textContent = counterHTADamage;
  //   } else {
  //     setTimeout(function() {
  //       clearInterval(intervalHTADmg);
  //     }, 1);
  //   }
  // }

  

  