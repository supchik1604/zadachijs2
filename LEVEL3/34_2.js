let arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr.length; i += 2) {
    if (i + 1 < arr.length) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
}

console.log(arr);

