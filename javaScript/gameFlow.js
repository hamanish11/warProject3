let countHapoel = 0;
let countGeramns = 0;
let currentHTA = 0;
let currentMTA = 0;
let counterHTAHP = 100;
let counterMTAHP = 100;
let counterHTADamage = 0;
let counterMTADamage = 0;
let intervalHTAHP = null;
let intervalMTAHP = null;
let intervalHTADmg = null;
let intervalMTADmg = null;
let shouldIntervalStoppedHTA = false;
let shouldIntervalStoppedMTA = false;
let won = false;
const hapoelPlayers = [
  { name: "ginat", rating: 88, img: 'images/ginat2.png'},
  { name: "timor", rating: 83, img: 'images/timor2.png'},
  { name: "munford", rating: 87, img: 'images/munford2.png'}
];
const maccabiPlayers = [
  { name: "dibartolomeo", rating: 82, img:'images/german2.png'},
  { name: "blatt", rating: 85, img:'images/blatt2.png' },
  { name: "rivero", rating: 86, img:'images/rivero2.png'}
];
function addImageHapoel() {
    var container = document.getElementById('solidersHTA');
    var imgElement = document.createElement('img');
    let result = document.getElementById('result');
    const player = hapoelPlayers[Math.floor(Math.random() * hapoelPlayers.length)];
    imgElement.src = player.img;
    imgElement.alt = player.rating;
    imgElement.id = `hapoel number ${countHapoel}`;
    imgElement.width = 200;
    imgElement.height = 180;
    container.appendChild(imgElement);
    countHapoel++;
    if(result.innerHTML!=''){
      result.innerHTML= ' ';
    }


    imgElement.addEventListener('click', function() {
      toggleImagePositionHapoel(this);

    });
}


function addImageMaccabi() {
    var container = document.getElementById('solidersMTA');
    var imgElement = document.createElement("img");
    let result = document.getElementById('result');
    const player = maccabiPlayers[Math.floor(Math.random() * maccabiPlayers.length)];
    imgElement.src = player.img;
    imgElement.alt = player.rating;
    imgElement.id = `germans number ${countGeramns}`;
    imgElement.width = 200;
    imgElement.height = 180;
    container.appendChild(imgElement);
    countGeramns++;
    if(result.innerHTML!=''){
      result.innerHTML= ' ';
    }

    imgElement.addEventListener('click', function() {
      toggleImagePositionMaccabi(this);
    });
}


function toggleImagePositionHapoel(image) {
  const originalContainer = document.getElementById('solidersHTA');
  const targetContainer = document.getElementById('currHapoel');

  
  if (image.parentElement === originalContainer&&currentHTA==0) {
    targetContainer.appendChild(image);
    currentHTA++;
  } else if (image.parentElement === targetContainer) {
    originalContainer.appendChild(image);
    image.classList.remove('moveHapoel');
    void image.offsetWidth;
    currentHTA--;
  }
}

function toggleImagePositionMaccabi(image) {
  const originalContainer = document.getElementById('solidersMTA');
  const targetContainer = document.getElementById('currMaccabi');

  
  if (image.parentElement === originalContainer&&currentMTA==0) {
    targetContainer.appendChild(image);
    currentMTA++;
  } else if (image.parentElement === targetContainer) {
    originalContainer.appendChild(image);
    image.classList.remove('moveMaccabi');
    void image.offsetWidth;
    currentMTA--;
  }
}






function prepareForFight() {
  let container = document.getElementById('result');
  if(currentHTA==0&&currentMTA==0&&won==false){
    container.innerHTML = "PLEASE ADD PLAYERS TO THE CENTERE OF THE ARENA , THE ARENA IS EMPTY!";
  }
  else if(won==true){
    container.innerHTML = "CAN'T FIGHT, THE BATTLE IS OVER";
  }
  else if(countGeramns==0){
    won = true;
    container.innerHTML = "CONGRATS, HAPOEL WON THE GAME!";
  }
  else if(countHapoel==0){
    won = true;
    container.innerHTML = "BETTER LUCK NEXT TIME, MACCABI WON THE GAME....";
  }
  else if(currentHTA==0||currentMTA==0){
    container.innerHTML = "PLAYER FROM THE OTHER SIDE IS MISSING....";

  }
  else{
    shouldIntervalStoppedHTA = false;
    shouldIntervalStoppedMTA = false;
    movementHTA();
    movementMTA();
    intervalHTAHP = setInterval(updateCounterHTAlife,30);
    intervalMTAHP = setInterval(updateCounterMTAlife,30);
    intervalHTADmg = setInterval(updateCounterDamageHTA,30);
    intervalMTADmg = setInterval(updateCounterDamageMTA,30);
    setTimeout(fight,2500);
  }
  
  
}


// function fight(){
//   var container = document.getElementById('result');
//   container.innerHTML= "";
//   let winning = Math.random();
//     if(winning > 0.5){
//       let container1 = document.getElementById('currHapoel');
//       let imgHapoel = container1.querySelector('img');
    
//       if (imgHapoel) {
//         imgHapoel.parentNode.removeChild(imgHapoel);
//         currentHTA--;
//         countHapoel--;
//       }
//       container.innerHTML += 'MACCABI WON THIS ROUND';
//     }
//     else{
//       let container2 = document.getElementById('currMaccabi');
//       let imgMaccabi = container2.querySelector('img'); 
    
//       if (imgMaccabi) {
//         imgMaccabi.parentNode.removeChild(imgMaccabi);
//         currentMTA--;
//         countGeramns--;
//       }
//       container.innerHTML += 'HAPOEL WON THIS ROUND';
//     }
//     counterHTADamage=0;
//     counterMTADamage=0;
//     document.getElementsByClassName('damageTakenHTA')[0].textContent = counterHTADamage;
//     document.getElementsByClassName('damageTakenMTA')[0].textContent = counterMTADamage;
//     counterHTAHP=100;
//     counterMTAHP=100;
//     document.getElementsByClassName('hpHTA')[0].textContent = counterHTAHP;
//     document.getElementsByClassName('hpMTA')[0].textContent = counterMTAHP;
//     shouldIntervalStoppedHTA=true;
//     shouldIntervalStoppedMTA=true;
//   }


function fight(){
  var container = document.getElementById('result');
  container.innerHTML= "";
  let container1 = document.getElementById('currHapoel');
  let imgHapoel = container1.querySelector('img');
  let container2 = document.getElementById('currMaccabi');
  let imgMaccabi = container2.querySelector('img'); 
    if(imgMaccabi.alt > imgHapoel.alt){
      
    
      if (imgHapoel) {
        imgHapoel.parentNode.removeChild(imgHapoel);
        currentHTA--;
        countHapoel--;
      }
      container.innerHTML += 'MACCABI WON THIS ROUND';
    }
    else if(imgHapoel.alt > imgMaccabi.alt){
      
    
      if (imgMaccabi) {
        imgMaccabi.parentNode.removeChild(imgMaccabi);
        currentMTA--;
        countGeramns--;
      }
      container.innerHTML += 'HAPOEL WON THIS ROUND';
    }
    else{
      let random = Math.random();
      if(random>=0&&random<=0.5){
        if (imgMaccabi) {
          imgMaccabi.parentNode.removeChild(imgMaccabi);
          currentMTA--;
          countGeramns--;
        }
        container.innerHTML += 'HAPOEL WON THIS ROUND';
      }
      else{
        if (imgHapoel) {
          imgHapoel.parentNode.removeChild(imgHapoel);
          currentHTA--;
          countHapoel--;
        }
        container.innerHTML += 'MACCABI WON THIS ROUND';
      }
    }
    counterHTADamage=0;
    counterMTADamage=0;
    document.getElementsByClassName('damageTakenHTA')[0].textContent = counterHTADamage;
    document.getElementsByClassName('damageTakenMTA')[0].textContent = counterMTADamage;
    counterHTAHP=100;
    counterMTAHP=100;
    document.getElementsByClassName('hpHTA')[0].textContent = counterHTAHP;
    document.getElementsByClassName('hpMTA')[0].textContent = counterMTAHP;
    shouldIntervalStoppedHTA=true;
    shouldIntervalStoppedMTA=true;
  }



function movementHTA(){
  let container1 = document.getElementById('currHapoel');
  let imgHapoel = container1.querySelector('img'); 
  imgHapoel.classList.remove('moveHapoel');
  void imgHapoel.offsetWidth;
  imgHapoel.classList.add('moveHapoel');
}



function movementMTA(){
  let container2 = document.getElementById('currMaccabi');
  let imgMaccabi = container2.querySelector('img'); // Assuming only one img element is present
  imgMaccabi.classList.remove('moveMaccabi');
  void imgMaccabi.offsetWidth;
  imgMaccabi.classList.add('moveMaccabi');

}

function updateCounterHTAlife() {
  counterHTAHP--;
  if(counterHTAHP>=0&&shouldIntervalStoppedHTA==false){
    document.getElementsByClassName('hpHTA')[0].textContent = counterHTAHP;
  }
  else{
    setTimeout(function() {
      clearInterval(intervalHTAHP);
    }, 1);
  }

}

function updateCounterDamageHTA() {
  counterHTADamage++;
  if(counterHTADamage>=0&&shouldIntervalStoppedHTA==false){
    document.getElementsByClassName('damageTakenHTA')[0].textContent = counterHTADamage;
  }
  else{
    setTimeout(function() {
      clearInterval(intervalHTADmg);
    }, 1);
  }

}

function updateCounterMTAlife() {
  counterMTAHP--;
  if(counterMTAHP>=0&&shouldIntervalStoppedMTA==false){
    document.getElementsByClassName('hpMTA')[0].textContent = counterMTAHP;
  }
  else{
    setTimeout(function() {
      clearInterval(intervalMTAHP);
    }, 1000);
  }

}

function updateCounterDamageMTA() {
  counterMTADamage++;
  if(counterMTADamage>=0&&shouldIntervalStoppedMTA==false){
    document.getElementsByClassName('damageTakenMTA')[0].textContent = counterMTADamage;
  }
  else{
    setTimeout(function() {
      clearInterval(intervalMTADmg);
    }, 1000);
  }
}

// function extractWordFromSentence(word,sentence){
//   let position = sentence.indexOf(word);
//   let extractedWord;
//   if (position !== -1) {
//     extractedWord = sentence.substring(position, position + word.length);
//   }
//   return extractedWord;
// }



// function currFight(currMaccabi,currHapoel){
//   let hapoelTurn = turn;
//   let damage = Math.random()*10;
//   if(hapoelTurn){
//     currMaccabi.HP =- damage;
//   }
//   else{
//     currHapoel.HP =- damage;
//   }
// }
// //damage,speical power
// const player = new Object();
// player.HP= 100;



// function myMove() {
//     let id = null;
//     const elem = document.getElementById("");
//     let pos = 0;
//     clearInterval(id);
//     id = setInterval(frame, 5);
//     function frame() {
//       if (pos == 350) {
//         clearInterval(id);
//       } else {
//         pos++;
//         elem.style.top = pos + 'px';
//         elem.style.left = pos + 'px';
//       }
//     }
// }