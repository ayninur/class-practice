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

// global variables

let alienShips = ['Ship 1', 'Ship 2', 'Ship 3', 'Ship 4', 'Ship 5', 'Ship 6'];

let takenOut = 0;
//////////////// start game

// startGame(){
//     let userInput = prompt(`Would you like to start a new game?`, '(Y)es or (N)o');
//     if (userInput === 'y' || userInput === 'Y') {
//         console.log(attack())
//     } else {
//         prompt(close());
//     }
// }






// if(Math.random() < this.accuracy) {
    //     console.log(
    //         `${this.name} is damaged by ${enemy.name}`
    //       );



///////////////////////////////////////////////////////////
/////// Logic
///////////////////////////////////////////////////////////

// while (true) {
//     if (win()) {
//         alert("you win!");
//         break;
//     } else {
//         if (isDamaged()) {
//             alert("YOU'VE BEEN HIT!, YOU'VE BEEN HIT!")
//             break
//         } else {
//         if (isDestroyed) {
//             alert("Dammmnnn bruh you been hit hit")
//         } else {
//             const input = prompt("Do you want to (a) attack, (r) retreat, or (c) continue playing");
//         switch (input.toLocaleLowerCase()) {
//             case "a":
//                 attack();
//                 break;
//             case "r":
//                 retreat();
//                 break;
//             case "c":
//                 continuePlaying();
//                 break;
//         }
//         }
//         }
//     } 
// }

// class Ships {
//     constructor(name, hull, firepower, accuracy, damage, retreated) {
//         this.name = name;
//         this.hull = hull || Math.floor(Math.random() * 4)+ 2;
//         this.firepower = firepower || Math.floor;
//         this.accuracy = accuracy ||;
//         this.damage = true || false;
//         this.retreated = false || true;
//     }
// }

// const USS = new Ships(20, 5, .7)
// const alienShips = new Ships


//   fight(enemy) {
//     if (Math.random() < this.accuracy) {
//       console.log(
//         `${this.name} has done ${this.firepower} damage to ${enemy.name}`
//       );
//       console.log((enemy.hull -= this.firepower));
//       if (enemy.hull <= 0) {
//         //   console.log(`${enemy.name} has already been destoryed`);
//         alienShips.shift();
//         console.log(alienShips);
//         console.log(enemy.hull);
//       }
//     } else {
//       console.log(`${this.name} missed`);
//     }
//   }
//   showStatus() {}
// }
// for (let i = 1; i <= 6; i++) {
//   aliens = new SpaceShip(`AlienShip ${i}`);
//   alienShips.push(aliens);
// }
// const hero = new SpaceShip("USS Enterprise", 20, 5, 0.7);
// console.log(alienShips[0]);
//console.log(alienShips[0]);
//console.log(alienShips[0].fight(hero));
//console.log(hero.fight(alienShips[0]));
