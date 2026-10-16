const mainContainer = document.querySelector(".main-container");


//reuse this for all ---addBTN---
mainContainer.addEventListener("click",(e)=>{
    // this is literally all you have to change and the funtion finds any child within the parent.
    let targetClasses = e.target.closest(".header-btn");

    if (!targetClasses) return;

    console.log("clicked the add btn");

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

