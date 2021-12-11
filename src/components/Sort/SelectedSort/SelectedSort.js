const arr = [4, 6, 3, 9, 2, 1, 0, -4, 10, 45, 38, 89, 33, -66];
let count = 0;

const selectionSort = (array) => {
    // перебираем массив по индексу
    for (let i = 0; i < array.length; i++) {
        let min = i;
        // находим минимальное значение и присваиваем его индекс в переменную min
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
            count += 1;
        }
        // меняем местами значение по индексу с минимальным значением
        // let a = array[i];
        // array[i] = array[min];
        // array[min] = a;
        [array[i], array[min]] = [array[min], array[i]];
    }
    return array;
};

console.log(selectionSort(arr));
console.log(arr.length);
console.log(count);
