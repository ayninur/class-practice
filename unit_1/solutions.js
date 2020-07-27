/////////////////////////////////////////////////////
/////// Verbal Questions
/////////////////////////////////////////////////////

//  1. What is the difference between a parameter and an arguement?
// 
// The arguement is the input and the parameter is how the input is represented in the function.
// 
// 2. Within a function, what is the difference between return and console.log?
// 
// Some of the differences between the two is console.log does not interrupt your flow where as return
// will cause reactions in your script. Additionally, return statements may not always show on the console where as console.logs do
// 

/////////////////////////////////////////////////////
/////// Palindrome
/////////////////////////////////////////////////////


// Write a function checkPalindrome that accepts a single argument, a string. The function should return true (Boolean) if the string 
// is a palindrome, false if it is not. Make sure your function will give the correct answer for words with capital letters.

// const checkPalindrome = (string) => {           //Write a function checkPalindrome that accepts a single argument a string.
//     // The function should return true if the string is palindrome a plaindrome = the word backwards
//     sting = string.toUpperCase()
//     let stringReversed = string.split("").reverse().join("");//describing what palindrome is and why the string has to be the same as its reverse
//     if (string === stringReversed) {
//         return true
//     }
//     return false;
// }
// console.log(checkPalindrome("badab"));//hey console try thia
// console.log(checkPalindrome("Ayni"))



/////////////////////////////////////////////////////
/////// Sum Array
/////////////////////////////////////////////////////


// sumArray = (array) => {                         // Write a function sumArray that takes an array as an argument

//     let sum = 0;

//     for (let i = 0; i < array.length; i++) {            // To iterate over a loop
//         sum += array[i];                                //sum of the array

//     }
//         return sum;                                    // what would be the sum of the array

// }

// console.log(sumArray([1, 2, 3, 4, 5, 6]));              // if this is the array


/////////////////////////////////////////////////////
/////// Prime Numbers
/////////////////////////////////////////////////////

// A Prime number is a number that is not evenly divisible by another number except 1 and itself. 
// If you want to read more deeply about it, go here. To test whether a number is Prime, you only need to test as far 
// as the square root of that number. This is advisable for optimization and testing large numbers.

// Write a function called checkPrime that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not.

// Hint: Check every number up to the square root. To do this, try a for loop.


// const checkPrime = (number) => {
//     if(number === 0 || number === 1 || number < 2 || number % 2 === 0) {
//         return false;
//     }
//     if (number === 2) {
//         return true;
//     }
//     for(let i = 3; i < number; i++) {
//         if(number % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }




// // Write another function called printPrimes that will print (console log) all the Primes up to an arbitrary limit. 
// // For example, if you invoke your function with printPrimes(97), it will print all the Prime numbers up to and including 97.

// // This function can call on the previous checkPrime function.

// console.log(checkPrime(3))

// const printPrimes = (limit) => {
    
//     for(let i = 0; i < limit; i++) {

       
//         if(checkPrime(i)){

           
//             console.log(i);
//         }
//     }


// printPrimes(97);//stuck revisit



/////////////////////////////////////////////////////
/////// Prime Numbers
/////////////////////////////////////////////////////



// Create the rock paper scissors game for the console! Rock paper scissors is a game of chance where two players throw out one of the 
// three options, rock, paper, or scissors. To determine who wins, use the following guidelines: rock beats scissors, scissors beats 
// paper, paper beats rock.

// Write a function called randomMove that returns a randomly chosen move (rock, paper, or scissors).
// Then create a function called rockPaperScissors that runs one round of the game. It should accept two arguments,
//  the computer's move and the user's move, and somehow compare the two to decide who the winner is and return who won.

const randomMove = () => {
    const choices = ["rock", "paper", "scissors"]
    for (let i = 0; i < choices.length; i++) {
        let randomIndex = Math.floor(Math.random() * choices.length)
        return choices[randomIndex]
    }
}

let comp = randomMove()
let player = randomMove()

const rockPaperScissors = (compChoice, playerChoice) => {
  
    if(player === 'Rock' && computer === 'Scissors'){
        console.log('Player wins they chose ' + player);
    } else if (player ==='Paper' && computer === 'Rock') {
        console.log('Player wins they chose ' + player); 
    } else if (player === 'Scissors' && computer === 'Paper') {
        console.log('Player wins their chose ' + player);
    } else {
        console.log('Computer wins it chose ' + computer);
    }

}

console.log(rockPaperScissors(comp, player))

compChoice();
rockPaperScissors();