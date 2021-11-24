//Given an array nums of size n, return the majority element. The majority element is the element that appears more than n/2 times.

nums = [4,4,4,4,4,3,2,2,1]

const majorityElement = (nums) => {
    let map = {};
    let majority = nums.length / 2;
    for (i = 0; i < nums.length; i++) {
        if (map[nums[i]] !== undefined) {
            map[nums[i]]++
        } else {
            map[nums[i]] = 1;
        }
        if (map[nums[i]] > majority) {
            console.log(nums[i]);
        }
    }
}

majorityElement(nums)