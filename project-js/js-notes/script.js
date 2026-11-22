// const miniMumAge = 18;
// const minimumCreditScore = 680;
// let userCreditScore = 900;
// let userAge = 21;

// const isAdult = userAge>=miniMumAge;
// const hasGoodCreditScore = userCreditScore>=minimumCreditScore;

// const canGetALoan = isAdult&&hasGoodCreditScore;

// if(userCreditScore>=781&&userCreditScore<=850){
//   console.log("You have an exxcellent score");
// }

// if(canGetALoan){
//   console.log("approved, you can get a loan with sunTrust Bank");
// }

// if(userCreditScore>=850){
//   console.log("your credit score is Perfect!");
// }else if(userCreditScore>=661&&userCreditScore<=780){
//   console.log("your credit score is alright");
// }else if(userCreditScore>=500&&userCreditScore<=600){
//   console.log("your credit score is dogshit");
// }else{
//   console.log("pay your lenders back! and get outta here!");
// }

// let jolly=4;

// jolly === 3 ? console.log("hello") : console.log("goodbye");

// const savedEmail ='joe@bogan.com';
// const savedPass ='pass';

// const emailer = prompt('email please');
// const pasworder = prompt('password please');

// if(savedEmail===emailer&&savedPass===pasworder){
//   console.log('hello youre logged in');
// }else{
//   console.log('wrong email or password');
// }


// function taxify(sum){
//   return sum + (.10*sum)/100;
// };

// console.log(taxify(22));

// let add = (a,b)=>a+b;

// console.log("check this out" ,add(5,5));


// String.prototype.toJadenCase = function () {
//   let splitTwitterPost = this.split(' ');

//   for (let i = 0; i < splitTwitterPost.length; i++) {
//     let currentTweet = splitTwitterPost[i];
//     splitTwitterPost[i] = currentTweet[0].toUpperCase() + currentTweet.slice(1);
//   }

//   let regroupedTweet = splitTwitterPost.join(' ');
//   console.log(regroupedTweet);
//   return regroupedTweet;
// };

// "crazy money".toJadenCase();



function highAndLow(numbers){

  let splitLetters = numbers.split(' ');

  let splitNumbers = splitLetters.map(Number);

  let originalValue = splitNumbers[0];

  console.log(originalValue)

}