// 1. INITIALIZE VARIABLES or game members
let USS;
let alienShips = [];

// 2. Make a class for all the spaceships, the first value is for the USS and the second for the Alien Ships
//      -in order to find a random value within a range of numbers use the following: Math.floor(Math.random() (max - min + 1) + min)

class SpaceShips {
    constructor(name, hull, firepower, accuracy) {
        this.name = name; 
        this.hull = hull || Math.floor(Math.random() * 4) + 3;
        this.firepower = firepower || Math.floor(Math.random() * 3) + 2;
        this.accuracy = accuracy || (Math.floor(Math.random() * 3) + 6) / 10;
    }
}

fight(enemy){
// if the number that is randomly populated is less that .8
    if(Math.random() < this.accuracy) {
// then alert this
        alert(
            `The ${this.name} has successfully hit and has done ${this.firepower} damage to ${enemy.name}.`
        );
// deduct the random hull number generated from the firepower
        enemy.hull -= this.firepower;
// if the enemy's hull is less than 0
        if(enemy.hull <= 0) {
// this alien ship has been d e s t r o y e d = O
            alert(
                `${enemy.name} has been destroyed!`);
// Let's remove this ship from our array
                alienShips.shift();
// once there are no more ships in our array the game is o v e r 
            if(alienShips.length === 0 || USS.hull <= 0) {
                gameOver();
            }
// if not show the status of the player
        } else {
            this.showStatus(enemy);
        }
      } else {
          alert(`${this.name} missed ${enemy.hull}`);
      }
    }
    showStatus(enemy) {
        alert(`${enemy.name}'s hull is now at ${enemy.hull}`);
    }
}


