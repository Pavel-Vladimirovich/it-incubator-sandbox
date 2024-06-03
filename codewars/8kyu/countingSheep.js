// Counting sheep...

// ❗ DESCRIPTION:

//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
//
// For example,
//
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.
//
// Hint: Don't forget to check for bad values like null/undefined

// ✔️ SOLUTIONS:

function countSheeps(sheep) {
    let count = 0
    for (let i = 0; i < sheep.length; i++) {
        if (sheep[i]) {
            count += 1
        }
    }
   return count
}

console.log(countSheeps([undefined, null, false, true])) // 1
console.log(countSheeps([undefined, null, false, true, true, false, null, undefined])) // 2
console.log(countSheeps([true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true])) // 17