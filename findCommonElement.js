function commonElements(a, b) {
  return a.filter(item => b.includes(item));
}

console.log(commonElements([1, 2, 3], [2, 3, 4]));
