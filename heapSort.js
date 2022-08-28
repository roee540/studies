const heapify = (nums, length, parentIndex) => {
  let largest = parentIndex;
  const left = parentIndex * 2 + 1;
  const right = parentIndex * 2 + 2;

  if (left < length && nums[left] > nums[largest]) {
    largest = left;
  }

  if (right < length && nums[right] > nums[largest]) {
    largest = right;
  }

  if (largest !== parentIndex) {
    [nums[largest], nums[parentIndex]] = [nums[parentIndex], nums[largest]];
    heapify(nums, length, largest);
  }
};

const heapSort = (nums) => {
  let lastParent = Math.floor(nums.length / 2) - 1;
  let lastChiled = nums.length - 1;

  while (lastParent >= 0) {
    heapify(nums, nums.length, lastParent);
    lastParent--;
  }

  while (lastChiled >= 0) {
    [nums[0], nums[lastChiled]] = [nums[lastChiled], nums[0]];
    lastChiled--;
    heapify(nums, lastChiled, 0);
  }

  return nums;
};

console.log(heapSort([5, 8, 1, -4, 9, 13, 7, 0, -3]));
