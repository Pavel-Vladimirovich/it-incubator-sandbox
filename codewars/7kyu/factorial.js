// Factorial

// ❗ DESCRIPTION:

// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.
//
// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).
//
// More details about factorial can be found https://www.wikiwand.com/en/articles/Factorial.

// ✔️ SOLUTIONS:

const factorial = (n) => {
    if (n < 0 || n > 12) {
        throw new RangeError("Input must be between 0 and 12 inclusive");
    } else {
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

console.log(factorial(0)) // "factorial for 0 is 1"
console.log(factorial(1)) // "factorial for 1 is 1"
console.log(factorial(2)) // "factorial for 2 is 2"
console.log(factorial(3)) // "factorial for 3 is 6"