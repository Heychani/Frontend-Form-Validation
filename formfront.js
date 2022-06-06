const toDo = [];
let textString;
//console.log("document.getElementById('taskName') is: ");
//console.log(document.getElementById("taskName"));
//console.log("document.getElementById('taskName').value is: " + document.getElementById("taskName").value);
let dateString;

class task {
    constructor(taskText, date) {
        this._text = taskText;
        this._date = date;
    };

    get getTask() {
        return this._text;
    }
};

/*
function task(taskText, date) {
this.text = taskText;
this.date = date;
}
*/

function addTask() {
    textString = document.getElementById("taskName").value;
    //console.log("document.getElementById('taskName') is: ");
    //console.log(document.getElementById("taskName"));
    //console.log("document.getElementById('taskName').value is: " + document.getElementById("taskName").value);
    dateString = document.getElementById("taskDate").value;
    toDo.push(new task(textString, dateString));
    displayTasks();
}

function displayTasks() {
    for (let i = 0; toDo.length; i++) {
        let myLi = document.createElement("li");
        let taskT = document.createTextNode(toDo[i].getTask);
        myLi.appendChild(taskT);
        document.getElementById("myUl").appendChild(myLi);
    }
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ek sukkel om die function en die label te link sodat die function weet ek praat van die labels in HTML
function myValidation() {
    let text = document.getElementById('newtask').value;
    //console.log(text);
    if (text !== '') {
        return alert("You have successfully added a New Task!"); //ek wil he die task moet in gevul word, as daar nie iets ingevul is nie moet hy se dit moet ingevul word of well done dis ingevul
    }
    return alert("The task has not been filled in, please fill it in before submitting.");
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////