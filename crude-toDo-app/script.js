let addNew = document.querySelector(".addNew")
let updateBtn = document.querySelector(".update-btn")
let closeBtn = document.querySelector(".modal-close-btn")
let modalLayer = document.querySelector(".modal-layer")

addNew.addEventListener("click",()=>{
    modalLayer.classList.toggle("active-modal")
    console.log("clicked original btn")})

updateBtn.addEventListener("click",()=>{
    modalLayer.classList.toggle("active-modal")
    console.log("clicked update")})

closeBtn.addEventListener("click",()=>{
    modalLayer.classList.toggle("active-modal")
    console.log("clicked close")})
