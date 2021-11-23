// Given an array of integers nums and an integer EventTarget, return indices of the two numbers such that they add up to EventTarget.

nums = [2,5,5,11];
const target = 10;

const twoSum = (nums, target) => {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let value = nums[i]
        let pair = target - value;
        if (map[pair] !== undefined) {
            console.log([map[pair], i])
            return [map[pair], i]
        } else {
            map[value] = i;
        }
    }
}

twoSum(nums, target)