// Detect Pangram

// ❗ DESCRIPTION:

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
//
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// ✔️ SOLUTIONS:

function isPangram(string){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const regex = /([a-z])(?!.*\1)/g;
    return (string.toLowerCase().match(regex) || []).length === alphabet.length;
}

const pangram = "The quick brown fox jumps over the lazy dog."
console.log(isPangram(pangram)) // true

const isNotpangram = "This is not a pangram."
console.log(isPangram(isNotpangram)) // false


// EXAMPLE:

// function isPangram(string){
//   string = string.toLowerCase();
//   return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
//     return string.indexOf(x) !== -1;
//   });
// }