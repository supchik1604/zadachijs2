let str = 'aaa bbb ccc eee fff';
let words = str.split(' ');
let result = [];

for (let i = 0; i < words.length; i++) {
    if (i % 2 === 0) {
        result.push(words[i]);
    }
}

console.log(result.join(' '));

