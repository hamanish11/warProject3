function prepareForFight() {
  let container = document.getElementById('result');
  if (currentHTA == 0 && currentMTA == 0 && won == false) {
    container.innerHTML = "PLEASE ADD PLAYERS TO THE CENTER OF THE ARENA, THE ARENA IS EMPTY!";
  } else if (won == true) {
    container.innerHTML = "CAN'T FIGHT, THE BATTLE IS OVER";
  } else if (countMaccabi == 0) {
    won = true;
    container.innerHTML = "CONGRATS, HAPOEL WON THE GAME!";
  } else if (countHapoel == 0) {
    won = true;
    container.innerHTML = "BETTER LUCK NEXT TIME, MACCABI WON THE GAME....";
  } else if (currentHTA == 0 || currentMTA == 0) {
    container.innerHTML = "PLAYER FROM THE OTHER SIDE IS MISSING....";
  } else {
    shouldIntervalStoppedHTA = false;
    shouldIntervalStoppedMTA = false;
    movement('currHapoel', 'moveHapoel');
    movement('currMaccabi', 'moveMaccabi');
    intervalHTAHP = setInterval(updateCounterHTAlife,30);
    intervalMTAHP = setInterval(updateCounterMTAlife,30);
    intervalHTADmg = setInterval(updateCounterDamageHTA, 30);
    intervalMTADmg = setInterval(updateCounterDamageMTA, 30);
    setTimeout(function() {
      clearInterval(intervalHTAHP);
      clearInterval(intervalMTAHP);
      clearInterval(intervalHTADmg);
      clearInterval(intervalMTADmg);
    }, 2500);
    setTimeout(fight, 2500);
  }
}

function fight() {
  var container = document.getElementById('result');
  container.innerHTML = "";
  let container1 = document.getElementById('currHapoel');
  let imgHapoel = container1.querySelector('img');
  let container2 = document.getElementById('currMaccabi');
  let imgMaccabi = container2.querySelector('img');
  
  if (imgMaccabi.alt > imgHapoel.alt) {
    if (imgHapoel) {
      imgHapoel.parentNode.removeChild(imgHapoel);
      currentHTA--;
      countHapoel--;
    }
    container.innerHTML += 'MACCABI WON THIS ROUND';
  } else if (imgHapoel.alt > imgMaccabi.alt) {
    if (imgMaccabi) {
      imgMaccabi.parentNode.removeChild(imgMaccabi);
      currentMTA--;
      countMaccabi--;
    }
    container.innerHTML += 'HAPOEL WON THIS ROUND';
   }
  //   else {
  // //   let random = Math.random();
  // //   if (random >= 0 && random <= 0.5) {
  // //     if (imgMaccabi) {
  // //       imgMaccabi.parentNode.removeChild(imgMaccabi);
  // //       currentMTA--;
  // //       countMaccabi--;
  // //     }
  // //     container.innerHTML += 'HAPOEL WON THIS ROUND';
  // //   } else {
  // //     if (imgHapoel) {
  // //       imgHapoel.parentNode.removeChild(imgHapoel);
  // //       currentHTA--;
  // //       countHapoel--;
  // //     }
  // //     container.innerHTML += 'MACCABI WON THIS ROUND';
  // //   }
  // }

  counterHTADamage = 0;
  counterMTADamage = 0;
  document.getElementsByClassName('damageTakenHTA')[0].textContent = counterHTADamage;
  document.getElementsByClassName('damageTakenMTA')[0].textContent = counterMTADamage;
  counterHTAHP = 100;
  counterMTAHP = 100;
  document.getElementsByClassName('hpHTA')[0].textContent = counterHTAHP;
  document.getElementsByClassName('hpMTA')[0].textContent = counterMTAHP;
  shouldIntervalStoppedHTA = true;
  shouldIntervalStoppedMTA = true;
}