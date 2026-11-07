let mainContainer = document.querySelector(".main-container");
const leftWrapper = document.querySelector(".result-left-wrapper");

mainContainer.addEventListener("click",(e)=>{

  if (e.target.classList.contains("rock-btn-left")){

    console.log("rock clickied");

    leftWrapper.innerHTML = `

    <img class="rock-img result-left" src="./img/rock-img-Photoroom.png" alt="Rock">

    `;




  }else if(e.target.classList.contains("paper-btn-middle")){
    console.log("paper clickied");

    leftWrapper.innerHTML =`
    <img class="paper-img result-left" src="./img/paper-img-Photoroom.png" alt="paper">
    `;




  }else if(e.target.classList.contains("scissor-btn-right")){
    console.log("scissor clickied");

    leftWrapper.innerHTML =`
    <img class="scissor-img result-left" src="./img/scissor-img-Photoroom.png" alt="scissor">
    `;

  }

});