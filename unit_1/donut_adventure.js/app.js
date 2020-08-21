// create class hero
class Hero {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.weapons = {
            sprinkleSpray: 5,
            sugarShock: 10
        }
        this.catchPhrases = [
            `I'm fresher than day old pizza`,
            `you can't count my calories`
        ]
        }
        talkSass() {
            Math.floor(Math.random(this.catchPhrases.length))
        }
        announceHealth() {
            console.log(this.health)
        }
        fight(enemy) {
            console.log(this.weapons.superShock)
            console.log("I'm ready to rumble")
            this.weapons.sugarShock -= this.health;
            console.log(`${enemy.name} got hit by Sugar Shock, the damage is" ${enemy.weapons.sugarShock}`)
        }
}

const dougie = new Hero("Dougie");

//  create class Enemy

class Enemy {
    constructor(name, health, weapons) {
        this.name = name,
        this.health = health
    // Methods
        this.weapons = {
            pepperoniStars: 5,
            cheeseGrease: 10
        }
        this.catchPhrases = [
            `i'm youtube famous`,
            `i'm more dangerous than an uncovered sewer`
        ]
    }
        talkSmack() {
            console.log(Math.floor(Math.random(this.catchPhrases.length)))
        }
        announceHealth() {
            console.log(this.health)
        }
        fight(enemy) {
            console.log(this.weapons.cheeseGrease)
            console.log(`I'm gonna flatten you like a slice slice of pepperoni!`)
            this.weapons.cheeseGrease -= this.health;
            console.log(`${enemy.name} got hit by Cheese Greese, the damage is: ${this.weapons.cheeseGrease}`)
        }
}

const pizzaRat = new Enemy("Pizza Rat")

// Walking Down the Street

// 1. Have Dougie talkSass

dougie.talkSass();

// 2. Have Pizza Rat talkSmack

pizzaRat.talkSmack();

// 3. Have Dougie announceHealth

dougie.announceHealth();

// 4. Have Pizza Rat announceHealth

pizzaRat.announceHealth();

// Fight!

// 1. Have Pizza Rat fight Dougie

pizzaRat.fight(dougie);

// 2. Have Dougie fight Pizza Rat

dougie.fight(pizzaRat);

// 3. Have Pizza Rat and Dougie both announceHealth to make sure their health has decreased!

pizzaRat.announceHealth();
dougie.announceHealth();