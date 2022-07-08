let tasksArray = [];
var ToDoInput = document.querySelector('.todo-input');

function removeArrayElementById(arr, deleteId) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].iD != deleteId) {
            newArray.push(arr[i])
        }
    }
    return newArray
}
function TodoTasks() {
    var UlAdded = document.querySelector('.ul-list');
    let CheckBtn = document.createElement("button");
    let ResetBtn = document.createElement("button");
    UlAdded.innerHTML = '';
    for (let i = 0; i < tasksArray.length; i++) {
        let currentTask = tasksArray[i];
        if (currentTask.status == 'todo') {
            let AddLi = document.createElement("Li");
            AddLi.append(document.createTextNode(currentTask.value));
            UlAdded.append(AddLi);

            let cut = document.createElement("Button");
            cut.append(document.createTextNode("remove"));
            AddLi.append(cut);
            cut.addEventListener('click', function (evnt, currTaskID = currentTask.iD) {
                tasksArray.splice(tasksArray.map(x => { return x.ID }).indexOf(currTaskID, 1));
                TodoTasks();
            });

            let Start = document.createElement("Button");
            Start.append(document.createTextNode("Start"));
            AddLi.append(Start);
            Start.addEventListener('click', function (evnt, currTaskID = currentTask.iD) {
                tasksArray[tasksArray.findIndex(el => el.iD == currTaskID)].status = 'inprogress';
                TodoTasks();
                InProgressTasks();
            });
        }
    }
}

function InProgressTasks() {
    var UlAdded = document.querySelector('.inprogress');
    let CheckBtn = document.createElement("button");
    let ResetBtn = document.createElement("button");
    UlAdded.innerHTML = '';
    for (let i = 0; i < tasksArray.length; i++) {
        let currentTask = tasksArray[i];
        if (currentTask.status == 'inprogress') {
            let AddLi = document.createElement("Li");
            AddLi.append(document.createTextNode(currentTask.value));
            UlAdded.append(AddLi);

            let cut = document.createElement("Button");
            cut.append(document.createTextNode("remove"));
            AddLi.append(cut);
            cut.addEventListener('click', function (evnt, currTaskID = currentTask.iD) {
                tasksArray = removeArrayElementById(tasksArray, currTaskID)
                InProgressTasks();
            });

            let Start = document.createElement("Button");
            Start.append(document.createTextNode("Done"));
            AddLi.append(Start);
            Start.addEventListener('click', function (evnt, currTaskID = currentTask.iD) {
                tasksArray[tasksArray.findIndex(el => el.iD == currTaskID)].status = 'done';
                InProgressTasks();
                CompletedTasks();
            });
        }
    }
}

function CompletedTasks() {
    var UlAdded = document.querySelector('.complete');
    let CheckBtn = document.createElement("button");
    let ResetBtn = document.createElement("button");
    UlAdded.innerHTML = '';
    for (let i = 0; i < tasksArray.length; i++) {
        let currentTask = tasksArray[i];
        if (currentTask.status == 'done') {
            let AddLi = document.createElement("Li");
            AddLi.append(document.createTextNode(currentTask.value));
            UlAdded.append(AddLi);

            let cut = document.createElement("Button");
            cut.append(document.createTextNode("remove"));
            AddLi.append(cut);
            cut.addEventListener('click', function (evnt, currTaskID = currentTask.iD) {
                tasksArray = removeArrayElementById(tasksArray, currTaskID)
                CompletedTasks();
            });
        }
    }
}
    let AddButton = document.querySelector('#button');
    var UlAdded = document.querySelector('.ul-list');
    let Start = document.createElement("Button");
    let AddLi = document.createElement("Li");
    let formData = document.querySelector('.todo-form');
    formData.addEventListener('submit', function (event) {
        event.preventDefault();
        if (ToDoInput.value.trim() !== '') {
            tasksArray.push({ "iD": Date.now(), "value": ToDoInput.value, "status": 'todo' })
            ToDoInput.value = "";        }
        else {
            window.alert("Please Enter Any Task");
        }
        TodoTasks();
    });



//<--------------------------------Start------------------------------->

// let tasksArray = [];
// let counterLi = 0;
// let Display = document.querySelector('#display')
// let ToDoInput = document.querySelector('.todo-input');
// let Cut = document.createElement("Button");
// let Start = document.createElement("Button");
// let formData = document.querySelector('.todo-form');
// formData.addEventListener('submit', function (event) {
//     event.preventDefault();
//     if (ToDoInput.value.trim() !== '') {
//         tasksArray.push({ id: Date.now(), text: ToDoInput.value, status: 0 })
//         ToDoInput.value = "";
//         counterLi++;
//         Display.innerHTML = counterLi;
//     }
//     else {
//         window.alert("Please Enter Any Task");
//     }
//     console.log(tasksArray);
//     render();
// });

// function render() {
//     let UlAdded = document.querySelector('.ul-list');
//     UlAdded.innerHTML = '';
//     for (let i = 0; i < tasksArray.length; i++) {
//         if (tasksArray[i].status === 0) {
//             let AddLi = document.createElement('li');
//             AddLi.setAttribute('id', tasksArray[i].id);
//             AddLi.append(document.createTextNode(tasksArray[i].text));
//             UlAdded.append(AddLi);
//             deleteId(AddLi);
//             ShiftLi(AddLi);
//         }
//         else if(tasksArray[i].status == 1){
//             let AddLi = document.createElement('li');
//             console.log(AddLi);
//         }
//     }
// }
//  function deleteId(AddLi){
//     let Cut = document.createElement("Button");
//     Cut.append(document.createTextNode("Remove"));
//     AddLi.append(Cut);
//     Cut.addEventListener('click', function () {
//         tasksArray = tasksArray.filter(em => em.id != AddLi.getAttribute('id'));
//          AddLi.remove();
//          if(counterLi>0){
//             counterLi--;
//             Display.innerHTML=counterLi;
//          }
//      })
// }
// function ShiftLi(AddLi)
// {
//     let Start = document.createElement("Button");
//     Start.append(document.createTextNode("Start"))
//     AddLi.append(Start);
//     // Start.addEventListener('click', function () {
//     //     tasksArray=tasksArray.filter(em => em.id != AddLi.getAttribute('id')).status = 1;
//     //     console.log(tasksArray);
//     // })   
// }
//<--------------------------------------------End----------------------------------------->


//<-----------------------------------------------Dom Manipulation--------------------------->

// function todo() {
//     let ToDoInput = document.querySelector('.todo-input');
//     let AddButton = document.querySelector('#button');
//     var UlAdded = document.querySelector('.ul-list');
//     let Start = document.createElement("Button");
//     let AddLi = document.createElement("Li");
//     let CheckBtn = document.createElement("button");
//     let ResetBtn = document.createElement("button");
    
//     let CounterData = document.querySelector('.counter');
//     if (ToDoInput.value === '') 
//     {
//         window.alert("Please Enter Any Task");
//     }
//     else {
//         AddLi.append(document.createTextNode(ToDoInput.value));
//         UlAdded.append(AddLi);
//         ToDoInput.value = "";
//     }
//     let cut = document.createElement("Button");
//     cut.append(document.createTextNode("remove"));
//     AddLi.append(cut);
//     cut.addEventListener('click', function () {
//         AddLi.remove();
//         CheckBtn.append(document.createTextNode("Done"));
//         AddLi.append(CheckBtn);
//         CheckBtn.style.display = 'none';
//         ResetBtn.append(document.createTextNode("reset"));
//         AddLi.append(ResetBtn);
//         ResetBtn.style.display= 'none'; 
//     });

//     Start.append(document.createTextNode("Start"));
//     AddLi.append(Start);
//     Start.addEventListener('click', function () {
//         let InproUl = document.querySelector(".inprogress");
//         InproUl.append(AddLi);
//         Start.style.display = 'none';
//         AddLi.append(CheckBtn);
//     });
//     CheckBtn.append(document.createTextNode("Done"));
//     CheckBtn.addEventListener('click', function () {
//         let CompleteUl = document.querySelector('.complete');
//         CompleteUl.append(AddLi);
//         AddLi.append(ResetBtn);
//         CheckBtn.style.display = 'none';
    
//     });
   
//     // ResetBtn.append(document.createTextNode("reset"));
    
//     // ResetBtn.addEventListener('click',function(){
//     //     // UlAdded.append(AddLi);
//     //     // Start.append(document.createTextNode("Start"));
//     //     // Start.append(AddLi);
//     //     AddLi.append(ToDoInput.value);
//     //     // Start.append(document.createTextNode("Start"));
//     //     // Start.append(AddLi);
//     //     UlAdded.append(AddLi);
       
//     //     ResetBtn.style.display = 'none'; 
//     // });
        
// };