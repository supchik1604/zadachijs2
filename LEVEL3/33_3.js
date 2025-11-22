let word = 'abcba';
let reversed = '';

for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
}

let isPalindrome = word === reversed;
console.log(isPalindrome);

