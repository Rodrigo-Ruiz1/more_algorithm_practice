//Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

const thirdMaximumNumber = (nums) => {
    let max
    let secondMax
    let thirdMax
    for (i = 0; i < nums.length; i++) {
        //Quick check to make sure only unique numbers are considered. The second "2" [3,2,2,1] would not be considered the third maximum number.
        if (nums[i] === max || nums[i] === secondMax || nums[i] === thirdMax) {
            continue;
        }
        if (max === undefined || nums[i] > max) {
            thirdMax = secondMax
            secondMax = max;
            max = nums[i]
        } else if (secondMax === undefined || nums[i] > secondMax) {
            thirdMax = secondMax
            secondMax = nums[i]
        } else if (thirdMax === undefined || nums[i] > thirdMax) {
            thirdMax = nums[i]
        }
    } if (thirdMax !== undefined) {
        return thirdMax;
    } else {
        return max;
    }
}

nums = [3,2,1]
console.log(thirdMaximumNumber(nums))