let addNew = document.querySelector(".addNew");
let addBtn = document.querySelector(".update-btn");
let closeBtn = document.querySelector(".modal-close-btn");
let modalLayer = document.querySelector(".modal-layer");
let modalTitle = document.querySelector(".modal-title-input");
let modalDate = document.querySelector(".modal-date-input");
let modalInfo = document.querySelector(".modal-info-input");
let taskBox = document.querySelector(".task-box");


//-----modal functionality basically saying add this to class list or remove it when this happens (appear or dissapear can be used for any item in html you want to be able to hide you just add css and this does you class work so you can do the display non and so forth)
let openModal = () => modalLayer.classList.add("active-modal");
let closeModal = () => modalLayer.classList.remove("active-modal");
//-----modal click events followed by the funtion that lives outside the method 
addNew.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);


//-----complete btn (this can be used for any bigg element that you want to remove using a btn within that element)
taskBox.addEventListener("click", (e) => {
    //simple if statement saying if the taskbox has class name task-delete-btn to do this. then in the if it says target the closest class name to .tasks and then remove the elemtn.
   if (e.target.classList.contains("task-delete-btn")) {
        e.target.closest(".tasks").remove();
    };
});

//-----creat post (this is for when you want a component to update their values or basically manipulate an html element to update with dynamic values) Using template literals (backticks `) to inject input values directly into HTML strings is the core mechanism for creating dynamic UI components in vanilla JavaScript.
const createPost = () => {
    //new task is basically a full template of one html task list item look at the ${modal.Title-value} this is basically taking whatever is inside the modal at the time the form inputs and then updating the task list on the task box
    let newTask = `
        <div class="tasks">
            <h5 class="task-title task-bits">${modalTitle.value}</h5>
            <div class="task-date task-bits">${modalDate.value}</div>
            <div class="task-info task-bits">${modalInfo.value}</div>
            <div class="task-btns">
                <div class="task-edit-btn task-btn">Edit</div>
                <div class="task-delete-btn task-btn">Complete</div>
            </div>
        </div>
    `;
    //this is add what we just typed onto the existing tasks.
    taskBox.innerHTML += newTask;
};

//----- add button inside the modal
addBtn.addEventListener("click", (e) => {
    //this stops the form from refreshing or erasing the data
    e.preventDefault();
    //if the modals title value is nothing retunr this and also .trim() is a built-in JavaScript method for strings that strips away all white space from both ends of a string (spaces, tabs, newlines).
    //the return at the end basically tells the code to stop here and not read the rest of the page a stop sign for functions or code basically saying hey if the sting has nothing in it dont do jack aka add empty task box
    if (modalTitle.value.trim()=== "") return;
    //this then creates the post you just put in
    createPost();
    //these three pieces just makes sure when this has been added it clears out the inputs after completion of creating the post.
    modalTitle.value="";
    modalDate.value="";
    modalInfo.value="";
    //because we made the closing modal a function instead of a toggle we can now call it when ever and it does its job
    closeModal();

});

//this lets is a place holder for when we want to know what task is being used
let selectedTask = null;
//delete button
taskBox.addEventListener("click", (e)=>{
    //the if statement to delete
    if (e.target.classList.contains("task-delete-btn")){
        e.target.closest(".tasks").remove();
    };
    //edit button if taskbox class list contains task edit btn then do the following
    if (e.target.classList.contains("task-edit-btn")){
        //turns the null selected task into the closest task being able to add teh closest item is so helpful
        selectedTask = e.target.closest(".tasks");
        //saying the modal titles and date and info is equal to the selected tasks values innder text basically calling back to whats in the task so you can edit its information
        modalTitle.value=selectedTask.querySelector(".task-title").innerText;
        modalDate.value=selectedTask.querySelector(".task-date").innerText;
        modalInfo.value=selectedTask.querySelector(".task-info").innerText;

        //opens the modal to edi the content after all this above loads.
        openModal();
    };
});

//----- add/update button inside modal
addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // if modal title is nothing then stop
    if (modalTitle.value.trim() === "") return;

    if (selectedTask === null) {
        // Mode A: Creating a NEW task
        createPost();
    } else {
        // Mode B: Updating an EXISTING task
        selectedTask.querySelector(".task-title").innerText = modalTitle.value;
        selectedTask.querySelector(".task-date").innerText = modalDate.value;
        selectedTask.querySelector(".task-info").innerText = modalInfo.value;

        // Reset memory back to null after editing is finished
        selectedTask = null;
    };

    // Clear inputs
    modalTitle.value = "";
    modalDate.value = "";
    modalInfo.value = "";

    // Close modal
    closeModal();
});

