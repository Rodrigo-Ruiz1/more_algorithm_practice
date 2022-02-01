const array = [-2, 3, 4, 7, 8, 9, 11, 13]
const target = 7

const binarySearch = (array, target) => {
    let left = 0;
    let right = array.length - 1;
    while (left <=  right) {
        let mid = Math.floor((left + right) / 2)
        if (array[mid] == target) {
            return mid
        } else if (target < array[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return -1
}

console.log(binarySearch(array, target))