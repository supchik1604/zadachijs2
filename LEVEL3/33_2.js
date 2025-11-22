let num = 1357;
let str = num.toString();
let allOdd = true;

for (let i = 0; i < str.length; i++) {
    if (parseInt(str[i]) % 2 === 0) {
        allOdd = false;
        break;
    }
}

console.log(allOdd);

