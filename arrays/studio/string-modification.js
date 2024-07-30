const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newStr = str.slice(0,3);
let endStr = str.slice(3);
let piglatin = endStr + newStr;
console.log(piglatin);
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`If you see ${piglatin}, it is ${str} in piglatin.` );
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userInput = input.question('Enter the number of letters to relocate:');
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
let num = 3;
if (userInput.length === 0) {
    console.log('No input provided. Defaultin to moving 3 characters.');
} else if (userInput.length > str.length || userInput < 1) {
    console.log('Invalid input. Defaulting to moving 3 characters');
} else {
    num = userInput.length;
}  

