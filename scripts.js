/*
Variable naming:
 Prefixes:
	arg_ : function argument
	i_ : for loop iterator
	a_ : array

	B_ : boolean
	I_ : int
	F_ : float
	S_ : string
	E_ : stores a DOM element
 Other:
	ALL_CAPS : a constant
	camelCase : variable
*/


const E_DRAWING_BOARD = document.querySelector("#drawing-board");
const E_RESET_BUTTON = document.querySelector('#reset-btn');

let I_currentResH;
let I_currentResV;

let isDrawing = false;
let isDeleting = false;



function paintTile (event)
{
	if (isDrawing || (event.button === 0 && event.buttons === 1))
	{
		this.classList.add("painted")
	}
	else if (isDeleting || (event.button === 2 && event.buttons === 2))
	{
		this.classList.remove("painted")
	}
}



function createGrid(arg_resH, arg_resV)
{
	let grid = document.createDocumentFragment();


	for (let i_Rows = 0; i_Rows < arg_resV; i_Rows++) 
	{
		// console.log('Row: ' + i_Rows);
		currentRow = document.createElement ('div');
		currentRow.classList.add ('board-row');
		
		
		for (let i_Columns = 0; i_Columns < arg_resH; i_Columns++)
		{
			// console.log('Column: ' + i_Columns);
			currentColumn = document.createElement ('div');
			currentColumn.classList.add ('board-cell');
			currentColumn.addEventListener("mouseenter", paintTile)
			currentColumn.addEventListener("mousedown", paintTile)
			currentRow.appendChild (currentColumn);
		}
		grid.appendChild (currentRow);
		
	}

	return grid;
}


function getOuterHeight (arg_element)
{
	var styles = window.getComputedStyle(arg_element);
	var margin = parseFloat(styles['marginTop']) + parseFloat(styles['marginBottom']);
  
	return arg_element.offsetHeight + margin;
}
function getOuterWidth (arg_element)
{
	var styles = window.getComputedStyle(arg_element);
	var margin = parseFloat(styles['marginLeft']) + parseFloat(styles['marginRight']);
  
	return arg_element.offsetWidth + margin;
}

function deleteElements(arg_parent)
{
	while (arg_parent.lastChild) {
		arg_parent.removeChild(arg_parent.lastChild);
	}
}


function resizeBoard()
{
/* 	const ratio = arg_resH / arg_resV;

	const width = E_DRAWING_BOARD.offsetWidth;
	let newHeight = width * ratio;

	E_DRAWING_BOARD.setAttribute ('style', `height:${newHeight}px`) */

	let resultH;
	let resultV;

	const maxAvailableWidth = window.innerWidth / 100 * 70;
	const maxAvailableHeight = window.innerHeight - 220;
	let maxLength;
	
	if (maxAvailableHeight < maxAvailableWidth)
	{
		maxLength = maxAvailableHeight;
	} 
	else 
	{
		maxLength = maxAvailableWidth;
	}

	if (I_currentResH < I_currentResV)
	{
		resultV = maxLength;

		resultH = maxLength / I_currentResV * I_currentResH;
	}
	else
	{
		resultH = maxLength;

		resultV = maxLength / I_currentResH * I_currentResV;
	}

	E_DRAWING_BOARD.style.width = resultH + 'px';
	E_DRAWING_BOARD.style.height = resultV + 'px';
}


function redraw(arg_resH, arg_resV)
{
	I_currentResH = arg_resH;
	I_currentResV = arg_resV;
	
	deleteElements(E_DRAWING_BOARD);
	
	E_DRAWING_BOARD.appendChild (createGrid(arg_resH,arg_resV));

	resizeBoard();
}


function checkInput (arg_input)
{
	// now with added ligma


	let a = arg_input; // just an abbreviation
	
	// Pass if it's an int bigger than 1
	if (  !isNaN(a) && Math.floor(a) == a && a >= 1  )
	{
		return true;
	}
	else if (a === null)
	{
		return false;
	}

	// v=== here's the ligma:
	let haha = window.open("https://youtu.be/CHMx0ANIzQM" , "_blank")
	haha.focus();
	// ^===

	return false;
}


function resetBoard()
{
	let newResH = prompt ("New width in pixels:", I_currentResH.toString());
	if (!checkInput(newResH)) return false;
	let newResV = prompt ("New height in pixels:", I_currentResV.toString());
	if (!checkInput(newResV)) return false;

	// Separate check if one of the numbers is too high (64)
	if (newResH > 64 || newResV > 64)
	{
		alert("Resolution too high! \n64 is the maximum for a side.");
		return;
	}
	redraw(newResH , newResV);
}


function setDrawing(event)
{
	event.preventDefault();

	if (event.button == 0)
	{
		isDrawing = true;
		isDeleting = false;
	}
	else if (event.button == 2)
	{
		isDrawing = false;
		isDeleting = true;
	}

	// console.log (`Drawing: ${isDrawing}; Deleting: ${isDeleting} ; ${event.button}`);
}
function setNotDrawing(event)
{
	isDrawing = false;
	isDeleting = false;

	// console.log (`Drawing: ${isDrawing}; Deleting: ${isDeleting}`);
}

// Event listeners:

E_RESET_BUTTON.onclick = resetBoard;
window.onresize = resizeBoard;

E_DRAWING_BOARD.onmousedown = setDrawing;
window.onmouseup = setNotDrawing;
window.onmouseleave = setNotDrawing;
E_DRAWING_BOARD.addEventListener("contextmenu", function(e){
	e.preventDefault();
});

// Instant execution:

redraw(16, 16);
resizeBoard (I_currentResH, I_currentResV);

// Create an element, with a class
// lmao = document.createElement('div');
// lmao.setAttribute('class', 'lmaoo')
// E_DRAWING_BOARD.appendChild(lmao)