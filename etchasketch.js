// variables
let gridContainer = document.getElementById('grid-container');
let rows = document.getElementsByClassName('gridRow');
//let cells = document.getElementsByClassName('cell');

// creates default 16x grid
function defaultGrid() {
  makeRows(16);
  makeColumns(16);
}

let createGridBtn = document.getElementById('create-grid');
let rowField = document.getElementById('row-input');
let columnField = document.getElementById('column-input');
createGridBtn.addEventListener('click', () => {
  if ((rowField.value > 64 || rowField.value < 1) || ((columnField.value > 64) || (columnField.value < 1))) {
    return alert('Please enter values from 1-64');
  } else {
    let rows = document.querySelectorAll('.gridRow');
    rows.forEach(gridRow => { gridRow.remove(); });
    makeRows(rowField.value);
    makeColumns(columnField.value);
    cells = document.querySelectorAll('.cell');
    drawingReset();
  }
});


function makeRows(numRows) {
  for (r = 0; r < numRows; r++) {
    let row = document.createElement('div');
    gridContainer.appendChild(row).className = 'gridRow';
  }
}

function makeColumns(numColumns) {
  for (i = 0; i < rows.length; i++) {
    for (j = 0; j < numColumns; j++) {
      let newCell = document.createElement('div');
      rows[j].appendChild(newCell).className = 'cell';
    }
  }
}

function color() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i=0; i<6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//defaultGrid();

let cells = document.querySelectorAll('.cell');
let drawingEnabled = false;
function drawingReset() {
cells.forEach((cell) => {
  cell.addEventListener('mousedown', () => {
    drawingEnabled = true;
    drawing();
  });
  cell.addEventListener('mouseenter', () => {
    if(drawingEnabled == true) { drawing() }
  window.addEventListener('mouseup', () => {
    drawingEnabled = false;
    });
  });
  function drawing() {
      cell.style.backgroundColor = color();
  }
});
}

function resetGrid() {
  cells.forEach((cell) => {
    cell.style.backgroundColor = 'grey';
  })
}

/* // touch screen functionality
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
let cells = document.querySelectorAll('.cell');
let drawingEnabled = false;
cells.forEach((cell) => {
  cell.addEventListener('pointerdown', () => {
    drawingEnabled = true;
    drawing();
  });
  cell.addEventListener('pointerenter', () => {
    if(drawingEnabled == true) { drawing() }
  window.addEventListener('pointerup', () => {
    drawingEnabled = false;
    });
  });
  function drawing() {
      cell.style.backgroundColor = color();
  }
});
} */

// reset button
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => { resetGrid() });


// the unholy randomizer block of ugly code
let randomTimer = '';
let randomCell = '';
function randomColor() {
  if (randomOn == true) {
  randomCell = cells[ Math.floor(Math.random() * cells.length) ];
  randomCell.style.backgroundColor = color();
  randomTimer = setTimeout(randomColor,100);
  }
}
let randomOn = false;
const randomizer = document.getElementById('randomizer');
randomizer.addEventListener('click', () => {
  randomOn = !randomOn;
  randomColor();
});


