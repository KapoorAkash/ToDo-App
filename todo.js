function todo() {
    let ToDoInput = document.querySelector('.todo-input');
    let AddButton = document.querySelector('#button');
    let UlAdded = document.querySelector('.ul-list');
    let Start=document.createElement("Button");
    let AddLi= document.createElement("Li");
    let CheckBtn=document.createElement("button");
    let ResetBtn = document.createElement("Button");
   
    if(ToDoInput.value===''){
        window.alert("please enter task");
    }
    else
    {
        
        AddLi.append(document.createTextNode(ToDoInput.value));
        UlAdded.append(AddLi);
    }

        let cut = document.createElement("Button");
        cut.append(document.createTextNode("remove"));
        cut.style.marginLeft = '10px';
        AddLi.append(cut);
        cut.addEventListener('click', function () {
        AddLi.remove();
        CheckBtn.append(document.createTextNode("Done"));
        AddLi.append(CheckBtn);
        CheckBtn.style.display = 'none';
        ResetBtn.style.display = 'none';
    });
    

    Start.append(document.createTextNode("Start"));
    // Start.style.marginLeft = '40px';
    AddLi.append(Start);
    
    Start.addEventListener('click',function () {
        let InproUl=document.querySelector(".inprogress");
        InproUl.append(AddLi);
        Start.style.display = 'none';
        AddLi.append(CheckBtn);
        
        // CheckBtn.innerHTML = "&check;";
        // InproUl.appendChild(CheckBtn);
    });
    CheckBtn.append(document.createTextNode("Done"));
    // AddLi.append(CheckBtn);
    CheckBtn.addEventListener('click',function (){
        let CompleteUl=document.querySelector('.complete');
        CompleteUl.append(AddLi);
        CheckBtn.style.display = 'none';
    });
    
       
        ResetBtn.append(document.createTextNode("reset"));        cut.style.marginLeft = '10px';
        
        ResetBtn.addEventListener('click', function () {
            UlAdded.append(AddLi);
            AddLi.append(ResetBtn);
     });



    

    


    
};

