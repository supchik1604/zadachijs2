let arr = [123, 456, 789];

arr.map(element => String(element).split('').reverse().join('')).join('');
console.log(arr);