let rockNum = 1;
let paperNum = 2;
let scissorNum = 3;


let mainContainer = document.querySelector(".main-container");
const leftWrapper = document.querySelector(".result-left-wrapper");
let rightWrapper = document.querySelector(".result-right-wrapper");
let yourScore = document.querySelector(".your-score");
let computerScore = document.querySelector(".computer-score");
let resultTitle = document.querySelector(".main-result-title");

let winningResultTitleRock = "Rock! You Win";
let winningResultTitlePaper = "Paper! You Win";
let winningResultTitleScissor = "Scissor! You Win";
let itsTied = "It's a Tie";
let sorryTryAgain = "Loser Machine wins";

let randomNum;
let yourScoreNum = 0;
let computerScoreNum = 0;



mainContainer.addEventListener("click",(e)=>{

  randomNum = Math.floor(Math.random()*3)+1;


  if (e.target.classList.contains("rock-btn-left")){

    console.log("rock clickied");
    
    if (randomNum===rockNum){
    rightWrapper.innerHTML= `<img class="rock-img result-right" src="./img/rock-img-Photoroom.png" alt="Rock">`;

  }else if(randomNum===paperNum){
    rightWrapper.innerHTML = `<img class="paper-img result-right" src="./img/paper-img-Photoroom.png" alt="paper">`;

  }else if(randomNum===scissorNum){
    rightWrapper.innerHTML = `<img class="scissor-img result-right" src="./img/scissor-img-Photoroom.png" alt="scissor">`;

  }

    leftWrapper.innerHTML = `

    <img class="rock-img result-left" src="./img/rock-img-Photoroom.png" alt="Rock">

    `;

    if (randomNum === rockNum){
      console.log("tied rocks");
      resultTitle.textContent = itsTied;

    }else if(randomNum === paperNum){
      console.log("you lose brodha");
      resultTitle.textContent = sorryTryAgain;
      computerScoreNum++;
      computerScore.textContent = computerScoreNum;

    }else if(randomNum === scissorNum){
      console.log("you win!");
      resultTitle.textContent = winningResultTitleRock;
      yourScoreNum++;
      yourScore.textContent = yourScoreNum;

    }

    


  }else if(e.target.classList.contains("paper-btn-middle")){
    console.log("paper clickied");

    if (randomNum===rockNum){
    rightWrapper.innerHTML= `<img class="rock-img result-right" src="./img/rock-img-Photoroom.png" alt="Rock">`;

  }else if(randomNum===paperNum){
    rightWrapper.innerHTML = `<img class="paper-img result-right" src="./img/paper-img-Photoroom.png" alt="paper">`;

  }else if(randomNum===scissorNum){
    rightWrapper.innerHTML = `<img class="scissor-img result-right" src="./img/scissor-img-Photoroom.png" alt="scissor">`;

  }

    leftWrapper.innerHTML =`
    <img class="paper-img result-left" src="./img/paper-img-Photoroom.png" alt="paper">
    `;

    if (randomNum === paperNum){
      console.log("tied paper");
      console.log(randomNum)
      resultTitle.textContent = itsTied;

    }else if(randomNum === scissorNum){
      console.log("you lose brodha");
      console.log(randomNum)
      resultTitle.textContent = sorryTryAgain;
      computerScoreNum++;
      computerScore.textContent = computerScoreNum;

    }else if(randomNum === rockNum){
      console.log("you win!");
      console.log(randomNum)
      resultTitle.textContent = winningResultTitlePaper;
      yourScoreNum++;
      yourScore.textContent = yourScoreNum;

    }


  }else if(e.target.classList.contains("scissor-btn-right")){
    console.log("scissor clickied");

    if (randomNum===rockNum){
    rightWrapper.innerHTML= `<img class="rock-img result-right" src="./img/rock-img-Photoroom.png" alt="Rock">`;

  }else if(randomNum===paperNum){
    rightWrapper.innerHTML = `<img class="paper-img result-right" src="./img/paper-img-Photoroom.png" alt="paper">`;

  }else if(randomNum===scissorNum){
    rightWrapper.innerHTML = `<img class="scissor-img result-right" src="./img/scissor-img-Photoroom.png" alt="scissor">`;

  }

    leftWrapper.innerHTML =`
    <img class="scissor-img result-left" src="./img/scissor-img-Photoroom.png" alt="scissor">
    `;

    if (randomNum === scissorNum){
      console.log("tied paper");
      console.log(randomNum)
      resultTitle.textContent = itsTied;

    }else if(randomNum === rockNum){
      console.log("you lose brodha");
      console.log(randomNum)
      resultTitle.textContent = sorryTryAgain;
      computerScoreNum++;
      computerScore.textContent = computerScoreNum;

    }else if(randomNum === paperNum){
      console.log("you win!");
      console.log(randomNum)
      resultTitle.textContent = winningResultTitleScissor;
      yourScoreNum++;
      yourScore.textContent = yourScoreNum;

    }


  }

});