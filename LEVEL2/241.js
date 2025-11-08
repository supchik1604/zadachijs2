let str = "abc123def456";

let position = -1;
for (let i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
        position = i;
        break;
    }
}
console.log(position);

