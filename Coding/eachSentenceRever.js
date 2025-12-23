//Q1.Given a string, reverse each word in sentence
var str = "Hello! My name is Darshan Kshetri & i'm working as a Software Developer";
var reverseArray = str.split(" ").map(function(word){
    return word.split("").reverse().join("");
})
console.log(reverseArray.join(" "));
// console.log(reverseArray);



