// function movementHTA() {
//     let container1 = document.getElementById('currHapoel');
//     let imgHapoel = container1.querySelector('img');
//     imgHapoel.classList.remove('moveHapoel');
//     setTimeout(() => {
//       imgHapoel.classList.add('moveHapoel');
//     }, 0);
//   }
  
//   function movementMTA() {
//     let container2 = document.getElementById('currMaccabi');
//     let imgMaccabi = container2.querySelector('img');
//     imgMaccabi.classList.remove('moveMaccabi');
//     setTimeout(() => {
//       imgMaccabi.classList.add('moveMaccabi');
//     }, 0);
//   }



function movement(id, className) {
  let container = document.getElementById(id);
  let img = container.querySelector('img');
  
  img.classList.remove(className);
  setTimeout(() => {
    img.classList.add(className);
  }, 0);
}

