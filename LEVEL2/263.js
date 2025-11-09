let str = '1234567';

let result = '';
let count = 0;
for (let i = str.length - 1; i >= 0; i--) {
    if (count > 0 && count % 3 === 0) {
        result = ' ' + result;
    }
    result = str[i] + result;
    count++;
}
console.log(result);   