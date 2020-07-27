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

const checkPalindrome = (string) => {           //Write a function checkPalindrome that accepts a single argument a string.
    // The function should return true if the string is palindrome a plaindrome = the word backwards
    sting = string.toUpperCase()
    let stringReversed = string.split("").reverse().join("");//describing what palindrome is
    if (string === stringReversed) {
        return true
    }
    return false;
}
console.log(checkPalindrome("badab"));
console.log(checkPalindrome("Ayni"))



