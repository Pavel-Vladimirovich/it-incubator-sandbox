// Count characters in your string

// ❗ DESCRIPTION:

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// ✔️ SOLUTIONS:

const count = (string) => {
    let result = {}
    string.split('').forEach((index)=>{
        result[index] ? result[index]++ : result[index] = 1
    })
    return result
}

console.log(count('abb')) //, {'a': 1, 'b': 1}
console.log(count('ABC')) // {'A': 1, 'B': 1, 'C': 1});