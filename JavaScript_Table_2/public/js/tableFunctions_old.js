
//This variable is used to keep track of where the location of the final grade column is.
var finalGradeLocation = 3;

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
    
}

function makeCookie(){

    var path = "";
    var cookiePath = "";
    var x = document.getElementById("myTable").rows.length;
    var y = document.getElementById("myTable").rows[0].cells.length;

    for(var i = 0; i < x; i++){
        for(var j = 0; j < y; j++){
            if(j === y-1){
                if(document.getElementById("myTable").rows[i].cells[j].innerHTML === "")
                {
                    path = path + " ";
                }
                else {
                    path = path + document.getElementById("myTable").rows[i].cells[j].innerHTML;
                    if(i === x-1){
                        cookiePath = cookiePath + document.getElementById("myTable").rows[i].cells[j].innerHTML;
                    }
                    else{
                        cookiePath = cookiePath + document.getElementById("myTable").rows[i].cells[j].innerHTML + ",";
                    }
                }
            }
            else {
                if (document.getElementById("myTable").rows[i].cells[j].innerHTML === " "){
                    path = path + " ,";
                }
                else {
                    path = path + document.getElementById("myTable").rows[i].cells[j].innerHTML + ",";
                    cookiePath = cookiePath + document.getElementById("myTable").rows[i].cells[j].innerHTML + ",";
                }
            }
        }
        if(i !== x-1){
            path = path + "\n";
        }
    }
    //document.getElementById("CSV").innerHTML = path;
    setCookie(cookiePath);
    //console.log(cookiePath);
    //console.log(path);
}

function setCookie(path){
    var x = document.getElementById("myTable").rows.length;
    var y = document.getElementById("myTable").rows[0].cells.length;
    document.cookie = "table="+path;
    document.cookie = "rows=" + x;
    document.cookie = "cols=" + y;
    console.log(document.cookie);
}


function getCookie(){

    //Stores the cookies
    var cookies = document.cookie.split(";");

    //Contents of table
    var cook = cookies[0].substring(6);
    var arr = cook.split(",");

    //Stores the number of cells
    var length = document.getElementById("myTable").rows.length * document.getElementById("myTable").rows[0].cells.length;

    //Returns the number of rows
    var rows = Number(cookies[1].substring(6));
    //Returns the number of columns
    var cols = Number(cookies[2].substring(6));

    //Stores current number of rows
    var x = document.getElementById("myTable").rows.length;
    //Stores current number of columns
    var y = document.getElementById("myTable").rows[0].cells.length;

    var recordx = x, recordy =y;
    var index = 0;

    var rowsToCreate = rows - x;
    //console.log(rowsToCreate);
    //If the cookie number of rows is greater than the current number, execute the following
    if(rows > x){
       //Loop through until the amount of rows is equal
       var rowsToCreate = rows - x;
       //console.log(rowsToCreate);
       for(var i = 0; i < rowsToCreate; i++) {
           //call on the createNewRow method
           console.log("in the row loop");
           createNewRow();
           recordx++;
       }
    }
   /*
   else if(rows < x){
       for(var i = 0; i < x-rows; i++){
           //document.getElementById("myTable").deleteRow(recordx-1);
           delRow(recordx-1);
           recordx--;
       }
   }
   */

   //If the cookie number of cols is greater than the current number, execute the following
   if(cols > y){
       //Loop through until the amount of cols is equal
       var colsToCreate = cols - y;
       //console.log(colsToCreate);
       for(var i = 0; i < colsToCreate; i++) {
            console.log("in the cols loop");
           //call on the createNewCol method
           createNewCol();
           recordy++;
       }
   }
   /*
   else if(cols < y){
       var position = document.getElementById("myTable").rows[0].cells.length -2;
       for(var i = 0; i < y-cols; i++){
           delCol(position);
           /*for(var j = 0; j < rows; j++){
               document.getElementById("myTable").rows[j].deleteCell(position);
           }*/
           /*
           recordy--;
       }
            
  }
    */

    /*
     * This nested loop is used to populate the table with data
     */

    /*
    for(var i = 0; i < rows; i++){
        for(var j = 0; j < cols; j++){
            document.getElementById("myTable").rows[i].cells[j].innerHTML = arr[index++];
        }
    }  
    */
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
 * This function is called from the deleteHighlightRows() function to delete the row that is highlighted
 * in light blue
 */
/*
function deleteARow(certainLocation){
    //Stores the table variable
    var myTable = document.getElementById("myTable");
    var mylength = myTable.rows.length;
    //Loops through the row's after the deleted ones
    for(var x = certainLocation + 1; x < mylength; x++){
        //Updates the ids of these rows 
        myTable.rows[x].cells[0].setAttribute("id", String(x - 1));
    }
    //calls a function to delete the specific row
    myTable.deleteRow(certainLocation);
    //count--;
}
*/
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
}

/*
 * This function is called from the deleteHighlightCols() function to delete the column that is highlighted
 * in light blue
 

var colLocation = "";
var colNumHistory;
function deleteAColumn(certainLocation){
    var myTable = document.getElementById("myTable");
    var a = myTable.rows.length;
    var b = myTable.rows[0].cells.length;
    for(var i = certainLocation+1; i < b-1; i++){
        myTable.rows[0].cells[i].setAttribute("id", String((i-1) * -1));
    }
    for(var i = 0; i < a; i++){
        colLocation += myTable.rows[i].cells[certainLocation].innerHTML + ",";
        myTable.rows[i].deleteCell(certainLocation);
    }
    countcol++;

    //Function called to update the finalgrades() method after a column deletion
    finalGradeLocation--;
    myFinalScoreCal();
}
*/

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
}

/*
 * This function reloads a deleted Row back into a Table
 */


function reloadRowBackIntoTable(){
    var myTable = document.getElementById("myTable");
    var currentRow = myTable.insertRow(rowNum);
    var arr = rowLocation.split(",");
    for(var i = 0; i < myTable.rows[0].cells.length; i++) {
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
    }
    count++;
    for(var i = rowNum + 1; i < myTable.rows.length; i++){
        myTable.rows[i].cells[0].setAttribute("id", String(i));
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
    for(var i = 1; i < myTable.rows.length; i++){
        var cell = myTable.rows[i].insertCell(colSpecificPoint);
        cell.innerHTML = String(arr[i]);
        cell.setAttribute("Class", "rightAlignedCells");
        cell.setAttribute("contenteditable", "true");
        //cell.setAttribute("id", String(--countcol));
    }
    var num = 1;
    for(var i = 2; i < myTable.rows[0].cells.length-1; i++){
        myTable.rows[0].cells[i].innerHTML = "Assignment " + (num++);      
    }
    colLocation = "";
    finalGradeLocation++;
    //countcol--;
}
