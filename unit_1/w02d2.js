////////////////////////////////
// Part II: JavaScript Reps
////////////////////////////////

/////////////////////////////////
////// Easy Going
/////////////////////////////////

// 1. Write a for loop that will log the numbers from 1 through 20
// for (i = 0; i <= 20; i++)
// console.log(i)

/////////////////////////////////
////// Get Even
/////////////////////////////////

// 2. Write a for loop that will log only the even numbers 0 through 200
// 
// for (i = 0; i <= 200; i++) {
//     if (i % 2 === 0)
//     console.log(i + " is even")
// }

/////////////////////////////////
////// Fizz Buzz
/////////////////////////////////

//  Write a js application that logs all numbers from 1-100
// for (let i = 0; i <= 100; i++){
//     if (i % 3 === 0) {
//         console.log("Fizz");//if number divided by 3 log fizz
//     } else if (i % 5 === 0) {
//         console.log("Buzz!");//if divisible by 5 Buzz
//     } else if (i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz!");//if divisible by both FizzBuz
//     } else {
//         console.log("This number is divisible by neither––")
//     }
// }

/////////////////////////////////
////// Wild Wild Life
/////////////////////////////////

// 1. Plantee just had a birthday; change Plantee's array to reflect her being a year older

// const plantee = ["plantee", "plant", 5000, "Mordor"] 
// plantee[2] = 5001;
// console.log(plantee)

//  2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City"

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// wolfy[3] = "Gotham City"
// console.log(wolfy)

//  3. Give D'Art a second hometown by adding "Hawkins"

// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
// dart.push('Hawkins')
// console.log(dart)

// 4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// wolfy[0] = "Gameboy"
// console.log(wolfy)

/////////////////////////////////
////// Yell at the Ninka Turtles
/////////////////////////////////

// 1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

// const ninjaTurtle = ["Donatello", "Leonardo", "Raphael" , "Michaelangelo"];

//  console.log(ninjaTurtle.toUpperCase())

//  *********** help

/////////////////////////////////
////// Methods, Revisted
/////////////////////////////////

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// // console.log(favMovies[8])

// // 1. use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
// // 
// favMovies.sort()
// console.log(favMovies)
// // 
// // 2. pop method

// favMovies.pop()
// console.log(favMovies)
// // 
// // 3. push "Guardians of the Galaxy"
// // 
// favMovies.push("Guardians of the Galaxy")
// console.log(favMovies)
// // 
// // 4. Reverse the array

// favMovies.reverse()
// console.log(favMovies)

// // 5. Use the shift method

// favMovies.shift()
// console.log(favMovies)

// // 6. unshift- what does it return?--the same as what was there before

// favMovies.unshift()
// console.log(favMovies)

// // 7. splice

// favMovies.splice(favMovies.indexOf("Django Unchained"), "Avatar");
// console.log(favMovies)

// // 8. slice

// const sliceHalfMovies = favMovies.slice(Math.floor(favMovies.length/2), favMovies.length);
// console.log(sliceHalfMovies);

// //  9. log fast and furious...movie name appears outside of brackets

// console.log('Fast and Furious')

/////////////////////////////////
////// Where is Waldo
/////////////////////////////////

// With the following multi-dimensional array

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

// Remove Eggbert (hint look at the slice/splice method(s))

whereIsWaldo.splice(1,1)
console.log(whereIsWaldo);

// Change "Neff" to "No One"

whereIsWaldo[1][2] = "No One";
console.log(whereIsWaldo[1][2]);

// Access and console.log "Waldo"

console.log(whereIsWaldo[2][1][1]);