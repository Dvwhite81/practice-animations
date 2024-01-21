const ball3 = document.querySelector('#ball-3');

const totalHeight = window.innerHeight - 55;
const halfHeight = window.innerHeight / 2;
const totalWidth = window.innerWidth;
const halfWidth = totalWidth / 2;

let x = 0;
let y = totalHeight;
let xSpeed = 5;
let ySpeed = 5;

const animate3 = () => {
  x += xSpeed;
  y += ySpeed;

  if (x > halfWidth - 50 || x < 0) {
    xSpeed = -xSpeed;
  }

  if (y > totalHeight || y < halfHeight) {
    ySpeed = -ySpeed;
  }

  ball3.style.left = `${x}px`;
  ball3.style.top = `${y}px`;
  requestAnimationFrame(animate3);
};

export default animate3;
