let form = document.querySelector("#form")
let input = document.querySelector("#input")
let blankMsg = document.querySelector(".blank-msg")
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
        post1msg.innerHTML=`${input.value}`
        console.log("success")
        input.value = ""
        blankMsg.innerHTML = ""
    }
}
