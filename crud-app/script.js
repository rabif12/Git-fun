let form = document.querySelector("#form")
let input = document.querySelector("#input")
let blankMsg = document.querySelector(".blank-msg")
let posts = document.querySelector(".posts")
let post1msg = document.querySelector(".post-1-msg")
let post2msg = document.querySelector(".post-2-msg")



form.addEventListener("submit", (e)=>{
    e.preventDefault()
    console.log("clicked")
    formValidation()
})


let formValidation = ()=>{
    if(input.value === ""){
        blankMsg.innerHTML="post cannot be blank"
        console.log("failure type something")
    }
    else{
        // post1msg.innerHTML=`${input.value}`
        console.log("success")
        acceptData()
        input.value = ""
        blankMsg.innerHTML = ""
    }
}


let data = {}

let acceptData = () => {
    data["text"] = input.value
    console.log(data) 
    createPost()
}

let createPost = () => {
    posts.innerHTML +=
    `
    <div class="post-1 post-list-item">
        <p class="post-1-msg">${data.text}</p>
            <span class="post-btns">
                <p class="edit-o post-btn">
                    <i class="fa-solid fa-pen-to-square"></i>O
                </p>
                <p class="delete-x post-btn">
                    <i class="fa-solid fa-check"></i>X
                 </p>
            </span>
    </div>
    `
}