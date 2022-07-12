let tasksArray = [];
let counterLi = 0;
let Display = document.querySelector('#display')
let ToDoInput = document.querySelector('.todo-input');
let Cut = document.createElement("Button");
let Start = document.createElement("Button");
let formData = document.querySelector('.todo-form');
formData.addEventListener('submit', function (event) {
    event.preventDefault();
    if (ToDoInput.value.trim() !== '') {
        tasksArray.push({ id: Date.now(), text: ToDoInput.value, status: 0 })
        ToDoInput.value = "";
        counterLi++;
        Display.innerHTML = counterLi;
    }
    else {
        window.alert("Please Enter Any Task");
    }
    console.log(tasksArray);
    render();
});

function render() {
    var UlAdded = document.querySelector('.ul-list');
    UlAdded.innerHTML = '';
    var InprogressUl = document.querySelector('.inprogress')
    InprogressUl.innerHTML = '';
    var CompleteUl = document.querySelector('.complete');
    CompleteUl.innerHTML = '';

    for (let i = 0; i < tasksArray.length; i++) {
        let AddLi = document.createElement('li');
        AddLi.setAttribute('id', tasksArray[i].id);
        AddLi.append(document.createTextNode(tasksArray[i].text));
        if (tasksArray[i].status == 0) {
            // let AddLi = document.createElement('li');
            // AddLi.setAttribute('id', tasksArray[i].id);
            // AddLi.append(document.createTextNode(tasksArray[i].text));
            UlAdded.append(AddLi);
            deleteId(AddLi);
            StartId(AddLi);


        }
        else if (tasksArray[i].status === 1) {
            // let AddLi = document.createElement('li');
            // AddLi.setAttribute('id', tasksArray[i].id);
            // AddLi.append(document.createTextNode(tasksArray[i].text));
            InprogressUl.append(AddLi);
            deleteId(AddLi);
            DoneId(AddLi);

        }
        else if (tasksArray[i].status === 2) {
            // let AddLi = document.createElement('li');
            // AddLi.setAttribute('id', tasksArray[i].id);
            // AddLi.append(document.createTextNode(tasksArray[i].text));
            CompleteUl.append(AddLi);
            deleteId(AddLi);
        }
    }
}
function deleteId(AddLi) {
    let Cut = document.createElement("Button");
    Cut.append(document.createTextNode("Remove"));
    AddLi.append(Cut);
    Cut.addEventListener('click', function () {
        tasksArray = tasksArray.filter(em => em.id != AddLi.getAttribute('id'));
        AddLi.remove();
        if (counterLi > 0) {
            counterLi--;
            Display.innerHTML = counterLi;
        }
    })
}
function StartId(AddLi) {
    let Start = document.createElement("Button");
    Start.append(document.createTextNode("Start"))
    AddLi.append(Start);
    Start.addEventListener('click', function () {
        tasksArray[tasksArray.findIndex(e => e.id == AddLi.getAttribute('id'))].status = 1;
        render();
        if (counterLi > 0) {
            counterLi--;
            Display.innerHTML = counterLi;
        }
    })
}
function DoneId(AddLi) {
    let Done = document.createElement("button");
    Done.append(document.createTextNode("Done"));
    AddLi.append(Done);
    Done.addEventListener('click', function () {
        tasksArray[tasksArray.findIndex(m => m.id == AddLi.getAttribute('id'))].status = 2;
        render();
    })
}
