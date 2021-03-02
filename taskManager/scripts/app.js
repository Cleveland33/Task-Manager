var isItImportant = false;
var isDetailsVisible = true;

function toggleDetailsVisibility() {
    //hide/show the capture
    if(isDetailsVisible) {
        $("#capture").hide();
        isDetailsVisible = false;
    }
    else {
        $("#capture").show();
        isDetailsVisible = true;
    }
}

function toggleImportant() {
    console.log("Icon Clicked");


    if (!isItImportant){        
        $("#iImportant").removeClass("far").addClass("fas");
        isItImportant = true;
    } else {
        isItImportant = false;
        $("#iImportant").removeClass("fas").addClass("far");
    }
}

function saveTask() {
    console.log("Save Clicked")

    var title =$("#txtTitle").val();
    var date =$("#txtDate").val();
    var status =$("#selStatus").val();
    var location =$("#txtLocation").val();
    var color =$("#txtColor").val();
    var desc =$("#txtDesc").val();
   
    var myTask = new Task(0, title, isItImportant, date, status, location, color, desc);
    
    console.log(myTask);
    //save to server

    //display task
    displayTask(myTask);
    $(document.body).append('title','isItImportant','date','status','location','color');
}

function displayTask(task) {
    //create the syntax
    var syntax = `<div>${task.title}</div>`;

    //append the syntax to existing html
    $("#tasks-list").append(syntax);
}

function init() {
    console.log("Task Manager");

    //events
    $("#iImportant").click(toggleImportant);
    $("#btnSave").click(saveTask);
    $("#btnDetails").click(toggleDetailsVisibility);
    
}

window.onload = init;


/** Homework class 2
   * get the values from the input fields and put them into variables
   */

/*

TASK
-id
-title
-date & time
-important
-description
-status
-location
-color

*/