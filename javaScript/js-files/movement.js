function movementHTA() {
    let container1 = document.getElementById('currHapoel');
    let imgHapoel = container1.querySelector('img');
    imgHapoel.classList.remove('moveHapoel');
    void imgHapoel.offsetWidth;
    imgHapoel.classList.add('moveHapoel');
  }
  
  function movementMTA() {
    let container2 = document.getElementById('currMaccabi');
    let imgMaccabi = container2.querySelector('img');
    imgMaccabi.classList.remove('moveMaccabi');
    void imgMaccabi.offsetWidth;
    imgMaccabi.classList.add('moveMaccabi');
  }