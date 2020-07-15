/*
Section 1: Terms

1. DRY stands for Don't Repeat Yourself. We should pay attention to it because of efficiency and reducing the chance 
of bugs by having less code. An application of this is a while loop.

2. The difference between const, let, and var is var globally sourced but is also becoming used less often term. let and const 
are block sourced the difference between these two is that let variables can be updated but not redeclared, whereas, const variables 
can neither be updated nor redeclared. 
*/
// Section 2: Boolean Expressions

// 3. 
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';
const f = false;
let g = 110;

console.log(a < b);
console.log(c > 16);
console.log('Name' === 'Name');
console.log(a < b < c);
console.log(a === a < d);
// IDK WHY ITS NOT TRUE WHA GWAN?
console.log(e == 'Kevin');
console.log(48 == '48');
console.log(f !== e);
// set a new variable g to 0
console.log(g);
// set g to be equal to b + c
{var g = 110;
    console.log(g)}
/* I used const inside the curly brackets because thats the only way I can change a const variable. When I put in the values without the variable the error message states "VM2294:1 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:3". when I write 10 = g the error message says "Invalid left-hand side in assignment"
 

 // BONUS CHALLENGE :D check back later/tomorrow with a fresh pair of eyes

 Section 3: while loops
1. Is the code below an infinite loop, why or why not?

while (true) {
	console.log('Do not run this loop');
}

This code is inifinite loop because there is no condition. This means thhe while will always be true and therefore is infinite.

2. Is this an inifinte loop? WHy or why not?

const runProgram = true;

while (runProgram) {
	console.log('Do not run this loop');
	runProgram = false;
}

I'm not sure honestly, I am assuming that it is an infinite loop because there is no incremental command? The loop will always be true because there is nothing
to change it? I expect an infinite loop no change



3. Without running this loop, what is the expected output?
*/

let letters = "A";
let i = 0;
// a while loop that will run as long as i is less than 20
while (i < 20) {
	letters += "A";//add A with every loop
	i++;//with every loop add 1
}
//I expect 20 As as it increments an A with every loop as long as the number of As is less than 20

console.log(letters);

/* Section 4
1. What are the three components of the control panel? Each component is separated by a semicolon ;.

Remember: Write your answers as comments in the file.

The first part of the control panel is: initialize the variable
The second part of the control panel is: set condition
The third part of the control panel is: increment or decrement

2. Write a for loop that will console.log the numbers 0 to 999.*/
for (let i = 0; i < 1000; i++) {
    console.log(i)
}
// BONUS the difference between \ & / is \ is an escape symbol that subsitutes as an apostrophe without breaking the code
// 3. Using a postfix operator i-- instead of i++, write a for loop that iterates in reverse. Console.log a countdown from 999 to 0.
for (let i=999; i > 0; i--) {
    console.log(i);
}
//Write a for loop that uses string concatenation to send a message to the console as well as the current value of i.
for (let i = 1; i < 11; i++) {
    console.log('The value of i is: '+ i +' of 10');
}



