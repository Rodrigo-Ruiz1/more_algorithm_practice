//Given a non-negative integer represented as a non-empty array of digits, add one to the integer, changing the value of the array.

const num = [1,2,9]
const plusOne = (num) => {
    for (i = num.length - 1; i >= 0; i--) {
        if (num[i] < 9) {
            num[i] += 1;
            return num
        } else {
            num[i] = 0
        }
    }
    num.unshift(1)
    return num
}

console.log(plusOne(num))