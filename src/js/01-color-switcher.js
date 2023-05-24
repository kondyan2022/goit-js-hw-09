const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};
let isActive = false;
let id;
refs.btnStop.disabled = true;

function setBtnDisabledState(active) {
  refs.btnStart.disabled = active;
  refs.btnStop.disabled = !active;
}

refs.btnStart.addEventListener('click', event => {
  isActive = true;
  setBtnDisabledState(isActive);
  id = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

refs.btnStop.addEventListener('click', event => {
  if (isActive) {
    isActive = false;
    clearInterval(id);
    setBtnDisabledState(isActive);
  }
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
