// // LANDSCAPER

// console.log('Landscaper Game app.js is attached to index.html');

// ////////////////////////////////////////
// ///// Introduce tool box
// ////////////////////////////////////////


// const tool = [
//     {
//         type: "teeth",
//         cost: 0,
//         wage: 1,
//     },
//     {
//         type: "scissors",
//         cost: 5,
//         wage: 5,
//     },
//     {
//         type: "old lawnmower",
//         cost: 25,
//         wage: 50,
//     },
//     {
//         type: "new lawnmower",
//         cost: 250,
//         wage: 100,
//     },
//     {
//         type: "students",
//         cost: 500,
//         wage: 250,
//     },
// ];
 
// ////////////////////////////////////////
// ///// Initalize variables
// ////////////////////////////////////////


// let money;
// let cost;
// let choice;
 


// ////////////////////////////////////////
// ///// Start Game
// ////////////////////////////////////////

// const startGame = () => {
//     alert(`Hey you! Want to make some money cutting grass?`)
//     showStatus();
//     promptQuestions();
// };
 
// ////////////////////////////////////////
// ///// When you go around take off the tool on the front
// ////////////////////////////////////////

// let playerChoice = {
//     currentTool: tools.shift()
// }
 
// // show status
// // let user know what tool is currently in their tool box

// const showStatus = () => {
//     alert(`Currently you have $` + money + `& your tool is` + tool)
// };
 
// //ask for input

// const askForInput = () => {
//     showStatus();
//     promptQuestions();
// };

// const promptQuestions = () => {
//    playerChoice = prompt("What do you want to do? landscape/buy tool");
//     if (playerChoice.toLowerCase() === 'landscape' || playerChoice.toLowerCase() === 'l') {
//         landscape()
//     } else if (
//         playerChoice.toLowerCase() === 'buy tool' && tools.length > 0) {
//             buyTool()
//         } else {
//             alert("Uh Oh! Wrong option, please try again!")
//             askForInput()
//         }
//     };
 
// ////////////////////////////////////////
// ///// Grass cutting actions
// ////////////////////////////////////////

//     const landscape = () => {
//         if (tool === "teeth") {
//             alert('Using' + tool + 'will earn you $1 each day!')
//             money += 1;
//             askForInput();
//         } else if (tool === "scissors") {
//             money += 5;
//             askForInput();
//         } else if (tool === "old lawnmower") {
//             money += 50;
//             askForInput();
//         } else if (tool === "new lawnmower") {
//             money += 100;
//             askForInput();
//         } else if (tool === "students") {
//             money += 250;
//             if (money < 1000) {
//                 askForInput();
//             } else {
//                 alert("Congraaaaaaatulations! You made $" + money + "This means you have won the game!")
//             }
//         }
//     };
     


// ////////////////////////////////////////
// ///// Purchase Tool
// ////////////////////////////////////////

// // setting first condition if money is less that 5 

// const checkTool = function () {
//     if (money < 5) {
//         alert("Almost there! Keep landscaping! You need $5 to buy a tool––");
//         askForInput();
//     } else {
//         buyTool();
//     }
// };

// //setting other conditions for when money is 5 and up

// const buyTool = () => {
//     if ((money >= 5) && (tool === 'teeth')) {
//       alert('Yay! Go on, buy yourself a new tool!')
//       buyScissors();
//     } else if ((money >= 25) && (tool === 'scissors')) {
//       alert('Movin on up! But yourself a new tool!')
//       buyOldLawnmower();
//     } else if ((money >= 250) && (tool === 'old lawnmower')) {
//       alert('New tool time!')
//       buyNewLawnmower();
//     } else if ((money >= 500) && (tool === 'New lawnmower')) {
//       alert('Big money mo tools!!')
//       buyTeamOfStudents();
//     } else {
//       alert('Sorry, you don\'t have enough money to buy a new tool yet.  Keep landscaping!');
//       askForAction();
//     }
//   };

// ////////////////////////////////////////
// ///// Buy Functions
// ////////////////////////////////////////

// const buyScissors = () => {
//     cost = 5;
//     money -= 5;
//     makeAmount = 5;
//     tool = 'scissors';
//     alertText();
//   };
  
//   const buyOldLawnmower = () => {
//     cost = 25;
//     money -= 25;
//     makeAmount = 50;
//     tool = 'old lawnmower';
//     alertText();
//   };
  
//   const buyNewLawnmower = () => {
//     cost = 250;
//     money -= 250;
//     makeAmount = 100;
//     tool = 'new lawnmower';
//     alertText();
//   };
  
//   const buyTeamOfStudents = () => {
//     cost = 500;
//     money -= 500;
//     makeAmount = 250;
//     tool = 'students';
//     alertText();
//   };
  
//   const alertText = () => {
//     alert('You can buy ' + tool + ' for $' + cost + '.');
//     alert('You have purchased ' + tool + '!  Using this tool will earn you $' + makeAmount + ' each day!');
//     askForAction();
//   };
//   document.addEventListener('DOMContentLoaded', () => {
//     startGame();
//   });


// const smallNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

// const nums = [ 37, 826,209, 419, 309, 48, 738,709,728, 607, 9, 863, 976, 588, 611, 164,383, 261, 14, 525,479,169,755,574, 330,
//   736, 541, 838, 577,957,179,436,333, 206, 295,744,926, 799, 691,259,401,104,630,645, 722, 607, 587, 714, 446, 356, 18, 16, 14, 5,
//   13,13,17, 5, 5, 18, 12, 5, 18, 11, 2, 2,  9,  8, 4,5,18, 15,18,0,6,11,18,14, 2, 19, -14, 5, 18, 12, 3, 12, 7, 15, 5, 3, 12, 7, 6,
//   10, 3, 3, 3, 18, 12, 14 ];

// const panagram = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

// const panagrams = [ 'The','job', 'requires', 'extra', 'pluck', 'and', 'zeal', 'from', 'every', 'young', 'wage', 'earner',  'Quick', 'zephyrs', 'blow,', 'vexing', 'daft', 'Jim', 'Two', 'driven', 'jocks', 'help', 'fax', 'my', 'big',
//   'quiz', 'Five', 'quacking', 'zephyrs', 'jolt', 'my', 'wax', 'bed', 'The', 'five', 'boxing', 'wizards', 'jump', 'quickly', 'Pack',
//   'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs', 'We', 'promptly', 'judged', 'antique', 'ivory', 'buckles', 'for', 'the',
//   'next', 'prize', 'Jaded', 'zombies', 'acted', 'quaintly', 'but', 'kept','driving','their','oxen','forward' ];

/////////////////////////////////////////////////////
/////// EVERY Method
////////////////////////////////////////////////////

// Determine if every number is greater than or equal to 0

// function isGreaterThanZero (n) {
//   return n >= 0;
// }

// console.log(smallNums.every(isGreaterThanZero));

// // returns true

// Determine if every word shorter than 8 characters

// function isLessThan8 (n) {
//     return n.length <= 8;
// }

// console.log(panagrams.every(isLessThan8))


/////////////////////////////////////////////////////
/////// FILTER Method
////////////////////////////////////////////////////

// filter the array for numbers less than 100

// const filtered = nums.filter(value => value < 100);
// console.log(filtered);


// filter words that have an even length

// function isEven (n) {
//     return n.length % 2 === 0;
// }
// console.log(panagrams.filter(isEven))


/////////////////////////////////////////////////////
/////// FIND Method
////////////////////////////////////////////////////


// Find the first value divisible by 5

// function isDivisibleBy5 (array) {
//     return array % 5 === 0;
// }

// console.log(nums.find(isDivisibleBy5))

// find the first word that is longer than 6 characters

// function isLongerThan (characters) {
//     return characters.length > 6;
// }

// console.log(panagrams.find(isLongerThan))


/////////////////////////////////////////////////////
/////// FIND Index Method
////////////////////////////////////////////////////

///////////////////////////////////////////////////


///////////////////////////////////////////////////
////////// define
///////////////////////////////////////////////////



const tools = ["teeth", "scissors", "old lawnmower", "new lawnmower", "group of students"]
let walletBalance = 0

for (walletBalance = 0; walletBalance <= 1000; walletBalance++) {
  alert("Welcome to the landcaper game let get to the bag")
  break
}
if (walletBalance < 5) {
  alert("Keep landscaping! You can do it!")
  walletBalance += 1
} else if (walletBalance > 5 && tools[1] === "scissors") {
  alert("Congrats!! You have enough to buy some scissors!")
    walletBalance += 5
  } else if (walletBalance > 25 && tools[2] === "old lawnmower") {
    alert("Congrats!! You have enough to buy an old lawnmower")
    walletBalance += 50
  } else if (walletBalance > 250 && tools[3] === "new lawnmower") {
    alert("Congrats you have enough to buy a new lawnmower")
    walletBalance += 100
  } else if (walletBalance > 500 && tools[4] === "group of students") {
    alert("Congrats you're almost there")
    walletBalance += 250
  } else if (walletBalance > 1000) {
    alert("You Winn!!!!!!")
  } else {
    alert("keep landscaping")
  }

 