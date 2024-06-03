// Build Tower Advanced
// https://www.codewars.com/kata/576757b1df89ecf5bd00073b    6 Kyu

// ❗ DESCRIPTION:

// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
//
// For example, a tower with 3 floors looks like this:
//
// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:
//
// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]
// Go challenge Build Tower Advanced once you have finished this :)

// ✔️ SOLUTIONS:

function towerBuilder(nFloors) {
    const tower = []
    for (let i = 0; i < nFloors; i++) {
        const spaces = ' '.repeat(nFloors - i - 1)
        const stars = '*'.repeat(2 * i + 1)
        tower.push(spaces + stars + spaces)
    }
    return tower
}

console.log(towerBuilder(1)) // ["*"]
console.log(towerBuilder(2)) // [" * ","***"])
console.log(towerBuilder(3)) // ["  *  "," *** ","*****"])
// console.log(towerBuilder(6))