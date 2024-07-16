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
    if(result.innerHTML != ''){
      result.innerHTML = ' ';
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
    if(result.innerHTML != ''){
      result.innerHTML = ' ';
    }

    imgElement.addEventListener('click', function() {
      toggleImagePositionMaccabi(this);
    });
}

function toggleImagePositionHapoel(image) {
  const originalContainer = document.getElementById('solidersHTA');
  const targetContainer = document.getElementById('currHapoel');

  if (image.parentElement === originalContainer && currentHTA == 0) {
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

  if (image.parentElement === originalContainer && currentMTA == 0) {
    targetContainer.appendChild(image);
    currentMTA++;
  } else if (image.parentElement === targetContainer) {
    originalContainer.appendChild(image);
    image.classList.remove('moveMaccabi');
    void image.offsetWidth;
    currentMTA--;
  }
}