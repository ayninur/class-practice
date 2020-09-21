// Start off by initializing your two components (alienship&USS)
let alienShips = [];
let USS;

// Let's create a class that describes all the spaceships for the entire game
class SpaceShip {
    constructor(name, hull, firepower, accuracy) {
        // by using the or/|| operator I am able to create one template spaceship for both USS and the alien ships. If the values are are passed in then it's the USS if the variable is not then it will become a random value
        this.name = name;
        // Math.floor(Math.random() (max - min + 1) + min)
        this.hull = hull || Math.floor(Math.random() * 4) + 3;
        this.firepower = firepower || Math.floor(Math.random() * 3) + 2;
        this.accuracy = accuracy || Math.floor(Math.random() * 3) + 6/10;
    }
    fight(enemy) {
        if(Math.random() < this.accuracy) {
            alert(
                `The ${this.name} has successfully hit and has done ${this.firepower} damage to ${enemy.name}`
            );
            enemy.hull -= this.firepower;
            if (enemy.hull <= 0) {
                alert(`${enemy.name} has been destroyed!`);
                alienShips.shift();
                if(alienShips.length === 0 || USS.hull <= 0) {
                    gameOver();
                } else{
                    this.showStatus(enemy);
                } else {
                    alert(`${this.name} missed ${enemy.name}`);
                }
            }
            showStatus(enemy) {
                alert(`${enemy.name}'s hull is now at ${enemy.hull}`);
            }
        }
        const generateShips = () => {
            for (let i = 1; i <= 6; i++) {
                let aliens = new SpaceShip('AlienShip ${i}');
                alienShips.push(aliens);
            }
            USS = new SpaceShip("USS", 20, 5, 0.7);
        }
    }
}

// Now that we've introduced our ship lets start some action
