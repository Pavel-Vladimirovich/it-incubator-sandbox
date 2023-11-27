// Reversed sequence

// ❗DESCRIPTION:
//     Build a function that returns an array of integers from n to 1 where n>0.
//
// Example : n=5 --> [5,4,3,2,1]
//
// ✔️ SOLUTIONS:

const reverseSeq = n => {
   let result = []
    for(let i = 0; i < n; i++){
        result.push(i+1)
    }
    return result.reverse()
};