const defaultSize = 16;
const defaultColour = '#000000';

const slider = document.querySelector('#rangePicker');
const colourPicker = document.querySelector('#colourPicker');
const resetButton = document.querySelector('button');
const value = document.querySelector('#size');
const pad = document.querySelector('#pad');

for (let index = 0; index < defaultSize*defaultSize; index++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = (500 / defaultSize) + 'px';
    box.style.height = (500 / defaultSize) + 'px';
    box.addEventListener('mouseover', changeColour);
    pad.appendChild(box);
} 

const boxes = document.querySelectorAll('.box');

// resets back to default settings
resetButton.addEventListener('click', () => {
    colourPicker.value = defaultColour;
    slider.value = defaultSize;
    value.innerHTML = defaultSize + ' x ' + defaultSize;
    pad.innerHTML = '';
    updateGrid(defaultSize);   
});

// updates text containing grid size
slider.oninput = function() {
    value.innerHTML = this.value + ' x ' + this.value;
}

// changes the grid size to the value of the slider
slider.onchange = function() {
    pad.innerHTML = '';
    updateGrid(this.value);
}

// changes number of sqaures on the pad
function updateGrid(choice) {
    for (let index = 0; index < choice*choice; index++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = (500 / choice) + 'px';
        box.style.height = (500 / choice) + 'px';
        box.addEventListener('mouseover', changeColour);
        pad.appendChild(box);
    } 
}

function changeColour(e) {
    e.target.style.backgroundColor = colourPicker.value;
}