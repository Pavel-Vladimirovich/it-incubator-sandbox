// String ends with?

// ❗ DESCRIPTION:
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// ✔️ SOLUTIONS:

const solution = (str, ending) => {
    if(!ending)return true
    else {
        return str.slice(-ending.length) === ending
    }
}

// clever code wars solution
// function solution(str, ending){
//     return str.endsWith(ending);
// }

console.log( solution('qwewqesdqwe', '')) // требовала проверку на пустую строку, чтобы не было ошибки и возвращала true
console.log( solution('abcde', 'cde'))
console.log( solution('abcde', 'cde'))
console.log( solution('abc', 'd'))