const arr = [4, 6, 3, 9, 2, 1, 0, -4, 10, 45, 38, 89, 33, -66];
let count = 0;

const linearSearch = (array, item) => {
    for (let i = 0; i < array.length; i++) {
        count += 1;
        if (item === array[i]) {
            return i;
        }
    }
    return null;
};
console.log(linearSearch(arr, 87));
console.log(count);
