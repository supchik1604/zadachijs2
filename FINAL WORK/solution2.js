function sortNumbers(str) {
    return str.replace(/\D/g, '').split('').sort().join('');
}

