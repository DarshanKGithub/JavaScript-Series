//Q1. Find the largest Element in the array;
function findLarget(){
     let arr = [10,40,78,65,20,36];
     let max = arr[0];
     //First iterate the loop;
     for(let i = 1; i <= arr.length ; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

console.log(findLarget())

