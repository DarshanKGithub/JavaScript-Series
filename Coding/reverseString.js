//Q1. Write a function that reverse a string
const str = "Darshan";
function reverString(str){
    let reverString = "";
    for(let i =str.length - 1; i >= 0; i-- ){
           reverString += str[i];
    }
    return reverString;
    
}

function builtInReverse(str){
    return str.split('').reverse().join('');

}

console.log("Method 1: ");
console.log(reverString(str));
console.log("Method 2: ");
console.log(builtInReverse(str));



