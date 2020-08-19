//  tools

class Ships {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
}
randomInterger = (min, max) => { 
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// rounding the number I gave up and down also for defining random inergers

const uss = new Ships("USS", 20, 5, .7)
const alienShips = new Ships(
    shipNames = ["ship 1", "ship 2", "ship 3", "ship 4", "ship 5", "ship 6"],
    randomInterger(3, 6),
    randomInterger(2, 4),
    randomInterger(.6, .8),
)

console.log(uss)
console.log(alienShips)



// Functions
//  attack, retreat, quit


attack(enemy){
    if (enemy.hull <= 0) {
        alert(`This attack has been successful`)
        alienShips.shift()
        takenOut++
    }
    } 

retreat() {
    alert(`game es over`)
    this.gameOver();
}

// global variables

let alienShips = ['Ship 1', 'Ship 2', 'Ship 3', 'Ship 4', 'Ship 5', 'Ship 6'];

let takenOut = 0;
//////////////// start game

startGame(){
    let userInput = prompt(`Would you like to start a new game?`, '(Y)es or (N)o');
    if (userInput === 'y' || userInput === 'Y') {
        console.log(attack())
    } else {
        prompt(close());
    }
}

gameOver(){
    uss.startGame();
}

///////////////////////////////////////////////////////////
/////// Logic
///////////////////////////////////////////////////////////

while (true) {
    if (win()) {
        alert("you win!");
        break;
    } else {
        if (isDamaged()) {
            alert("YOU'VE BEEN HIT!, YOU'VE BEEN HIT!")
            break
        } else {
        if (isDestroyed) {
            alert("Dammmnnn bruh you been hit hit")
        } else {
            const input = prompt("Do you want to (a) attack, (r) retreat, or (c) continue playing");
        switch (input.toLocaleLowerCase()) {
            case "a":
                attack();
                break;
            case "r":
                retreat();
                break;
            case "c":
                continuePlaying();
                break;
        }
        }
        }
    } 
}

// this doesnt work but i trieddddddd