const arr = [10,18,7,6,11];

function findSumOfElementIndex(arr){
    let find = 13;
    for(let i = 0; i < arr.length; i++){
        for(let j = 1 + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === find){
                return [i,j];
            }
        }
    }
    return -1;
}


console.log(findSumOfElementIndex(arr));