//Remove the duplicates elements from the array


console.log("The First method to remove duplicate use Set method..!")
function removeDupli(){
    let arr = [10,42,56,89,2,10,4];
    let uniqueArr = [...new Set(arr)];

    return uniqueArr;
}
console.log(removeDupli());

console.log("=======================================================================")
console.log("The Second method to remove duplicate..!")
function removeDuplicate() {
  let arr = [10, 42, 56, 89, 2, 10, 4];
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(removeDuplicate());
