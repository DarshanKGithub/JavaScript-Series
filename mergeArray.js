function mergeAndSort(a, b) {
  return [...a, ...b].sort((x, y) => x - y);
}

console.log(mergeAndSort([3, 1], [5, 2]));
