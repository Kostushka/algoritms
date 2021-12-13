const arr = [4, 6, 3, 9, 2, 1, 0, -4, 10, 45, 38, 89, 33, -66];
let count = 0;

const quickSort = (array) => {
    // условие выхода из рекурсии
    if (array.length <= 1) {
        return array;
    }
    // индекс значения для сравнения
    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex];
    let less = [];
    let greater = [];
    // перебираем массив и формируем два других массива со значениями больше и меньше срединного значения
    for (let i = 0; i < array.length; i++) {
        count += 1;
        if (pivotIndex === i) {
            continue;
        }
        if (array[i] < pivot) {
            less.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    }
    // рекурсивно создаем массивы, потом все их складываем в один и возвращаем
    return [...quickSort(less), pivot, ...quickSort(greater)];
};

console.log(quickSort(arr));
console.log(count);
