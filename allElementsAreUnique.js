function isUnique(arr) {
  return new Set(arr).size === arr.length;
}

console.log(isUnique([1, 2, 3])); // true
