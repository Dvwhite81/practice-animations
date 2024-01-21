import 'the-new-css-reset/css/reset.css';
import '../styles/style.css';

const ball1 = document.querySelector('#ball-1');
const black = document.querySelector('#black');

// const height = black.clientHeight;
const width = black.clientWidth;

const x = width / 2 - 25;
let y = 0;
let ySpeed = 5;

const animate1 = () => {
  y += ySpeed;

  if (y + 50 > black.clientHeight || y < 0) {
    ySpeed = -ySpeed;
  }

  ball1.style.left = `${x}px`;
  ball1.style.top = `${y}px`;
  requestAnimationFrame(animate1);
};

export default animate1;
