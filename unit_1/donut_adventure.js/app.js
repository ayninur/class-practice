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
            Math.floor(math.random(this.catchPhrases.length))
        }
        announceHealth() {
            console.log(this.health)
        }
        fight() {
            console.log("I'm ready to rumble")
        }
}

const dougie = new Hero("Dougie");