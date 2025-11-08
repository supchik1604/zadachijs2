let arr = [1, 2, 3, 4, 5, 6];

let middle = Math.floor(arr.length / 2);

let firstHalf = arr.slice(0, middle);
let secondHalf = arr.slice(middle);

let sumFirst = 0;
for (let i = 0; i < firstHalf.length; i++) {
    sumFirst += firstHalf[i];
}

let sumSecond = 0;
for (let i = 0; i < secondHalf.length; i++) {
    sumSecond += secondHalf[i];
}

let result = sumFirst / sumSecond;
console.log(result);

