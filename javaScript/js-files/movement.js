export function movement(id, className) {
  let container = document.getElementById(id);
  let img = container.querySelector('img');
  if (!img) {
    console.error('No image found inside the container.');
    return;
  }
  img.classList.remove(className);

  setTimeout(() => {
      img.classList.add(className);
  }, 0);

  function handleAnimationEnd() {
      img.classList.remove(className);

      img.removeEventListener('animationend', handleAnimationEnd);
  }

  img.addEventListener('animationend', handleAnimationEnd);
}
