"use strict";
const hasUniqueChar = (word) => {
    return word.split('').find((char, index, arr) => arr.indexOf(char) !== index) === undefined;
};
function filterArray(arr) {
    return arr.filter(e => hasUniqueChar(e));
}
const wordsArray = ["apple", "orange", "grape", "peach", "banana", "kiwi"];
const uniqueWords = filterArray(wordsArray);
console.log(uniqueWords);
