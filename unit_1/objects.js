////////////////////////////////////////////////////////////////////
/////// Creating class
////////////////////////////////////////////////////////////////////


// 1. Hamster Class

class Hamster {
    constructor(owner, name, price) {
        this.owner = owner,
        this.name = name,
        this.price = price
    }

    wheelRun() {
        console.log('squeak squeak');
    }

    eatFood() {
        console.log('nibble nibble');
    }

    getPrice() {
        console.log(this.price);
    }
 
}

// 2. Person Class

class Person {
    constructor(name, age, height, weight, mood, hamsters, bankAccount) {
        this.name = name,
        this.age = 0,
        this.height = 0,
        this.weight = 0,
        this.mood = 0,
        this.hamsters = [],
        this.bankAccount = 0
    }

    getName() {
        return this.name
    }

    getAge() {
        return this.age
    }

    getWeight() {
        return this.weight
    }

    greet() {
        console.log(`this my ${this.name}`);
    }
    eat() {
        this.weight++;
        this.mood++
    }
    exercise() {
        return this.weight--
    }
    ageUp() {
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankaccount += 10;
    }
    buyHamster() {
        this.hamsters.push()
        this.mood++;
        this.bankAccount--;

    }

}



