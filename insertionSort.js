const insertionSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let j = i;

    while (j > 0 && nums[j] < nums[j - 1]) {
      [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
      j--;
    }
  }

  return nums;
};

console.log(insertionSort([5, 1, -4, 0, 13, 9, 6, 2, 7, -3, 8]));
