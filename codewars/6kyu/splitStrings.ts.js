// Split Strings
//
// ❗DESCRIPTION:
//     Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
//
//     Examples:
//
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']
//
// ✔️ SOLUTIONS:

function solution(str){
    const result = [];

    for (let i = 0; i < str.length; i += 2) {
        const pair = str.slice(i, i + 2);
        result.push(pair.length === 1 ? pair + '_' : pair);
    }

    return result;
}

// or
//
// function solution(s){
//     return (s+"_").match(/.{2}/g)||[]
// }