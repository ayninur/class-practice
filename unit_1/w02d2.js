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
for (let i = 0; i <= 100; i++){
    if (i % 3 === 0) {
        console.log("Fizz");//if number divided by 3 log fizz
    } else if (i % 5 === 0) {
        console.log("Buzz!");//if divisible by 5 Buzz
    } else if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz!");//if divisible by both FizzBuz
    } else {
        console.log("This number is divisible by neither––")
    }
}
