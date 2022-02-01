const array = [4, 1, 3, 2]

const selectionSort = (array) => {
    const newArray = array.slice();

    for (let i=0; i < newArray.length - 1; i++) {
        let min = i
        for (let j=i; j < newArray.length; j++) {
            if (newArray[j] < newArray[min]) {
                min = j;
            }
        }
        [newArray[i], newArray[min]] = [newArray[min], newArray[i]]
    }
    return newArray
}

console.log(selectionSort(array))
console.log(array)