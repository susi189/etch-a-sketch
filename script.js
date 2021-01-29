const container = document.getElementById('container');

const startBtn = document.getElementById('start');

startBtn.addEventListener('click', () => {
    if(container.hasChildNodes()){
       container.innerHTML = ''
    }
    let gridSize = prompt('How many squares per side? NOTE: The grid is a square itself, just input one number between 1 and 100');
    createGrid(gridSize);
})

const clearBtn = document.getElementById('clear');

clearBtn.addEventListener('click', () => {
    let allGridElem = document.querySelectorAll('#grid-element');
    allGridElem.forEach((elem) => {
        elem.style.setProperty('background-color', 'white')
    });
})


function createGrid(gridSize) {
  container.style.setProperty('--grid-gridSize', gridSize);
  for (let i=0; i<gridSize; i++) {
    for(let j=0; j<gridSize; j++){
        let elem = document.createElement('div');
        container.appendChild(elem).id = 'grid-element';
        elem.addEventListener('mouseover', (event) => {
        event.target.style.setProperty('background-color', 'black')
        });
    };
  };
};


