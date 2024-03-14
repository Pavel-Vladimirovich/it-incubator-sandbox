// Is this a triangle?

// ❗ DESCRIPTION:

// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
//
// (In this case, all triangles must have surface greater than 0 to be accepted).
//
// Examples:
//
//     Input -> Output
// 1,2,2 -> true
// 4,2,3 -> true
// 2,2,2 -> true
// 1,2,3 -> false
// -5,1,3 -> false
// 0,2,3 -> false
// 1,2,9 -> false


// ✔️ SOLUTIONS:

const isTriangle = (a, b, c) => {
    let arr = [a, b, c].sort((d, e) => (d - e))
    return (arr[0] + arr[1] > arr[2])
}

console.log(isTriangle(1, 2, 2)) // true
console.log(isTriangle(7, 2, 2)) // false
console.log(isTriangle(1, 2, 9)) // false
console.log(isTriangle(0, 2, 3)) // false