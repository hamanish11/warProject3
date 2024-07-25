function addImage(team, playersArray, countVar, originalContainerId, targetContainerId, toggleFunction) {
  var container = document.getElementById(originalContainerId);
  var imgElement = document.createElement('img');
  let result = document.getElementById('result');
  const player = playersArray[Math.floor(Math.random() * playersArray.length)];
  imgElement.src = player.img;
  imgElement.alt = player.rating;
  imgElement.id = `${team} number ${countVar}`;
  imgElement.width = 200;
  imgElement.height = 180;
  container.appendChild(imgElement);

  if (result.innerHTML != '') {
      result.innerHTML = ' ';
  }

  imgElement.addEventListener('click', function () {
      toggleFunction(this, originalContainerId, targetContainerId);
      
  });
}

function toggleImagePosition(image, originalContainerId, targetContainerId) {
  let trimmedSentence = 'hapoel';
  let idParts = image.id.split(' ');
  let team = idParts[0];
  const originalContainer = document.getElementById(originalContainerId);
  const targetContainer = document.getElementById(targetContainerId);

  if (image.parentElement === originalContainer && targetContainer.childElementCount == 0) {
      targetContainer.appendChild(image);
      if(trimmedSentence == team){
        currentHTA++;
      }
      else{
        currentMTA++;
      }
  } else {
      originalContainer.appendChild(image);
      if(trimmedSentence == team){
        currentHTA--;
      }
      else{
        currentMTA--;
      }
  }
}

// Example usage for Hapoel
function addImageHapoel() {
  addImage('hapoel', hapoelPlayers, countHapoel, 'solidersHTA', 'currHapoel', toggleImagePosition);
  countHapoel++;
}

// Example usage for Maccabi
function addImageMaccabi() {
  addImage('maccabi', maccabiPlayers, countMaccabi, 'solidersMTA', 'currMaccabi', toggleImagePosition);
  countMaccabi++;
}



