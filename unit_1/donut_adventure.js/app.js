class Hamster {
    constructor (owner, name, price) {
        this.owner = owner,
        this.name = name,
        this.price = 15
    }
//    methods
        wheelRun() {
            console.log("squeak squeak");
        }
        
        eatFood() {
            console.log("nibble nibble");
        }
        
        getPrice() {
            console.log(this.price) 
        }
}

