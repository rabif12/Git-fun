let mainContainer = document.querySelector(".main-container");
let inputTitle = document.querySelector(".input-title-item");
let inputDate = document.querySelector(".input-date");
let inputDescription = document.querySelector(".input-description");
let resultTitle = document.querySelector(".task-title");
let resultdate = document.querySelector(".task-date");
let resultInfo = document.querySelector(".task-info");
let taskList = document.querySelector(".task-list");



mainContainer.addEventListener("click",(e)=>{

  if(e.target.classList.contains("complete-btn")){
    console.log("complete button clicked");
    const taskBlock = e.target.closest(".task-block");
    if(taskBlock){
      taskBlock.classList.toggle("task-block-complete");
    }

  }else if(e.target.classList.contains("delete-btn")){
    console.log("the delete buttom clicked");
    const taskCard = e.target.closest(".task-block");
    if(taskCard){
      taskCard.remove();
    }

  }else if(e.target.classList.contains("input-btn")){

    if(inputTitle.value.trim()===""){
      alert("please enter something");
      return;
    }else if(inputDate.value.trim()===""){
      alert("add a due date");
    }else if(inputDescription.value.trim()===""){
      alert("add a description");
    }

    const newTaskHTML = `
      <div class="task-block">
        <h4 class="task-title task-item">${inputTitle.value}</h4>
        <p class="task-date task-item">${inputDate.value}</p>
        <p class="task-info task-item">${inputDescription.value}</p>
        <div class="task-btn-wrapper">
          <button class="complete-btn task-item">Complete</button>
          <button class="delete-btn task-item">Delete</button>
        </div>
      </div>
    `;

    taskList.insertAdjacentHTML("beforeend", newTaskHTML);

    inputDate.value="";
    inputDescription.value="";
    inputTitle.value="";

  }
});