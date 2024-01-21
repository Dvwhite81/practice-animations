const ball2 = document.querySelector('#ball-2');
const red = document.querySelector('#red');

const height = red.clientHeight;
const totalWidth = window.innerWidth;
const halfWidth = totalWidth / 2;

let x = halfWidth;
const y = height / 2 - 25;
let xSpeed = 5;

const animate2 = () => {
  x += xSpeed;

  if (x > totalWidth - 50 || x < halfWidth + 5) {
    xSpeed = -xSpeed;
  }

  ball2.style.left = `${x}px`;
  ball2.style.top = `${y}px`;
  requestAnimationFrame(animate2);
};

export default animate2;
