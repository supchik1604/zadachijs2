let str = 'AbCdE';

let result = str.split('').map(char => {
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
        return char.toLowerCase();
    } else if (char === char.toLowerCase() && char !== char.toUpperCase()) {
        return char.toUpperCase();
    }
    return char; 
}).join('');

console.log(result);
