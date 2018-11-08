/*							
						EXTRA FEATURE
			-------------------------------
>>	Change Background Image upon seletion of the check box

*/


var puzzlearea;
var squares;
var validMoves;
var emptySpaceX;
var emptySpaceY;
var state = false;
var button;				
var picture= 0;
var all;
var changePicChkBoxlabel; //Change Background Image Label
var coors; //Stores Current Tile X and Y Coordinates


window.onload = function()
{
	validMoves=[]; 	//Array to store Empty Space Coordinates
	all = [];		//Array used to store 	
	emptySpaceX = 300; // Initial X value for the empty space
	emptySpaceY = 300; // Initial X value for the empty space

	button = document.getElementById("shufflebutton") 
	puzzlearea = document.getElementById("puzzlearea");
	squares = puzzlearea.getElementsByTagName("div");

	validMoves.push(emptySpaceX); //Pushes X and Y coordinates to validMoves 
	validMoves.push(emptySpaceY);

	
	setUpCheckboxes();			//Creares Checkbox to appear on screen
	initialize(squares);		//Initialises the Grid


	button.onclick = function() {shuffle(all);}		//When the shuffle button is clicked the tiles are shuffled randomly
	
	
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

	squares[0].onmouseover = function() {mouseOver(0)};
	squares[1].onmouseover = function() {mouseOver(1)};
	squares[2].onmouseover = function() {mouseOver(2)};
	squares[3].onmouseover = function() {mouseOver(3)};
	squares[4].onmouseover = function() {mouseOver(4)};
	squares[5].onmouseover = function() {mouseOver(5)};
	squares[6].onmouseover = function() {mouseOver(6)};
	squares[7].onmouseover = function() {mouseOver(7)};
	squares[8].onmouseover = function() {mouseOver(8)};
	squares[9].onmouseover = function() {mouseOver(9)};
	squares[10].onmouseover = function() {mouseOver(10)};
	squares[11].onmouseover = function() {mouseOver(11)};
	squares[12].onmouseover = function() {mouseOver(12)};
	squares[13].onmouseover = function() {mouseOver(13)};
	squares[14].onmouseover = function() {mouseOver(14)};
}

// Used to initialize the grid when the game first starts
function initialize(squares)
{
	for (var i=0; i<squares.length; i++)
	{
		// Assigns the puzzlepiece css class styling to each of the pieces 
		squares[i].className = "puzzlepiece";

		squares[i].style.left = (i % 4 * 100) + "px";
		squares[i].style.top = (parseInt(i / 4) * 100) + "px";
		squares[i].style.backgroundPosition = "-" + squares[i].style.left + " " + "-" + squares[i].style.top;

		all.push(i); 
	}
}

function getCoordinates(index){
	var Leftposition = squares[index].style.left;
	var TopPosition = squares[index].style.top;
	var a = [Leftposition, TopPosition];
	return a
}

function mouseOver(i){
	coords = getCoordinates(i); //Gets the Coordinate of the current Tile
	if (isValidMove(coords[0], coords[1], validMoves)){
		squares[i].className += " movablepiece";
	}
	state = false;
}

	
function clicked(index, Moves){	
	var Leftposition = squares[index].style.left;
	var TopPosition = squares[index].style.top;
	
	// Code to check if the piece can be moved
	if (isValidMove(Leftposition, TopPosition, validMoves))
	{
		SwitchPieces(index, Moves); //Exchanges Empty Space with Tile clicked on
	}						
}


//Checks if Tile Can be Swapped with the Empty Tile if right next to it
function isValidMove(X, Y, Moves)
{
		var X = parseInt(X); //X coordinate of Tile
		var Y = parseInt(Y); //Y coordinate of Tile

		if ((Moves[1] === Y) && (Moves[0] === (X - 100)) || ((Moves[1] === (Y - 100)) && (Moves[0] === X)) || 
			((Moves[1] === (Y + 100)) && (Moves[0] === X)) || ((Moves[1] === Y)  && (Moves[0] === (X + 100)))) {
			state = true;			
		}
		
		return state;
}

function SwitchPieces(index, Moves)
{
	// Swap X positions
	var tempX = squares[index].style.left;
	squares[index].style.left = Moves[0] + "px";

	// Swap Y positions
	var tempY = squares[index].style.top;
	squares[index].style.top = Moves[1] + "px";

	ValidMoves = []; //Resets Empty Space Array
	validMoves = [parseInt(tempX), parseInt(tempY)]	 //Stores new empty tile's X and Y coordinates
	state = false; //When a tile is clicked isValidMove will check if move is allowed
}

//Shuffles tiles
function shuffle(array) {
    var input = []; //Array used to store random integer values between 0-14 inclusive

    if (changePicChkBox.checked) //If selected then the user can change the Background image of the tiles
	{
		changeBackground();		//Calls the function to change the Grid Background Image
	}

    for (var i = 0; i <= array.length-1; i++) { 
        var randomIndex = Math.floor(Math.random()*(i+1)); //
        var itemAtIndex = array[randomIndex]; 
        
        array[randomIndex] = array[i]; 
        array[i] = itemAtIndex;
        input.push(itemAtIndex);
    }

    array = input;
    
    for (var i = 0; i < 15; i++) {
    	SwitchPieces(array[i], validMoves); //Shuffles Tiles with Empty Tile
    }
   
}


function changeBackground() {
	var listOfPics = ["background.jpg","background2.jpg","background3.jpg","background4.jpg"];
	var rndNum = Math.floor(Math.random() * listOfPics.length);

		
	if (picture.length === 0)
	{
		picture = "background.jpg";
	}
		
	// Used to prevent the random number from pointing to the same picturethat's already in use	
	else
	{
		// Runs until the rndNum points to a different pic
		while (picture === listOfPics[rndNum]) 
		{
			rndNum = Math.floor(Math.random() * listOfPics.length);	
		}
	}

	// Applies the new pic to each square
	for (var x = 0; x < squares.length; x++)
	{
		squares[x].style.backgroundImage = "url('" + listOfPics[rndNum] +"')";
	}
}


//Creates the label and input mechanism so that the checkbox may be selected
function setUpCheckboxes()
	{
		// Creates the text label for the checkbox
		changePicChkBoxlabel = document.createElement('label');
		changePicChkBoxlabel.htmlFor = "changePicChkBox1";
		changePicChkBoxlabel.appendChild(document.createTextNode('Change background'));

		//Creates the checkbox
		changePicChkBox = document.createElement("input");
	    changePicChkBox.type = "checkbox";
	    changePicChkBox.id = "changePicChkBox1";
	    
	    // Adds the label to the controls div in the html code before
	    // appending the checkbox so that the text instructions appear 
	    // before the checkbox control itself 		
		document.getElementById("controls").appendChild(changePicChkBoxlabel);
		document.getElementById("controls").appendChild(changePicChkBox);
}
