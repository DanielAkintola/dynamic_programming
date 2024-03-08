const cansum = (targetSum, nums) => {
  if (targetSum == 0) {
    return true;
  }

  let result = false;

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    if (element <= targetSum) {
      result = result || cansum(targetSum - element, nums);
    }

    if (result) return true;
  }

  return result;
};

console.log(cansum(7, [4, 2]));
