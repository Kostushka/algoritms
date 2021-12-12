const arr = [4, 6, 3, 9, 2, 1, 0, -4, 10, 45, 38, 89, 33, -66];
let count = 0;

const bubleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            // попарно сравниваем значения
            if (array[j + 1] < array[j]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
            count += 1;
        }
    }
    return array;
};

console.log(bubleSort(arr));
console.log(count);
