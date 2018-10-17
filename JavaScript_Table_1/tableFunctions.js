/*
 * The purpose of this function is to calculate the averages across the different rows in the HTML table.
 *
 */

//This boolean is initially sent to false.
var buttonWasClicked = false;
//onkeyup activates this function
function keyWentUp(){
    //Conditional doesn't activate until after button clicked
    if(buttonWasClicked){
        //Calls the myFinalScoreCal() and countNumberofUnsubmits() after every button click
        myFinalScoreCal();
        countNumberOfUnsubmits();
    }
}

/*
 * The purpose of this function is to calculate the averages across the different rows in the HTML table.
 *
 */

function myFinalScoreCal() {

    //After first button click global variable is set to true to allow conditional in keyWentUp() to be inacted.
    buttonWasClicked = true;

   //Gets the table reference
   var table = document.getElementById("myTable");
   //Gets the table row reference
   var rows = table.rows;
   
   //Loops through each row
   for (var i = 1; i < rows.length; i++) {

   	 //Stores the cells of each row in a variable
     var cells = rows[i].cells;
     //Holds the total across the row
     var sum = 0;
     //Holds the amount of numbers added
	 var amountOfNumbers = 0;
	 	//nested for loop that goes through each cell on a particular row
     	for (var x = 2; x < (cells.length -1); x++) {
     		//Stores a current cell in variable cell, as a String
        	var cell = cells[x];
        	//Converts to a int into the variable converted
        	var converted = parseInt(cell.innerHTML);
        	//Conditional to make sure converted is not empty, if it is not empty
        	if(!isNaN(converted)) {       
          		sum += converted;	//If it is not empty, add the value to sum
          		//Also increment numbers for the final calculation
          		amountOfNumbers++;
       		}
     	}
     	//Calculates the average, after the inside for loop has reached the end
     	var average = sum / amountOfNumbers;
     	//Updates the last cell with on the current row with this figure rounded.
     	rows[i].cells[7].innerHTML = "<td>" + Math.round(average) + "%" + "</td>";

     	//This conditional removes the % if the result remains as NaN.
     	if(rows[i].cells[7].innerHTML == "NaN%"){
     		rows[i].cells[7].innerHTML = "NaN";
     	}
     	//This conditional calculates if the average is less than 40 and if so changes the colour scheme of the final cell
     	if(average < 40){
     			document.getElementById('myTable').rows[i].cells[7].style.backgroundColor = "red";
     			document.getElementById('myTable').rows[i].cells[7].style.color = "white";
     	}
     	else{
     		    document.getElementById('myTable').rows[i].cells[7].style.backgroundColor = "white";
     			document.getElementById('myTable').rows[i].cells[7].style.color = "black";
     	}
   	}

    countNumberOfUnsubmits();
 }

 /*
 * The purpose of this function is to validate that each row in the table is a valid number
 * else it will be returned to "-"
 */
function validNumber(){
    //This for loop loops through the the 11 rows
    for (var i = 1; i < 11; i++) {
        //This loop goes through each cell
        for(var j = 1; j < 7; j++){
            //The current cell is stored in currentCell
            var currentCell = Number(document.getElementById("myTable").rows[i].cells[j].innerHTML);
            if(j === 1){
                //If it is less than 0 and is not a number
                if ((currentCell) < 0 || isNaN(currentCell))
                    //Change it to an empty String
                    document.getElementById("myTable").rows[i].cells[j].innerHTML = "";
            }
            else{
                //If it is less than 0 or greater than 100 and is not a number carry out the following
                if ((currentCell) < 0 || (currentCell) > 100 || isNaN(currentCell))
                    //Change the cell to "unsubmitted""
                    document.getElementById("myTable").rows[i].cells[j].innerHTML = "unsubmitted";
            }
        }
    }
}

/*
 * This function counts the amount of no submissions and returns it to a piece of text.
 *
 */

function countNumberOfUnsubmits(){

    //This is a reference to the main table
    var table = document.getElementById("myTable");
    //Gets the table row reference
    var rows = table.rows;
    //This sum variable will increment when a non-number is found
    var sum = 0;
    //This loops through each row
    for (var i = 1; i < 11; i++) {
        //This stores the cells in each row
        var cells = rows[i].cells;
     
        //This loop goes through each cell
        for (var x = 1; x < 7; x++) {
            //The current cell is stored in variable cell
            var cell = cells[x];
            //This variable holds the int converted version
            var converted = parseInt(cell.innerHTML);
            //This conditional checks to see if it is a number. If so, then increment sum.
            if(isNaN(converted)) {       
               sum++; 
               //This line converts text that is "-" to a yellow background
               document.getElementById('myTable').rows[i].cells[x].style.backgroundColor = "yellow";
                }
                else {
                        //Then back to white with black text when changed back
                        document.getElementById('myTable').rows[i].cells[x].style.backgroundColor = "white";
                        document.getElementById('myTable').rows[i].cells[x].style.color = "black";
                }
            }
    }
    //console.log(sum);
    var answer = "The number of no submissions is: " + sum;
    //This returns the number of no submissions
    document.getElementById("demo").innerHTML = answer;
}

/*
 * This function creates the CSV version of the data inputted by the user. It uses a nested for loop to go through each value
 * and add it to the path variable where it is sent back to the textarea.
 */
 function createCSV(){
    var path = "";
    for(var x = 0; x < 11; x++){
        for(var y = 0; y < 8; y++){
            if(y === 7){
                //Each conditional statement checks the values and appends them onto path
                if(document.getElementById("myTable").rows[x].cells[y].innerHTML === "")
                    path = path + " ";
                else
                    path = path + document.getElementById("myTable").rows[x].cells[y].innerHTML;
            }
            else {
                if (document.getElementById("myTable").rows[x].cells[y].innerHTML === "")
                    path = path + " ,";
                else
                    path = path + document.getElementById("myTable").rows[x].cells[y].innerHTML + ",";
            }
        }
        if(x !== 10)
            path = path + "\n";
    }
    //By the end it sends it back to the textarea where it is printed to the screen
    document.getElementById("csv").innerHTML = path;
}