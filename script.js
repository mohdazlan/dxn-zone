const canvas = document.querySelector('#drawingCanvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const dan = document.createElement('img');
const rifke = document.createElement('img');

dan.src = 'images/42-modified.png';
rifke.src = 'images/74-modified.png'

const handleMouseMove = ()=>{
    console.log('this is a function');
}

handleMouseMove();