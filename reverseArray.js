//Q) Reverse the array

console.log("Method 1");
function reverseArray(){
    let arr = [10,9,8,7,6,5,4,3,2,1,0];
    let reverseArr = [];
    for(let i = arr.length - 1; i >= 0; i--){
           reverseArr.push(arr[i]);
    }
    return reverseArr;
    
}
console.log(reverseArray());
console.log("=======================================================================")
console.log("Method 2");
function reverseArr(){
 let arr = [10,9,8,7,6,5,4,3,2,1,0];
 return arr.reverse();
}
console.log(reverseArr());