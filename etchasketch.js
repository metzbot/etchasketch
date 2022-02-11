// variables
let gridContainer = document.getElementById('grid-container');
let rows = document.getElementsByClassName('gridRow');
//let cells = document.getElementsByClassName('cell');

// creates default 16x grid
function defaultGrid() {
  makeRows(16);
  makeColumns(16);
}

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

defaultGrid();


let cells = document.querySelectorAll('.cell');
let drawingEnabled = false;
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

function resetGrid() {
  cells.forEach((cell) => {
    cell.style.backgroundColor = '#FFF';
  })
};

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => { resetGrid() });