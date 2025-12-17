//Q) Find the second largest element in the arr

function secondLargest(){
 let arr = [10,40,78,65,20,36];
 let uniqueArr = [...new Set(arr) ];
uniqueArr.sort((a,b) => b  - a); //sorting in descending order
return uniqueArr[1];

}

console.log(secondLargest());