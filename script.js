const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(10,100)
ctx.closePath();
ctx.stroke();

canvas.addEventListener("click", e => (
    alert("wow")
))