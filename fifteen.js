var puzzlearea;
var squares;
var validMoves;
var emptySpaceX;
var emptySpaceY;
var state = false;
var moveX;
var moveY;

window.onload = function()
{
	var validMoves=[];
	var emptySpaceX = 300; // Initial values for the empty space
	var emptySpaceY = 300;
	var moveX = 0;
	var moveY = 0;


	puzzlearea = document.getElementById("puzzlearea");
	squares = puzzlearea.getElementsByTagName("div");
	validMoves.push(emptySpaceX);
	validMoves.push(emptySpaceY);

	initialize(squares, validMoves);
}


	// Used to initialize the grid when the game first starts
function initialize(squares, validMoves)
{
	for (var i=0; i<squares.length; i++)
	{
		// Assigns the puzzlepiece css class styling to each of the pieces 
		squares[i].className = "puzzlepiece";

		squares[i].style.left = (i % 4 * 100) + "px";
		squares[i].style.top = (parseInt(i / 4) * 100) + "px";
		squares[i].style.backgroundPosition = "-" + squares[i].style.left + " " + "-" + squares[i].style.top;

	

		squares[0].onclick  = function() {clicked(0, validMoves);}
		squares[1].onclick  = function() {clicked(1, validMoves);}
		squares[2].onclick  = function() {clicked(2, validMoves);}
		squares[3].onclick  = function() {clicked(3, validMoves);}
		squares[4].onclick  = function() {clicked(4, validMoves);}
		squares[5].onclick  = function() {clicked(5, validMoves);}
		squares[6].onclick  = function() {clicked(6, validMoves);}
		squares[7].onclick  = function() {clicked(7, validMoves);}
		squares[8].onclick  = function() {clicked(8, validMoves);}
		squares[9].onclick  = function() {clicked(9, validMoves);}
		squares[10].onclick = function() {clicked(10, validMoves);}
		squares[11].onclick = function() {clicked(11, validMoves);}
		squares[12].onclick = function() {clicked(12, validMoves);}
		squares[13].onclick = function() {clicked(13, validMoves);}
		squares[14].onclick = function() {clicked(14, validMoves);}
		
	}
}
	
function clicked(index, Moves){	
	//console.log(this.style.top);
	var looo = squares[index].style.left;
	var t = squares[index].style.top;

	console.log(looo);
	console.log("Top: " + t);

	// Code to check if the piece can be moved


	if (isValidMove(looo, t, Moves) === true)
	{
		SwitchPieces(index, moveX, moveY);
	}						
}

function isValidMove(pieceX, pieceY, Moves)
{
		var X = parseInt(pieceX);
		var Y = parseInt(pieceY);

		if ((Moves[0] === (X + 100)) && (Moves[1] === (Y + 100))){
			console.log("Add XY");
			//state = true;
			/*if (Moves[0] === (pieceX + 100)){
				moveX = pieceX + 100;
				console.log("Add X");
				state = true;
			}

			/*if (Moves[1] === (pieceY + 100)){
				moveY = pieceY + 100;
				console.log("Add Y");
				state = true;
			}*/

			state = false;
			return state;
		}

		if (!(Moves[1] === (Y + 100)) && ((Moves[0] === (X + 100)))) {
				console.log("Add AY");
				console.log(X);	
				console.log(Y);
				state = true;			
		}

		if ((Moves[1] === (Y + 100)) && (!(Moves[0] === (X + 100)))) {
				console.log("Add SY");
				state = true;			
		}

		if (Moves[0] === (X + 100)) {
			moveX = X + 100;
			console.log("Add X");
			state = true;
		}

		if (Moves[1] === (Y + 100)) {
			moveY = Y + 100;
			console.log("Add Y");
			state = true;
		}

		if (Moves[0] === (X - 100)){
			moveX = X - 100;
			console.log("Sub X");
			state = true;
		}

		

		if (Moves[1] === (Y - 100)){
			moveY = Y - 100;
			console.log("Sub Y");
			state = true;	
		}
		return state;

	
}

function SwitchPieces(i, moveX, moveY)
{
			// Swap X positions
			var temp = squares[i].style.left;
			squares[i].style.left = moveX + "px";
			emptySpaceX = temp;

			// Swap Y positions
			temp = squares[i].style.top;
			squares[i].style.top = moveY + "px";
			emptySpaceY = temp;
			//ValidMoves(emptySpaceX, emptySpaceY);		
}


function ValidMoves(newX, newY)
{
	var tempX = newX;
	var tempY = newY;

	// Resets the array 
	validMoves = [];

	validMoves.push(tempX);
	validMoves.push(tempY);
	
	
}

	
