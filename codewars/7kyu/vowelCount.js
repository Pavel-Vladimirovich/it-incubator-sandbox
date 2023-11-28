// Vowel Count
//
// DESCRIPTION:
// Return the number (count) of vowels in the given string.
//
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
//
// The input string will only consist of lower case letters and/or spaces.
//
// ✔️ SOLUTIONS:

function getCount(str) {
    const vowels = str.match(/[aeiou]/g);
    return vowels ? vowels.length : 0;
}

// of best practice
// function getCount(str) {
//      return (str.match(/[aeiou]/g) || []).length;
// }