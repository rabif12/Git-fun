const mainContainer = document.querySelector(".main-container");
let taskListTitle = document.querySelector(".task-list-title");
let taskListDate = document.querySelector(".task-list-date");
let taskListInfo = document.querySelector(".task-list-info");
let taskBox = document.querySelector(".task-box");
let selectedTask = null;

//reuse this for all ---addBTN---
mainContainer.addEventListener("click",(e)=>{
    // this is literally all you have to change and the funtion finds any child within the parent.
    let targetClasses = e.target.closest(".header-btn-add");

    if (!targetClasses) return;

    if (selectedTask===null){
        createPost();
    }else{
        selectedTask.querySelector(".task-list-title").innerHTML=taskListTitle.value;

        selectedTask.querySelector(".task-list-date").innerHTML=taskListDate.value;

        selectedTask.querySelector(".task-list-info").innerHTML=taskListInfo.value;

        selectedTask = null;
    };

});

//----header text area
mainContainer.addEventListener("click",(e)=>{
    // this is literally all you have to change and the funtion finds any child within the parent.
    let targetClasses = e.target.closest(".header-input-info");

    if (!targetClasses) return;

    console.log("clicked the task area for text");

});

//----header text area
mainContainer.addEventListener("click",(e)=>{
    // this is literally all you have to change and the funtion finds any child within the parent.
    let targetClasses = e.target.closest(".header-input-date");

    if (!targetClasses) return;

    console.log("clicked the task date area");

});

mainContainer.addEventListener("click",(e)=>{
    // this is literally all you have to change and the funtion finds any child within the parent.
    let targetClasses = e.target.closest(".header-input-title");

    if (!targetClasses) return;

    console.log("clicked the task title area");

});

let createPost = ()=>{
    let newTask = `
        <div class="task-list-1 task-item">
            <div class="task-list-title">${taskListTitle.value}</div>
            <div class="task-list-date">${taskListDate.value}</div>
            <div class="task-list-info">${taskListInfo.value}</div>
        </div>
    `;

    taskBox.innerHTML += newTask;
};

