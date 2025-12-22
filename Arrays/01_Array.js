//Here we are doing all Array Methods
console.log("=============================================================================================");
const myArr = [0,1,2,3,4,5];
console.log(myArr); // Just Printing the Aray
console.log("Array Index Element: ",myArr[1]);//Accessing the index which the element is present
console.log("=============================================================================================");
//1.Push Method
myArr.push(6);//it will push the element on the last
console.log("Added element on the last: ",myArr); // [0,1,2,3,4,5,6]
console.log("=============================================================================================");
//2.Pop Method
myArr.pop();// this method remove the last element in the array
console.log("Removed the last element: ".myArr);
console.log("=============================================================================================");
//3.Unshift Method
myArr.unshift(9); // this method will add element at the start
console.log("Added element at the start: ",myArr);
console.log("=============================================================================================");
//4.Shift Method
myArr.shift();//this method will remove the element from the start
console.log("Element Remove fromy the start: ",myArr);
console.log("=============================================================================================");
//5.Include Questioner Method
console.log(myArr.includes("Array Present: ",9));//this method search whether the given element present in array or not , it will give boolen value True/False.
console.log("=============================================================================================");
//6.Indexof
console.log(myArr.indexOf("Array Present on index: ",2));// this method show the index of the given element
console.log("=============================================================================================");
//7.join method
const newArr = myArr.join();// Join method converts the array into a string 
console.log(typeof newArr);
console.log(newArr);
console.log("=============================================================================================");
//8.Slice
const myN1 = myArr.slice(1,3);
console.log("Slice method: ",myN1);
console.log("=============================================================================================");
//9.Splice Method
const myN2 = myArr.splice(1,3);
console.log(myArr);
console.log(myN1);
console.log(myArr);
console.log("Splice Method: ",myN2);









