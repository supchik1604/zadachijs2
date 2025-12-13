for (let i = 10; i <= 1000; i++) {
    let str = i.toString();
    let firstDigit = parseInt(str[0]);
    if (firstDigit % 2 === 0) {
        console.log(i);
    }
}

