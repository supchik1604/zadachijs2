let str = 'AbCdE';

// Способ 1: Использование метода map и проверки регистра
let result = str.split('').map(char => {
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
        return char.toLowerCase();
    } else if (char === char.toLowerCase() && char !== char.toUpperCase()) {
        return char.toUpperCase();
    }
    return char; // для не-буквенных символов
}).join('');

console.log(result); // 'aBcDe'

