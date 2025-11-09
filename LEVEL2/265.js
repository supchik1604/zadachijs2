let arr = [1, 2, 3, 4, 5, 6];

let merged = [];
for (let i = 0; i < arr.length; i += 2) {
    let pair = arr[i].toString() + arr[i + 1].toString();
    merged.push(parseInt(pair));
}
console.log(merged);

