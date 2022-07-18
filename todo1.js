'use strict';
let tasksArray = [];
let liCounter = 0;
let displayCounter = document.querySelector('#display');
let toDoInput = document.querySelector('.todo-input');
let formData = document.querySelector('.todo-form');
formData.addEventListener('submit', function (event) {
    event.preventDefault();
    if (toDoInput.value.trim() !== '') {
        tasksArray.push({ id: Date.now(), text: toDoInput.value, status: 0 });
        toDoInput.value = "";
        liCounter++;
        displayCounter.innerHTML = liCounter;
    }
    else {
        window.alert("Please Enter Any Task");
    }
    console.log(tasksArray);
    render();
});

function render() {
    let ulAdded = document.querySelector('.ul-list');
    ulAdded.innerHTML = '';
    let inProgressUl = document.querySelector('.inprogress');
    inProgressUl.innerHTML = '';
    let completeUl = document.querySelector('.complete');
    completeUl.innerHTML = '';

    for (let i = 0; i < tasksArray.length; i++) {
        let addLi = document.createElement('li');
        addLi.setAttribute('id', tasksArray[i].id);
        addLi.append(document.createTextNode(tasksArray[i].text));
        if (tasksArray[i].status == 0) {
            ulAdded.append(addLi);
            deleteId(addLi);
            StartId(addLi);
        }
        else if (tasksArray[i].status === 1) {
            inProgressUl.append(addLi);
            deleteId(addLi);
            DoneId(addLi);
        }
        else if (tasksArray[i].status === 2) {
            completeUl.append(addLi);
            deleteId(addLi);
        }
    }
}
function deleteId(addLi) {
    let deleteButton = document.createElement("Button");
    deleteButton.append(document.createTextNode("Remove"));
    addLi.append(deleteButton);
    deleteButton.addEventListener('click', function () {
        tasksArray = tasksArray.filter(em => em.id != addLi.getAttribute('id'));
        addLi.remove();
        if (liCounter > 0) {
            liCounter--;
            displayCounter.innerHTML = liCounter;
        }
    })
}
function StartId(addLi) {
    let startButton = document.createElement("Button");
    startButton.append(document.createTextNode("Start"));
    addLi.append(startButton);
    startButton.addEventListener('click', function () {
        tasksArray[tasksArray.findIndex(e => e.id == addLi.getAttribute('id'))].status = 1;
        render();
        if (liCounter > 0) {
            liCounter--;
            displayCounter.innerHTML = liCounter;
        }
    })
}
function DoneId(addLi) {
    let Done = document.createElement("button");
    Done.append(document.createTextNode("Done"));
    addLi.append(Done);
    Done.addEventListener('click', function () {
        tasksArray[tasksArray.findIndex(m => m.id == addLi.getAttribute('id'))].status = 2;
        render();
    })
}
