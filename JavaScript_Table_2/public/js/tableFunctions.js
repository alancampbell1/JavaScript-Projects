// allow deletion of cols 1 and 2 as light blue
// issue with red highlight in row selection


//This variable is used to keep track of where the location of the final grade column is.
var finalGradeLocation = 3;
var totalNumOfRows = 2;
var totalNumOfCols = 4;

/*
 *  This function is used to calculate the final score of each assignment. It also 
 *  puts final grades less than 40 in white text on a red background.
 *  
 */

function myFinalScoreCal() {

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
                sum += converted;   //If it is not empty, add the value to sum
                //Also increment numbers for the final calculation
                amountOfNumbers++;
            }
        }
        //Calculates the average, after the inside for loop has reached the end
        var average = sum / amountOfNumbers;
        //Updates the last cell with on the current row with this figure rounded.
        rows[i].cells[finalGradeLocation].innerHTML = "<td>" + Math.round(average) + "%" + "</td>";

        //This conditional removes the % if the result remains as NaN.
        if(rows[i].cells[finalGradeLocation].innerHTML == "NaN%"){
            rows[i].cells[finalGradeLocation].innerHTML = "NaN";
        }
        //This conditional calculates if the average is less than 40 and if so changes the colour scheme of the final cell
        if(average < 40){
                document.getElementById('myTable').rows[i].cells[finalGradeLocation].style.backgroundColor = "red";
                document.getElementById('myTable').rows[i].cells[finalGradeLocation].style.color = "white";
        }
        else{
                document.getElementById('myTable').rows[i].cells[finalGradeLocation].style.backgroundColor = "white";
                document.getElementById('myTable').rows[i].cells[finalGradeLocation].style.color = "black";
        }
    }
 }

 /*
  * This function adds a new row on a button click. Each cell in the row is assigned the appropriate
  * attributes based on already existing rows in the HTML.
  */

count = 1;
 function createNewRow(){
    var myTable = document.getElementById("myTable");
    var currentRow = myTable.insertRow(myTable.rows.length);
    var i = 0;
    while(i < myTable.rows[0].cells.length) {
        var cell = currentRow.insertCell(i);
        cell.innerHTML = "-";

        //This conditional sets the first cell's, i.e. the name cell, attributes to that of the cells
        //already created in the HTML.
        if(i == 0) {
            cell.setAttribute("Class", "leftAlignedCells");
            cell.setAttribute("contenteditable", "true");
            cell.setAttribute("onclick", "highlightRow(this)");
            cell.setAttribute("id", String(++count));
        }
        //This conditional sets the second's cell's , i.e. the ID cell, attributes to that of the cells
        //already created in the HTML.
        if(i == 1) {
            cell.setAttribute("Class", "leftAlignedCells");
            cell.setAttribute("contenteditable", "true");
        }
        //This conditional sets the third's cell's , i.e. the assignment cell, attributes to that of the cells
        //already created in the HTML.
        //This is carried across when subsequent columns are created too.
        if(i > 1 && i < myTable.rows[0].cells.length - 1){
            cell.setAttribute("Class", "rightAlignedCells");
            cell.setAttribute("contenteditable", "true");
        } 

        //This conditional sets the last cell's , i.e. the final grade cell, attributes to that of the cells
        //already created in the HTML.
        if(i == myTable.rows[0].cells.length - 1){
            cell.setAttribute("Class", "rightAlignedCells");
        }
        i++;
    }
    totalNumOfRows++;
}

/*
 * This function creates a new Column in the table and carries across from it all the attributes of the
 * header cell and assigment grades cells
 *
 */
var assignmentNumber = 2;
var countcol = -2;
function createNewCol(){
    //Stores the table in the variable myTable
    var myTable = document.getElementById("myTable");
    //Stores the current location of assignment 1, 2, 3...
    var currentPosition = myTable.rows[0].cells.length -1;
    //Calls a function that inserts a new column
    var topCell = myTable.rows[0].insertCell(currentPosition);
    //Updates the heading to Assignment plus the current assignment it is on
    topCell.innerHTML = "Assignment "+ assignmentNumber;
    //This matches the properties of the topCell to that of the others, i.e. in styling etc. 
    topCell.setAttribute("Class", "tableHeading");

    //This loops through the new row
    for(var i = 1; i < myTable.rows.length; i++){
        //The current cell is stored locally
        var cell = myTable.rows[i].insertCell(currentPosition);
        //It is assigned a "-""
        cell.innerHTML = "-";
        //It's other attributes are set according to the other assignment cells
        cell.setAttribute("Class", "rightAlignedCells");
        cell.setAttribute("contenteditable", "true");
    }
    //This pushes the final grade to the location at the end of the table
    finalGradeLocation++;
    topCell.setAttribute("id", String(--countcol));
    topCell.setAttribute("onclick", "highlightCol(this)");
    totalNumOfCols++;
    assignmentNumber++;
    //columnID++;
}

function makeCookie(){
    var totalRecords = "";
    for (var i = 0; i < totalNumOfRows; i++) {
        //This loop goes through each cell
        for(var j = 0; j < totalNumOfCols; j++){
            var currentRec = document.getElementById('myTable').rows[i].cells[j].innerHTML;
            totalRecords = totalRecords + ',' + currentRec;
        }
    }

    var exdays = 50;
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    document.cookie = "elements=" + totalRecords;
    document.cookie = "cols=," + totalNumOfCols;
    document.cookie = "rows=," + totalNumOfRows;
    document.cookie = "expires="+ d.toUTCString();
    console.log(document.cookie);
}

function getCookie(cname){
    //Stores current rows and cols
    var OldRows = totalNumOfRows;
    var OldCols = totalNumOfCols;
    
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        console.log(c);

        //This nested loop creates the number of columns
        var splitElements = c.split(',');
        for(var x = 0; x < splitElements.length; x++){
            if(splitElements[x] == 'cols='){
                var difference = Math.abs(OldCols - splitElements[x + 1]);
                console.log('The difference is: ' + difference);
                var smallestValue = 0;
                while(smallestValue < difference){
                    createNewCol();
                    smallestValue++;
                }
            }
        }
    } 

    //This block of code finds and populates the number of rows
    var rowsInfo = ca[3];
    var splitElements2 = rowsInfo.split(',');
                var smallestValue = 0;
                var rowAmount = splitElements2[1] - 2;
                while(smallestValue < rowAmount){
                    createNewRow();
                    smallestValue++;
                }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }

   //This block of code populates the table with the saved data
    var elementsInfo = ca[1];
    console.log(elementsInfo);
    var individualElements = elementsInfo.split(',');
    var startingpoint = 1;
    var table = document.getElementById("myTable");
        for (var i = 0; i < table.rows.length; i++) {
            for(var j = 0; j < table.rows[i].cells.length; j++){
                table.rows[i].cells[j].innerHTML = individualElements[startingpoint];
                startingpoint++;
            }
        }
myFinalScoreCal();

}
/*
 * This function highlights a specific row double clicked by the user. It, however,
 * does not allow the highlighting of the top row.
 *
 */

var white = "white";
var lightblue = "lightblue";
function highlightRow(elem){

    var rowID = elem.id;
    //console.log(rowID);
    //Gathers the contents of the table in local variables
    var x = document.getElementById("myTable").rows.length;
    var y = document.getElementById("myTable").rows[0].cells.length;
    var table = document.getElementById("myTable");
    //If the table is not equal to blue colour code execute the conditional
    if(table.rows[Number(rowID)].cells[0].style.backgroundColor == white){
        //A for loop is opened that goes through each cell in the row
        var j = 0;
        while (j < y) {
          //and changes the colour from white to blue
            table.rows[Number(rowID)].cells[j].style.backgroundColor = lightblue;
            table.rows[Number(rowID)].cells[j].style.color = "black";
            j++;
        }
    }

    //This else statement executes the opposite returning all lightblue backgrounds in a Column to White
    else {
        var j = 0;
         while(j < y) {
            table.rows[Number(rowID)].cells[j].style.backgroundColor = white;
            table.rows[Number(rowID)].cells[j].style.color = "black";
            j++;
        }
        /*

        TODO: Get last cell back to red and white if already calculated. This code kept throwing errors

        var lastCell = document.getElementById("myTable").rows.length;
        var finalGradeTotal = table.rows[Number(rowID)].cells[lastCell].innerHTML;
        var finalGradeTotalDivided = finalGradeTotal.split('');
        var finalGradeTotalCombined = finalGradeTotalDivided[0] + finalGradeTotalDivided[1];
        console.log(finalGradeTotalCombined);

        if(table.rows[Number(rowID)].cells[lastCell].style.backgroundColor == lightblue && finalGradeTotalCombined < 40){
                table.rows[Number(rowID)].cells[lastCell].style.backgroundColor = "red";
                table.rows[Number(rowID)].cells[lastCell].style.color = "white";
        }
        */
    }
}

/*
 * This function highlights a specific column double clicked by the user. It, however,
 * does not allow the highlighting of the Final Grade Column
 */

function highlightCol(elem){
    var columnID = elem.id;
    //Gathers the contents of the table in local variables
    var index = Number(Math.abs(Number(columnID)));
    var x = document.getElementById("myTable").rows.length;
    var y = document.getElementById("myTable").rows[0].cells.length;
    var table = document.getElementById("myTable");
    //If the table is equal to a white colour then execute the conditional
    if(table.rows[1].cells[index].style.backgroundColor == white){
        //A for loop is opened that goes through each cell in the column
        var i = 1;
        while(i < x) {
            //and changes the colour from white to blue
            table.rows[i].cells[index].style.backgroundColor = lightblue;
            i++;
        }
    }     
    //This else statement executes the opposite returning all lightblue backgrounds in a Column to White
    else{
        var i = 1;
        while (i < x) {
            table.rows[i].cells[index].style.backgroundColor = white;
            i++;
        }
    }
}

/*
 * This function finds the specific row that is highlighted and sends it to a function to be deleted
 *
 */


var rowLocation = "";
var rowNum;
var deletedRows = true;
function deleteHighlightRows(){
    //Gets all the table elements
    rowLocation = "";
    var table = document.getElementById("myTable");
    var x = table.rows.length;
    var y = table.rows[0].cells.length;

    for(var i = 1; i < x; i++){
        if(table.rows[i].cells[0].style.backgroundColor == lightblue){
            for(var j = 0; j < table.rows[i].cells.length; j++) {
                if(j === table.rows[i].cells.length-1)
                    rowLocation += table.rows[i].cells[j].innerHTML;
                else
                    rowLocation += table.rows[i].cells[j].innerHTML + ";"
            }
            x--;
            rowNum = i;
            //Calls the function to delete the specific row
            //deleteARow(i);

            var mylength = myTable.rows.length;
            //Loops through the row's after the deleted ones
            for(var a = i + 1; a < mylength; a++){
            //Updates the ids of these rows 
                myTable.rows[a].cells[0].setAttribute("id", String(a - 1));
            }
            //calls a function to delete the specific row
            myTable.deleteRow(i);
            //count--;
        }
    }
    totalNumOfRows--;
    var deletedRows = false;
    changeAccessToRows();
}

//This function denies access to the Un-delete row button until deleteHighlightRows() has been selected
function changeAccessToRows(){
    document.getElementById("myBtn1").disabled = false;
}

/*
 * This function finds the specific row that is highlighted and sends it to a function to be deleted
 *
 */

var colLocation = "";
var colSpecificPoint;
function deleteHighlightedColumns(){
    var myTable = document.getElementById("myTable");
    var x = myTable.rows.length;
    var y = myTable.rows[0].cells.length;
    var a = 2;
    var num = 1;
    for(var a = 2; a < y; a++){
        if(myTable.rows[1].cells[a].style.backgroundColor == lightblue){
            y--;
            colSpecificPoint = a;
            var rowA = myTable.rows.length;
            var rowB = myTable.rows[0].cells.length;
            for(var i = a+1; i < rowB-1; i++){
                myTable.rows[0].cells[i].setAttribute("id", String((i-1) * -1));
            }
            for(var i = 0; i < rowA; i++){
                colLocation += myTable.rows[i].cells[a].innerHTML + ";";
                myTable.rows[i].deleteCell(a);
            }
            countcol++;
            //Function called to update the finalgrades() method after a column deletion
            finalGradeLocation--;
            myFinalScoreCal();
        }
    }
    countcol++;
    //Updates the Assignment numbers in the column headings
    updateAssignments();
    changeAccessToCols();
    totalNumOfCols--;
}

function updateAssignments(){
    var AssignmentNo = 1;
    var y = myTable.rows[0].cells.length;
    for(var a = 2; a < y-1; a++){
        myTable.rows[0].cells[a].innerHTML = "Assignment " + (AssignmentNo++);
    }
}

//This function denies access to the Un-delete column button until deleteHighlightColumns() has been selected
function changeAccessToCols(){
    document.getElementById("myBtn2").disabled = false;
}

/*
 * This function reloads a deleted Row back into a Table
 */


function reloadRowBackIntoTable(){

    var myTable = document.getElementById("myTable");
    var currentRow = myTable.insertRow(rowNum);
    var arr = rowLocation.split(";");
    var i = 0;

    while(i < myTable.rows[0].cells.length) {
        //Sets the contents stored in the array back into the row's cells
        var cell = currentRow.insertCell(i);
        cell.innerHTML = String(arr[i]);
        //This sets the row cell to the far left
        if(i == 0) {
            cell.setAttribute("onclick", "highlightRow(this)");
            cell.setAttribute("id", String(rowNum));
            cell.setAttribute("contenteditable", "true");
        }
        //This sets the row cell to the second column type
        else if(i == 1){
            cell.setAttribute("Class", "leftAlignedCells");
            cell.setAttribute("contenteditable", "true");
        }
        //This sets anything after row 2 and before the final grade column
        else if(i > 1 && i < myTable.rows[0].cells.length - 1){
            cell.setAttribute("Class", "rightAlignedCells");
            cell.setAttribute("contenteditable", "true");
            }
        //This sets the cell in the last column
        else {
            cell.setAttribute("Class", "rightAlignedCells");
        }
        i++;
    }
    count++;
    //Updates the ID's accordingly
    var i = rowNum + 1;
    while(i < myTable.rows.length){
        myTable.rows[i].cells[0].setAttribute("id", String(i));
        i++;
    }

    deletedRows = false;
    document.getElementById("myBtn1").disabled = true;
}

function reloadColumnBackIntoTable(){
    var myTable = document.getElementById("myTable");
    var newCell = myTable.rows[0].insertCell(colSpecificPoint);
    newCell.innerHTML = "Assignment " + (assignmentNumber - 2);
    newCell.setAttribute("Class", "tableHeading");
    newCell.setAttribute("id", String(--countcol));
    newCell.setAttribute("onclick", "highlightCol(this)");

    var arr = colLocation.split(";");
    var i = 1;
    while(i < myTable.rows.length){
        var cell = myTable.rows[i].insertCell(colSpecificPoint);
        cell.innerHTML = String(arr[i]);
        cell.setAttribute("Class", "rightAlignedCells");
        cell.setAttribute("contenteditable", "true");
        i++;
    }

    var num = 1;
    var z = 2;
    while(z < myTable.rows[0].cells.length-1){
        myTable.rows[0].cells[i].innerHTML = "Assignment " + (num++);
        z++;   
    }
    colLocation = "";
    finalGradeLocation++;
    //Denies access again to the button relating to loading data back in
    document.getElementById("myBtn2").disabled = true;
}
