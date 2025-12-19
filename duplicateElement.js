//Find duplicate element

const arr = [1,2,3,4,5,6,7,8,9,2,3,4];

function findDupilcate(arr){
     const sortedArr = [...arr].sort((a,b) => a - b);
     let duplicateElement = [];
     console.log(sortedArr);
     for(let i = 0; i < sortedArr.length - 1; i++){
     if(sortedArr[i] === sortedArr[i + 1]){
        duplicateElement.push(sortedArr[i]);
     }
    }
    return duplicateElement;
        
}
console.log(findDupilcate(arr));