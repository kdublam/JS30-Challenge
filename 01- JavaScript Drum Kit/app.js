function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; //stop function from running if other keys are pressed
  audio.currentTime = 0; //rewind to start
  audio.play()
  key.classList.add('playing')
}

function removeTransistion(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransistion))
window.addEventListener('keydown', playSound)