for (let i = 10; i <= 1000; i++) {
    let str = i.toString();
    if (str.length >= 2) {
        let secondToLast = parseInt(str[str.length - 2]);
        if (secondToLast % 2 === 0) {
            console.log(i);
        }
    }
}

