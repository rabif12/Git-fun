let addNew = document.querySelector(".addNew")
let updateBtn = document.querySelector(".task-edit-btn")
let addBtn = document.querySelector(".update-btn")
let closeBtn = document.querySelector(".modal-close-btn")
let modalLayer = document.querySelector(".modal-layer")
let modalTitle = document.querySelector(".modal-title-input")
let modalDate = document.querySelector(".modal-date-input")
let modalInfo = document.querySelector(".modal-info-input")
let deleteBtn = document.querySelectorAll(".task-delete-btn")
let editBtn = document.querySelectorAll(".task-edit-btn")

let openModal = () => modalLayer.classList.add("active-modal");
let closeModal = () => modalLayer.classList.remove("active-modal");

addNew.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

updateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (modalLayer.classList.contains("active-modal")) {
        closeModal();
    } else {
        openModal();
    }
});

addBtn.addEventListener("click", (e) => {
    if (modalLayer.classList.contains("active-modal")) {
        closeModal();
    } else {
        openModal();
    }
});

deleteBtn.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        e.target.closest(".tasks").remove()
    })
})

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