function sumDigits(num) {
    let sum = 0;
    let str = Math.abs(num).toString();
    for (let i = 0; i < str.length; i++) {
        sum += parseInt(str[i]);
    }
    return sum;
}

