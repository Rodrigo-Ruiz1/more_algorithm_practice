//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
const nums = [1, 1, 1, 2, 2, 3, 4, 4, 4]
const singleNumber = (nums) => {
    let result
    let map = {}

    for (i = 0; i< nums.length; i++) {
        //iterating through the array to create hashtable. If number is not present in the hashtable, it is tallied once; otherwise the tally is incremented.
        map[nums[i]] = map[nums[i]] + 1 || 1;
    }
    for (const key in map) {
        //iterating through the keys in the hashtable to find the value that only appeared once
        if (map[key] === 1) {
            console.log(key);
        }
    }
}

singleNumber(nums)