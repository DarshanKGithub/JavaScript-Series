//LocalStorage
let key = prompt("Enter the key to set");
let value = prompt("Enter the value");

localStorage.setItem(key,value);
// console.log(key) ;
console.log(`The value ${key} is ${localStorage.getItem(key)}`);

