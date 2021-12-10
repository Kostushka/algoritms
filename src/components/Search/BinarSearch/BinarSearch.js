const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
let count = 0;

const binarySearch = (array, item) => {
    let start = 0;
    let end = array.length;
    let middle;
    let position = -1;
    let found = false;
    while (found === false && start <= end) {
        count += 1;
        middle = Math.floor((start + end) / 2);
        if (item === array[middle]) {
            position = middle;
            found = true;
            return position;
        }
        if (item < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return position;
};
console.log(binarySearch(arr, 5));
console.log(count);

const recursiveBinarySearch = (array, item, start, end) => {
    let middle = Math.floor((start + end) / 2);
    count += 1;
    if (item === array[middle]) {
        return middle;
    }
    if (item < array[middle]) {
        return recursiveBinarySearch(array, item, start, middle - 1);
    } else {
        return recursiveBinarySearch(array, item, middle + 1, end);
    }
};
console.log(recursiveBinarySearch(arr, 5, 0, arr.length));
console.log(count);
