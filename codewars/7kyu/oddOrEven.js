// Odd or Even?

// ❗ DESCRIPTION:

// Task:
//     Given a list of integers, determine whether the sum of its elements is odd or even.
//
//     Give your answer as a string matching "odd" or "even".
//
//     If the input array is empty consider it as: [0] (array with a zero).
//
// Examples:
//     Input: [0]
// Output: "even"
//
// Input: [0, 1, 4]
// Output: "odd"
//
// Input: [0, -1, -5]
// Output: "even"
// Have fun!

// ✔️ SOLUTIONS:

function oddOrEven(array) {
    if (!array.length) {
        array = [0]
    }
    let result = array.reduce((previousValue, currentValue) => previousValue + currentValue)
    if (result % 2 === 0) {
        return 'even'
    } else {
        return 'odd'
    }
}

oddOrEven([0, 1, 5]) //'even'
oddOrEven([0, 1, 3]) //'even'
oddOrEven([0, 1, 4]) //'add'
oddOrEven([]) //'even'