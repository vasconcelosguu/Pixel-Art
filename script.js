const pixelBoard = document.querySelector('#pixel-board');

function randomColor() {
  const colors = document.querySelectorAll('.color');
  colors[0].style.background = 'black';
  for (let index = 1; index < colors.length; index += 1) {
    const randomNumber = Math.random() * 255;
    const randomNumber1 = Math.random() * 255;
    const randomNumber2 = Math.random() * 255;
    colors[index].style.background = `rgb(${randomNumber}, ${randomNumber1}, ${randomNumber2})`;
  }
}

function selecteBlock(event) {
  const selected = document.querySelector('.selected').style.background;
  const pixelSelected = event.target;
  pixelSelected.style.background = selected;
}

function createBlock(pixels) {
  const mainAcess = document.querySelector('main');
  for (let i = 0; i < pixels * pixels; i += 1) {
    const criaPixel = document.createElement('div');
    criaPixel.className = 'pixel';
    pixelBoard.style.width = `${pixels * 40}px`;
    mainAcess.appendChild(criaPixel);
  }
}

function getSelected(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}

const classColor = document.querySelectorAll('.color');

classColor.forEach((value) => {
  value.addEventListener('click', getSelected);
});

function reload() {
  const getPixels = document.querySelectorAll('.pixel');
  getPixels.forEach((pixel) => {
    pixel.style.background = 'white';
  })
}

const button = document.querySelector('#clear-board');
button.addEventListener('click', reload);

function cliquezinho() {
  document.querySelectorAll('.pixel').forEach((pixel) => {
    pixel.addEventListener('click', selecteBlock);
  });
}

function generatePixel(value) {
  pixelBoard.innerHTML = '';
  if (value < 5) {
    createBlock(5);
    return alert('Board inválido!');
  } if (value > 50) {
    createBlock(50);
    return alert('Board inválido!');
  }
  for (let i = 0; i < value * value; i += 1) {
    const criaPixel = document.createElement('div');
    criaPixel.className = 'pixel';
    pixelBoard.style.width = `${value * 40}px`;
    pixelBoard.appendChild(criaPixel);
  }
  cliquezinho();
}

const input = document.querySelector('#board-size');
const buttonSend = document.querySelector('#generate-board');

buttonSend.addEventListener('click', () => generatePixel(input.value));

window.addEventListener('load', () => {
  createBlock(5);
  randomColor();
  cliquezinho();
});
