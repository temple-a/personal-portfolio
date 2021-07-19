

let approachText = document.getElementById('approach-text');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let para = document.getElementsByTagName('p');


function showApproach() {
    approachText.style.display = 'flex';
    plus.style.display = 'none';
    minus.style.display = 'flex';
}

function hideApproach() {
    approachText.style.display = 'none';
    minus.style.display = 'none';
    plus.style.display = 'flex';
}

plus.addEventListener('click', showApproach);
minus.addEventListener('click', hideApproach);

let lightMode = document.getElementById('lightmode');
let mode = document.getElementById('mode');

function lightModeToggle() {
    let currentMode = lightMode.getAttribute('href');
    if (currentMode === 'null') {
        lightMode.setAttribute('href', 'light-mode.css');
    } else {
        lightMode.setAttribute('href', 'null');
    } 
}

mode.addEventListener('click', lightModeToggle);