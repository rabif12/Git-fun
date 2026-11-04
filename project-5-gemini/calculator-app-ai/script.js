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
let shouldResetScreen = false;




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
        calcOperator = "";
        calcCurrentValue = "";
        calcPreviousValue = "";
        shouldResetScreen = false;

    }else if(clickedBtnElement.classList.contains("calc-app-1-btn")){

        if (shouldResetScreen){
            calcCurrentValue = "1";
            shouldResetScreen =false;
        }else{
            calcCurrentValue += "1";
        };
        
        calcDisplayText.textContent = calcCurrentValue;

    }else if(clickedBtnElement.classList.contains("calc-app-2-btn")){

        if (shouldResetScreen){
            calcCurrentValue = "2";
            shouldResetScreen =false;
        }else{
            calcCurrentValue += "2";
        };

        calcDisplayText.textContent = calcCurrentValue;

    }else if(clickedBtnElement.classList.contains("calc-app-3-btn")){

        if (shouldResetScreen){
            calcCurrentValue = "3";
            shouldResetScreen =false;
        }else{
            calcCurrentValue += "3";
        };

        calcDisplayText.textContent = calcCurrentValue;

    }else if(clickedBtnElement.classList.contains("calc-app-4-btn")){

        if (shouldResetScreen){
            calcCurrentValue = "4";
            shouldResetScreen =false;
        }else{
            calcCurrentValue += "4";
        };

        calcDisplayText.textContent = calcCurrentValue;

    }else if(clickedBtnElement.classList.contains("calc-app-5-btn")){

        if (shouldResetScreen){
            calcCurrentValue = "5";
            shouldResetScreen =false;
        }else{
            calcCurrentValue += "5";
        };

        calcDisplayText.textContent = calcCurrentValue;

    }else if(clickedBtnElement.classList.contains("calc-app-6-btn")){

        if (shouldResetScreen){
            calcCurrentValue = "6";
            shouldResetScreen =false;
        }else{
            calcCurrentValue += "6";
        };

        calcDisplayText.textContent = calcCurrentValue;

    }else if(clickedBtnElement.classList.contains("calc-app-7-btn")){

        if (shouldResetScreen){
            calcCurrentValue = "7";
            shouldResetScreen =false;
        }else{
            calcCurrentValue += "7";
        };

        calcDisplayText.textContent = calcCurrentValue;

    }else if(clickedBtnElement.classList.contains("calc-app-8-btn")){

        if (shouldResetScreen){
            calcCurrentValue = "8";
            shouldResetScreen =false;
        }else{
            calcCurrentValue += "8";
        };

        calcDisplayText.textContent = calcCurrentValue;

    }else if(clickedBtnElement.classList.contains("calc-app-9-btn")){

        if (shouldResetScreen){
            calcCurrentValue = "9";
            shouldResetScreen =false;
        }else{
            calcCurrentValue += "9";
        };

        calcDisplayText.textContent = calcCurrentValue;

    }else if(clickedBtnElement.classList.contains("calc-app-0-btn")){

        if (shouldResetScreen){
            calcCurrentValue = "0";
            shouldResetScreen =false;
        }else{
            calcCurrentValue += "0";
        };

        calcDisplayText.textContent = calcCurrentValue;

    }else if(clickedBtnElement.classList.contains("calc-app-period-btn")){

        if (shouldResetScreen) {
        calcCurrentValue = "0.";
        shouldResetScreen = false;
        } else if (!calcCurrentValue.includes(".")) {
            calcCurrentValue += ".";
        }

        calcDisplayText.textContent = calcCurrentValue;

    }else if(clickedBtnElement.classList.contains("calc-app-equals-btn")){
        console.log("clicked equals");

        let result = 0;
        const num1 = Number(calcPreviousValue);
        const num2 = Number(calcCurrentValue);

        if (calcOperator === "+"){
            result = num1 + num2;
        }else if(calcOperator === "-"){
            result = num1 - num2;
        }else if(calcOperator === "/"){
            result = num1 / num2;
        }else if(calcOperator === "*"){
            result = num1 * num2;
        };

        

        calcCurrentValue = result.toString();
        calcCurrentValue = calcCurrentValue.slice(0,11);
        calcDisplayText.textContent = calcCurrentValue;
        calcPreviousValue = "";
        calcOperator = "";
        shouldResetScreen = true;

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
    calcCurrentValue = calcCurrentValue.slice(0,10);
});


// ==========================================
// 4. UPDATE THE DISPLAY
// (Function to push the current text/number onto your screen)
// ==========================================