function mergeTopDown(left, right) {
  const res = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }

  return [...res, ...left, ...right];
}

function mergeSortTopDown(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right));
}

console.log(mergeSortTopDown([5, 9, 1, -7, 12, 76, 15, 143, 1]));
