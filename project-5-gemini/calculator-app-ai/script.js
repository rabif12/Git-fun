// ==========================================
// 1. SELECT YOUR ELEMENTS
// (Grab your display and your buttons container)
// ==========================================

const calcAppContainer = document.querySelector(".calc-app-btns");
let calcDisplayText = document.querySelector(".calc-display-text");




// ==========================================
// 2. SET UP YOUR STATE VARIABLES
// (What do we need to track? Current input? Previous input? Operator?)
// ==========================================
let calcCurrentValue = "";
let calcPreviousValue = "";
let calcOperator = "";




// ==========================================
// 3. EVENT LISTENER & CLICK HANDLING
// (Listen for clicks on your buttons and figure out what was clicked)
// ==========================================


calcAppContainer.addEventListener("click",(e)=>{
    const clickedBtnElement = e.target;

    if (clickedBtnElement.classList.contains("calc-display-text")){
        calcDisplayText.textContent = "clicked";
        
    }else if(clickedBtnElement.classList.contains("calc-app-clear-btn")){
        calcDisplayText.textContent = "";
        calcOperator.textContent = "";
        calcCurrentValue.textContent = "";
        calcPreviousValue.textContent = "";

    }else if(clickedBtnElement.classList.contains("calc-app-1-btn")){
        console.log("hello")

    }else if(clickedBtnElement.classList.contains("calc-app-2-btn")){
        console.log("clicked clear");
        calcDisplayText.textContent = "";

    }else if(clickedBtnElement.classList.contains("calc-app-3-btn")){
        console.log("clicked clear");
        calcDisplayText.textContent = "";

    }else if(clickedBtnElement.classList.contains("calc-app-4-btn")){
        console.log("clicked clear");
        calcDisplayText.textContent = "";

    }else if(clickedBtnElement.classList.contains("calc-app-5-btn")){
        console.log("clicked clear");
        calcDisplayText.textContent = "";

    }else if(clickedBtnElement.classList.contains("calc-app-6-btn")){
        console.log("clicked clear");
        calcDisplayText.textContent = "";

    }else if(clickedBtnElement.classList.contains("calc-app-7-btn")){
        console.log("clicked clear");
        calcDisplayText.textContent = "";

    }else if(clickedBtnElement.classList.contains("calc-app-8-btn")){
        console.log("clicked clear");
        calcDisplayText.textContent = "";

    }else if(clickedBtnElement.classList.contains("calc-app-9-btn")){
        console.log("clicked clear");
        calcDisplayText.textContent = "";

    }else if(clickedBtnElement.classList.contains("calc-app-0-btn")){
        console.log("clicked clear");
        calcDisplayText.textContent = "";

    }else if(clickedBtnElement.classList.contains("calc-app-period-btn")){
        console.log("clicked clear");
        calcDisplayText.textContent = "";

    }else if(clickedBtnElement.classList.contains("calc-app-equals-btn")){
        console.log("clicked clear");
        calcDisplayText.textContent = "";

    }else if(clickedBtnElement.classList.contains("calc-app-add-btn")){
        calcPreviousValue = calcCurrentValue;
        calcOperator = "+";
        calcCurrentValue = "";

    }else if(clickedBtnElement.classList.contains("calc-app-subtract-btn")){
        calcPreviousValue = calcCurrentValue;
        calcOperator = "-";
        calcCurrentValue = "";

    }else if(clickedBtnElement.classList.contains("calc-app-multiply-btn")){
        calcPreviousValue = calcCurrentValue;
        calcOperator = "*";
        calcCurrentValue = "";

    }else if(clickedBtnElement.classList.contains("calc-app-divide-btn")){
        calcPreviousValue = calcCurrentValue;
        calcOperator = "/";
        calcCurrentValue = "";

    };
});


// ==========================================
// 4. UPDATE THE DISPLAY
// (Function to push the current text/number onto your screen)
// ==========================================