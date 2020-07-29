// LANDSCAPER

console.log('Landscaper Game app.js is attached to index.html');

////////////////////////////////////////
///// Introduce tool box
////////////////////////////////////////


const tool = [
    {
        type: "teeth",
        cost: 0,
        wage: 1,
    },
    {
        type: "scissors",
        cost: 5,
        wage: 5,
    },
    {
        type: "old lawnmower",
        cost: 25,
        wage: 50,
    },
    {
        type: "new lawnmower",
        cost: 250,
        wage: 100,
    },
    {
        type: "students",
        cost: 500,
        wage: 250,
    },
];
 
////////////////////////////////////////
///// Initalize variables
////////////////////////////////////////


let money;
let cost;
let choice;
 


////////////////////////////////////////
///// Start Game
////////////////////////////////////////

const startGame = () => {
    alert(`Hey you! Want to make some money cutting grass?`)
    showStatus();
    promptQuestions();
};
 
////////////////////////////////////////
///// When you go around take off the tool on the front
////////////////////////////////////////

let playerChoice = {
    currentTool: tools.shift()
}
 
// show status
// let user know what tool is currently in their tool box

const showStatus = () => {
    alert(`Currently you have $` + money + `& your tool is` + tool)
};
 
//ask for input

const askForInput = () => {
    showStatus();
    promptQuestions();
};

const promptQuestions = () => {
   playerChoice = prompt("What do you want to do? landscape/buy tool");
    if (playerChoice.toLowerCase() === 'landscape' || playerChoice.toLowerCase() === 'l') {
        landscape()
    } else if (
        playerChoice.toLowerCase() === 'buy tool' && tools.length > 0) {
            buyTool()
        } else {
            alert("Uh Oh! Wrong option, please try again!")
            askForInput()
        }
    };
 
////////////////////////////////////////
///// Grass cutting actions
////////////////////////////////////////

    const landscape = () => {
        if (tool === "teeth") {
            alert('Using' + tool + 'will earn you $1 each day!')
            money += 1;
            askForInput();
        } else if (tool === "scissors") {
            money += 5;
            askForInput();
        } else if (tool === "old lawnmower") {
            money += 50;
            askForInput();
        } else if (tool === "new lawnmower") {
            money += 100;
            askForInput();
        } else if (tool === "students") {
            money += 250;
            if (money < 1000) {
                askForInput();
            } else {
                alert("Congraaaaaaatulations! You made $" + money + "This means you have won the game!")
            }
        }
    };
     


////////////////////////////////////////
///// Purchase Tool
////////////////////////////////////////

// setting first condition if money is less that 5 

const checkTool = function () {
    if (money < 5) {
        alert("Almost there! Keep landscaping! You need $5 to buy a tool––");
        askForInput();
    } else {
        buyTool();
    }
};

//setting other conditions for when money is 5 and up

const buyTool = () => {
    if ((money >= 5) && (tool === 'teeth')) {
      alert('Yay! Go on, buy yourself a new tool!')
      buyScissors();
    } else if ((money >= 25) && (tool === 'scissors')) {
      alert('Movin on up! But yourself a new tool!')
      buyOldLawnmower();
    } else if ((money >= 250) && (tool === 'old lawnmower')) {
      alert('New tool time!')
      buyNewLawnmower();
    } else if ((money >= 500) && (tool === 'New lawnmower')) {
      alert('Big money mo tools!!')
      buyTeamOfStudents();
    } else {
      alert('Sorry, you don\'t have enough money to buy a new tool yet.  Keep landscaping!');
      askForAction();
    }
  };

////////////////////////////////////////
///// Buy Functions
////////////////////////////////////////

const buyScissors = () => {
    cost = 5;
    money -= 5;
    makeAmount = 5;
    tool = 'scissors';
    alertText();
  };
  
  const buyOldLawnmower = () => {
    cost = 25;
    money -= 25;
    makeAmount = 50;
    tool = 'old lawnmower';
    alertText();
  };
  
  const buyNewLawnmower = () => {
    cost = 250;
    money -= 250;
    makeAmount = 100;
    tool = 'new lawnmower';
    alertText();
  };
  
  const buyTeamOfStudents = () => {
    cost = 500;
    money -= 500;
    makeAmount = 250;
    tool = 'students';
    alertText();
  };
  
  const alertText = () => {
    alert('You can buy ' + tool + ' for $' + cost + '.');
    alert('You have purchased ' + tool + '!  Using this tool will earn you $' + makeAmount + ' each day!');
    askForAction();
  };
  document.addEventListener('DOMContentLoaded', () => {
    startGame();
  });