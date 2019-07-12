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
			currentRow.appendChild (currentColumn);
		}
		grid.appendChild (currentRow);
		
	}

	return grid;
}





E_DRAWING_BOARD.appendChild (createGrid(16,16));

// Create an element, with a class
// lmao = document.createElement('div');
// lmao.setAttribute('class', 'lmaoo')
// E_DRAWING_BOARD.appendChild(lmao)