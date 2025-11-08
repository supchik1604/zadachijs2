let number = 123456789;

let str = number.toString();
let count = 0;

for (let i = 0; i < str.length; i++) {
    let digit = parseInt(str[i]);
    if (digit % 2 === 0) {
        count++;
    }
}

console.log(count);

