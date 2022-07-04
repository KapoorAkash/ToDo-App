function todo() {
    let ToDoInput = document.querySelector('.todo-input');
    let AddButton = document.querySelector('#button');
    var UlAdded = document.querySelector('.ul-list');
    let Start = document.createElement("Button");
    let AddLi = document.createElement("Li");
    let CheckBtn = document.createElement("button");
    let ResetBtn = document.createElement("button");
    
    let CounterData = document.querySelector('.counter');
    if (ToDoInput.value === '') 
    {
        window.alert("Please Enter Any Task");
    }
    else {
        AddLi.append(document.createTextNode(ToDoInput.value));
        UlAdded.append(AddLi);
        ToDoInput.value = "";
    }
    let cut = document.createElement("Button");
    cut.append(document.createTextNode("remove"));
    AddLi.append(cut);
    cut.addEventListener('click', function () {
        AddLi.remove();
        CheckBtn.append(document.createTextNode("Done"));
        AddLi.append(CheckBtn);
        CheckBtn.style.display = 'none';
        ResetBtn.append(document.createTextNode("reset"));
        AddLi.append(ResetBtn);
        ResetBtn.style.display= 'none'; 
    });

    Start.append(document.createTextNode("Start"));
    AddLi.append(Start);
    Start.addEventListener('click', function () {
        let InproUl = document.querySelector(".inprogress");
        InproUl.append(AddLi);
        Start.style.display = 'none';
        AddLi.append(CheckBtn);
    });
    CheckBtn.append(document.createTextNode("Done"));
    CheckBtn.addEventListener('click', function () {
        let CompleteUl = document.querySelector('.complete');
        CompleteUl.append(AddLi);
        AddLi.append(ResetBtn);
        CheckBtn.style.display = 'none';
    
    });
   
    // ResetBtn.append(document.createTextNode("reset"));
    
    // ResetBtn.addEventListener('click',function(){
    //     // UlAdded.append(AddLi);
    //     // Start.append(document.createTextNode("Start"));
    //     // Start.append(AddLi);
    //     AddLi.append(ToDoInput.value);
    //     // Start.append(document.createTextNode("Start"));
    //     // Start.append(AddLi);
    //     UlAdded.append(AddLi);
       
    //     ResetBtn.style.display = 'none'; 
    // });
        
};
