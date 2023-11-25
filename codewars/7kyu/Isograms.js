// Isogram

// ❗DESCRIPTION:
//     An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//
// Example: (Input --> Output)
//
// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
//
// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

// ✔️ SOLUTIONS:
function isIsogram(str){
    // Регулярное выражение проверяет, есть ли в строке повторяющиеся словесные символы (буквенные или цифровые), и игнорирует регистр
    const regex = /(\w).*\1/i;

    // Возвращает true, если строка содержит только уникальные символы, иначе false
    return !regex.test(str);
}

// популярное решение на codeWars
// function isIsogram(str){
//     return new Set(str.toUpperCase()).size == str.length;
// }
