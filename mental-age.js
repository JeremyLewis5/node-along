const getInput = require("./get-input.js");


// 1. take in our user's age, saving it as a variable
const userAge = getInput();

//check if they want help
if (userAge === '--help') {
    console.log('This function returns your mental age.')
    console.log('Please enter you age after "node mental-age.js" and a space.')
}
// 2. divide it by 2 and add 3
const mentalAge = userAge / 2 + 3;

//3. print out the user's age in a sentence
//For example 'You are 23 years old.'
console.log('You are ' + userAge + ' years old.');

// 4. print out the user's mental age in a sentence
// For example "Your mental age is 12 years old."
console.log('You mental age is ' + mentalAge + ' years old.');

