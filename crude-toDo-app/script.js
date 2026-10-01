let addNew = document.querySelector(".addNew")
let updateBtn = document.querySelectorAll(".task-edit-btn")
let addBtn = document.querySelector(".update-btn")
let closeBtn = document.querySelector(".modal-close-btn")
let modalLayer = document.querySelector(".modal-layer")
let modalTitle = document.querySelector(".modal-title-input")
let modalDate = document.querySelector(".modal-date-input")
let modalInfo = document.querySelector(".modal-info-input")
let deleteBtn = document.querySelectorAll(".task-delete-btn")
let editBtn = document.querySelectorAll(".task-edit-btn")
let taskBox = document.querySelector(".task-box")

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
        e.target.closest(".tasks").remove()
    }
})

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
    if (modalTitle.value.trim()=== "") return
    //this then creates the post

    createPost()
}





// addNew.addEventListener("click",()=>{
//     modalLayer.classList.toggle("active-modal")
//     console.log("clicked original btn")})

// updateBtn.addEventListener("click",()=>{
//     modalLayer.classList.toggle("active-modal")
//     console.log("clicked update")})

// closeBtn.addEventListener("click",()=>{
//     modalLayer.classList.toggle("active-modal")
//     console.log("clicked close")})



    //-------cheating
// let addNew = document.querySelector(".addNew");
// let updateBtn = document.querySelector(".update-btn");
// let closeBtn = document.querySelector(".modal-close-btn");
// let modalLayer = document.querySelector(".modal-layer");
// let modalTitle = document.querySelector(".modal-title-input");
// let modalDate = document.querySelector(".modal-date-input");
// let modalInfo = document.querySelector(".modal-info-input");
// let taskBox = document.querySelector(".task-box");

// Variable to track which task card is currently being edited
// let taskToEdit = null;

// // 1. Open Modal for a NEW Task
// addNew.addEventListener("click", () => {
//     taskToEdit = null; // Clear edit tracker
//     modalTitle.value = "";
//     modalDate.value = "";
//     modalInfo.value = "";
//     updateBtn.innerText = "Add"; // Set button text back to Add
//     modalLayer.classList.add("active-modal");
// });

// // 2. Close Modal (X/Close button)
// closeBtn.addEventListener("click", () => {
//     modalLayer.classList.remove("active-modal");
// });

// // 3. Create a Brand New Task Card
// let createPost = () => {
//     let titleVal = modalTitle.value;
//     let dateVal = modalDate.value;
//     let infoVal = modalInfo.value;

//     let newTask = `
//         <div class="tasks">
//             <h5 class="task-title task-bits">${titleVal}</h5>
//             <div class="task-date task-bits">${dateVal}</div>
//             <div class="task-info task-bits">${infoVal}</div>
//             <div class="task-btns">
//                 <div class="task-edit-btn task-btn">Edit</div>
//                 <div class="task-delete-btn task-btn">Complete</div>
//             </div>
//         </div>
//     `;

//     taskBox.innerHTML += newTask;

//     // Reset inputs
//     modalTitle.value = "";
//     modalDate.value = "";
//     modalInfo.value = "";
// };

// // 4. Save Button (Handles BOTH Creating and Editing)
// updateBtn.addEventListener("click", (e) => {
//     e.preventDefault();

//     if (modalTitle.value.trim() === "") return;

//     if (taskToEdit) {
//         // --- EDIT EXISTING TASK ---
//         taskToEdit.querySelector(".task-title").innerText = modalTitle.value;
//         taskToEdit.querySelector(".task-date").innerText = modalDate.value;
//         taskToEdit.querySelector(".task-info").innerText = modalInfo.value;
//         taskToEdit = null; // Reset tracker
//     } else {
//         // --- CREATE NEW TASK ---
//         createPost();
//     }

//     modalLayer.classList.remove("active-modal");
// });

// // 5. Event Delegation for Delete AND Edit on taskBox
// taskBox.addEventListener("click", (e) => {
//     // --- HANDLE DELETE ---
//     if (e.target.classList.contains("task-delete-btn")) {
//         e.target.closest(".tasks").remove();
//     }

//     // --- HANDLE EDIT ---
//     if (e.target.classList.contains("task-edit-btn")) {
//         // Find the specific task wrapper
//         taskToEdit = e.target.closest(".tasks");

//         // Extract existing task content and insert into modal inputs
//         modalTitle.value = taskToEdit.querySelector(".task-title").innerText;
//         modalDate.value = taskToEdit.querySelector(".task-date").innerText;
//         modalInfo.value = taskToEdit.querySelector(".task-info").innerText;

//         // Change submit button label to "Update" and open modal
//         updateBtn.innerText = "Update";
//         modalLayer.classList.add("active-modal");
//     }
// });