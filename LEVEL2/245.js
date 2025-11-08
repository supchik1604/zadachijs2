let str = 'aaa bbb ccc';

let words = str.split(' ');
let result = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}).join(' ');

console.log(result);

