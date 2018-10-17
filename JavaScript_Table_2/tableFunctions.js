
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
    var row = myTable.insertRow(myTable.rows.length);
    for(var i = 0; i < myTable.rows[0].cells.length; i++) {
        var cell = row.insertCell(i);
        cell.innerHTML = "-";

        //This conditional sets the first cell's, i.e. the name cell, attributes to that of the cells
        //already created in the HTML.
        if(i === 0) {
            cell.setAttribute("Class", "leftAlignedCells");
            cell.setAttribute("contenteditable", "true");
            cell.setAttribute("ondblclick", "highlightRow(id)");
            cell.setAttribute("id", String(++count));
        }
        //This conditional sets the second's cell's , i.e. the ID cell, attributes to that of the cells
        //already created in the HTML.
        if(i === 1) {
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
        if(i === myTable.rows[0].cells.length - 1){
            cell.setAttribute("Class", "rightAlignedCells");
        }
    }
    totalNumOfRows++;
}

/*
 * This function creates a new Column in the table and carries across from it all the attributes of the
 * header cell and assigment grades cells
 *
 */

var countcol = -2;
function createNewCol(){
    //Stores the table in the variable myTable
    var myTable = document.getElementById("myTable");
    //Stores the current location of assignment 1, 2, 3...
    var currentPosition = myTable.rows[0].cells.length -1;
    //Calls a function that inserts a new column
    var topCell = myTable.rows[0].insertCell(currentPosition);
    //Updates the heading to Assignment plus the current assignment it is on
    topCell.innerHTML = "Assignment "+(myTable.rows[0].cells.length -3);
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
    topCell.setAttribute("ondblclick", "highlightCol(id)");
    totalNumOfCols++; 
}

function makeCookie(){

    //document.cookie = "username=Alan; expires=Thu, 18 Dec 2055 12:00:00 UTC; path=/";
    //document.cookie = "cols=" + totalNumOfCols;
    //document.cookie = "rows=" + totalNumOfRows;

    //var totalRecords = document.getElementById('myTable').rows[0].cells[0].innerHTML;
    var totalRecords = "";
    for (var i = 0; i < totalNumOfRows; i++) {
        //This loop goes through each cell
        for(var j = 0; j < totalNumOfCols; j++){
            var currentRec = document.getElementById('myTable').rows[i].cells[j].innerHTML;
            totalRecords = totalRecords + ',' + currentRec;

            //The current cell is stored in currentCell
            //var currentCell = document.getElementById("myTable").rows[i].cells[j].innerHTML;
            
        }
    }
    var exdays = 50;
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    //var expires = "expires="+ d.toUTCString();

    //document.cookie = "expires="+ d.toUTCString();
    document.cookie = "elements=" + totalRecords;
    document.cookie = "cols=," + totalNumOfCols;
    document.cookie = "rows=," + totalNumOfRows;
    document.cookie = "expires="+ d.toUTCString();
    console.log(document.cookie);
}
/*
function deleteCookie(){
    document.cookie = "expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}
*/


function getCookie(cname){
    //Stores current rows and cols
    var OldRows = totalNumOfRows;
    var OldCols = totalNumOfCols;

    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        console.log(c);

        //TODO: EXTRACT THE COLUMNS NUMBER AND CALL THE CREATE NEW COL FUNCTION
        //TODO: EXTRACT THE ROWS NUMBER AND CALL THE CREATE NEW ROW FUNCTION
        //TODO: EXTRACT THE ELEMENTS NUMBER AND CALL THE CREATE NEW ELEMENTS FUNCTION

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
        
        var newSplitElements = c.split(',');
        
        for(var x = 0; x < newSplitElements.length; x++){
            if(newSplitElements[x] == 'rows=,'){
                var difference = Math.abs(OldRows - newSplitElements[x + 1]);
                console.log('The difference in rows is: ' + difference);
                var smallestValue = 0;
                while(smallestValue < difference){
                    createNewRow();
                    smallestValue++;
                }
            }
        }
        
        //console.log(splitElements);
        /*
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
            //console.log(c);
        }
        */
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
   return "";
}

/*
 * This function highlights a specific row double clicked by the user. It, however,
 * does not allow the highlighting of the top row.
 *
 */

function highlightRow(id){
    //Gathers the contents of the table in local variables
    var x = document.getElementById("myTable").rows.length;
    var y = document.getElementById("myTable").rows[0].cells.length;
    var table = document.getElementById("myTable");
    //If the table is not equal to a lightblue colour execute the conditional
    if(table.rows[Number(id)].cells[0].style.backgroundColor !== "lightblue"){
        //A for loop is opened that goes through each cell in the row
        for (var j = 0; j < y; j++) {
          //and changes the colour from white to blue
            table.rows[Number(id)].cells[j].style.backgroundColor = "lightblue";
        }
    }     //This else statement executes the opposite returning all lightblue backgrounds in a Column to White
    else{
        for (var j = 0; j < y; j++) {
            table.rows[Number(id)].cells[j].style.backgroundColor = "white";
        }
    }
}

/*
 * This function highlights a specific column double clicked by the user. It, however,
 * does not allow the highlighting of the Final Grade Column
 */

function highlightCol(id){
    //Gathers the contents of the table in local variables
    var x = document.getElementById("myTable").rows.length;
    var y = document.getElementById("myTable").rows[0].cells.length;
    var table = document.getElementById("myTable");

    var index = Number(Math.abs(Number(id)));
    //If the table is not equal to a lightblue colour execute the conditional
    if(table.rows[1].cells[index].style.backgroundColor !== "lightblue"){
        //A for loop is opened that goes through each cell in the column
        for(var i = 1; i < x; i++) {
            //and changes the colour from white to blue
            table.rows[i].cells[index].style.backgroundColor = "lightblue";
        }
    }     //This else statement executes the opposite returning all lightblue backgrounds in a Column to White
    else{
        for (var i = 1; i < x; i++) {
            table.rows[i].cells[index].style.backgroundColor = "white";
        }
    }
}


/*
 * This function finds the specific row that is highlighted and sends it to a function to be deleted
 *
 */


var rowLocation = "";
var rowNum;
var deletedRows = false;
function deleteHighlightRows(){
    //Gets all the table elements
    rowLocation = "";
    var table = document.getElementById("myTable");
    var x = table.rows.length;
    var y = table.rows[0].cells.length;

    for(var i = 1; i < x; i++){
        if(table.rows[i].cells[0].style.backgroundColor === "lightblue"){
            for(var j = 0; j < table.rows[i].cells.length; j++) {
                if(j === table.rows[i].cells.length-1)
                    rowLocation += table.rows[i].cells[j].innerHTML;
                else
                    rowLocation += table.rows[i].cells[j].innerHTML + ","
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
    deletedRows = true;
    totalNumOfRows--;
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
    for(var a = 2; a < y; a++){
        if(myTable.rows[1].cells[a].style.backgroundColor === "lightblue"){
            y--;
            colSpecificPoint = a;
            var rowA = myTable.rows.length;
            var rowB = myTable.rows[0].cells.length;
            for(var i = a+1; i < rowB-1; i++){
                myTable.rows[0].cells[i].setAttribute("id", String((i-1) * -1));
            }
            for(var i = 0; i < rowA; i++){
                colLocation += myTable.rows[i].cells[a].innerHTML + ",";
                myTable.rows[i].deleteCell(a);
            }
            countcol++;
            //Function called to update the finalgrades() method after a column deletion
            finalGradeLocation--;
            myFinalScoreCal();
        }
    }
    countcol++;
    //This loop is used to update the Assignment titles after it has been updated by deletions
    var num = 1;
    for(var a = 2; a < y-1; a++){
        myTable.rows[0].cells[a].innerHTML = "Assignment " + (num++);
    }
    totalNumOfCols--;
}

/*
 * This function reloads a deleted Row back into a Table
 */


function reloadRowBackIntoTable(){
    var myTable = document.getElementById("myTable");
    var currentRow = myTable.insertRow(rowNum);
    var arr = rowLocation.split(",");
    var i = 0;

    while(i < myTable.rows[0].cells.length) {
        var cell = currentRow.insertCell(i);
        cell.innerHTML = String(arr[i]);
        //This sets the row cell to the far left
        if(i === 0) {
            cell.setAttribute("ondblclick", "highlightRow(id)");
            cell.setAttribute("id", String(rowNum));
            cell.setAttribute("contenteditable", "true");
        }
        //This sets the row cell to the second column type
        if(i === 1){
            cell.setAttribute("Class", "leftAlignedCells");
            cell.setAttribute("contenteditable", "true");
        }
        //This sets anything after row 2 and before the final grade column
        if(i > 1 && i < myTable.rows[0].cells.length - 1){
            cell.setAttribute("Class", "rightAlignedCells");
            cell.setAttribute("contenteditable", "true");
            }
        //This sets the cell in the last column
        if(i === myTable.rows[0].cells.length - 1){
            cell.setAttribute("Class", "rightAlignedCells");
        }
        i++;
    }
    count++;

    var i = rowNum + 1;
    while(i < myTable.rows.length){
        myTable.rows[i].cells[0].setAttribute("id", String(i));
        i++;
    }
}


function reloadColumnBackIntoTable(){
    var myTable = document.getElementById("myTable");
    var newCell = myTable.rows[0].insertCell(colSpecificPoint);
    newCell.innerHTML = "Assignment "+(colSpecificPoint-1);
    newCell.setAttribute("Class", "tableHeading");
    newCell.setAttribute("id", String(--countcol));
    newCell.setAttribute("ondblclick", "highlightCol(id)");

    var arr = colLocation.split(",");
    var i = 1;
    while(i < myTable.rows.length){
        var cell = myTable.rows[i].insertCell(colSpecificPoint);
        cell.innerHTML = String(arr[i]);
        cell.setAttribute("Class", "rightAlignedCells");
        cell.setAttribute("contenteditable", "true");
        //cell.setAttribute("id", String(--countcol));
        i++;
    }

    var num = 1;
    var z = 2;
    for(z < myTable.rows[0].cells.length-1){
        myTable.rows[0].cells[i].innerHTML = "Assignment " + (num++);
        z++;   
    }
    colLocation = "";
    finalGradeLocation++;
    //countcol--;
}
