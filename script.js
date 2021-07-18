

let approachText = document.getElementById('approach-text');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');



function showApproach() {
    approachText.style.display = 'block';
}

plus.addEventListener('click', showApproach);

plus.onclick = showApproach;


let mode = document.getElementById('mode');
let lightMode = document.getElementById('lightmode');

function changeColor() {
    lightMode.href = 'light-mode.css';
}