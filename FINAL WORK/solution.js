function getMaxMin(arr) {
    if (arr.length === 0) {
        return {
            max: undefined,
            min: undefined
        };
    }
    
    return {
        max: Math.max(...arr),
        min: Math.min(...arr)
    };
}

// Пример использования:
let numbers = [5, 2, 10, 3, 8, 1];
let result = getMaxMin(numbers);
console.log(result); // { max: 10, min: 1 }

