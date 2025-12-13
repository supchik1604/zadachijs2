const text = promt("Введите текст: ");
const words = text.split(" ");

const result = words.filter(word => word.toLowerCase().startsWith("a"));
console.log(result);

