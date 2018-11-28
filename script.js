function createRows() {
  //const row_div = document.createElement("div");
  
  for (i = 0; i < gridResV; i++) {
    let row_div = document.createElement("div");
    grid.appendChild(row_div);
  }
  return document.querySelectorAll("#grid div");
}

function createRow(input) {
  let row = rows[input];
  for (i = 0; i < gridResH; i++) {
    square = document.createElement("div");
    row.appendChild(square);
  }
}

function selectionTest(x,y) {
  const selectedRow = rows[y];
  const selection = selectedRow.childNodes[x];
  selection.style.backgroundColor = "blue";
  console.log(selection)
}

function drawGrid(resH, resV) {
  for (counter1 = 0; counter1 < gridResV; counter1++) {
    createRow(counter1);
  }
}


const grid = document.querySelector("#grid");
let gridResH = 16;
let gridResV = 16;
const rows = createRows();
drawGrid(gridResH, gridResV)

let pixels = document.querySelectorAll("#grid div div");

for(i = 0; i < pixels.length; i++) {
	pixels[i].addEventListener('mouseover', function(e){
  	e.target.style.background = "#5ee";
	});
}