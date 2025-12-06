function removeZeros(num) {
    return parseInt(num.toString().replace(/0/g, '')) || 0;
}

