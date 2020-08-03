//////////////////////////////////////////////////////////
//// Answer the Following
//////////////////////////////////////////////////////////

/*1.  For each of the following, write which datatypes you would use to represent the data, and then give 
 a small example of the data structure: */

        //a. A light switch that can be either on or off.

                // datatype: BOOLEAN 
                // example: const lightSwitch = "true";                                                                         

        //b. A user's email address.

                // datatypes: STRING
                // examples: const email = "lkjasldkjs@gmail.com"

        //c. A spaceship with a hull, laser blasters, tractor beam, and warp drive.

                //  datatypes: ARRAY
                // examples: const spaceships = ["blasters", "tractor beam", "wrap drive"]

        //d. A list of student names from our class.

                //  datatypes: ARRAY
                // examples: const studentNames = ["Amy", "Lana", "Will"]

        //e. A list of student names from our class, each with a location.

                // datatypes: ARRAY INSIDE OBJECT
                // examples: const studentsFromClass = {
                //     names: ['Bill', 'Bob', 'Jerry']
                //     location: location,
                // }

        //f. A list of student names from our class, each with a location and each with a list of favorite tv shows.

                // datatypes: OBJECT
                // examples:const studentsFromClass = {
                //     name: "Tim",
                //     location: "Dallas",
                //     movies: ["friends", "ressurection", "show"]
                // }
    

//////////////////////////////////////////////////////////
//// TAKE IT EASY
//////////////////////////////////////////////////////////

// 1. Make an array that holds all of the colors of the rainbow.

// const colorsOfRainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]

// 2. Write code that will access "blue" from the rainbow array.

// console.log(colorsOfRainbow[4])

// 3. Make an object that is called your name and holds the information about your favorite food, a hobby, 
// the name of the town that you live in currently, and your favorite datatype.

// const ayni = {
//     Food: "chocolate",
//     hobby: "hiking",
//     hometown: "Boston",
//     datatype: "objects",
// }

// 4. Write code that will access your hobby from the object that you just created.

// console.log(ayni.hobby)


//////////////////////////////////////////////////////////
//// Crazy Object
//////////////////////////////////////////////////////////

const crazyObject = {
    taco: [{meat: 'steak',
           cheese: ['panela', 'queso', 'chihuahua']},
           {meat: 'chicken',
            salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
          ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [{
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
      ]
    }
  }

// 1. "omg my mouth is burning"

console.log(crazyObject.taco[1].salsa[5])

// 2. "Pretty pretty prettayyyyy good"

console.log(crazyObject.larry.quotes[0])

// 3. "Swearing at Larry and Jeff"

console.log(crazyObject.larry.characters[2].favourtieHobby)

// 4. "Chicken Teriyaki Boyyyyyy"

console.log(crazyObject.larry.nicknames[1])

// 5. The object the contains the name funkhauser

console.log(crazyObject.larry.characters[1].name)

// 6. Add the quote "I'm trying to elevate small talk to medium talk" to Larry's quote array. Confirm that it was added.

console.log(crazyObject.larry.quotes.push("I'm trying to elevate small talk to medium talk"))
console.log(crazyObject.larry.quotes)

