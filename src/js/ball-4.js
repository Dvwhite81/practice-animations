const ball4 = document.querySelector('#ball-4');
const blue = document.querySelector('#blue');

const height = blue.clientHeight;
const totalHeight = window.innerHeight;
const halfBlueHeight = height / 2;
const halfHeight = totalHeight - halfBlueHeight;
const width = blue.clientWidth;
const totalWidth = window.innerWidth;
const halfBlueWidth = width / 2;
const halfWidth = totalWidth - halfBlueWidth;

const x = halfWidth;
const y = halfHeight - 25;
ball4.style.left = `${x}px`;
ball4.style.top = `${y}px`;
