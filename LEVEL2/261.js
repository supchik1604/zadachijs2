let str = "abc123def456";

let positions = [];
for (let i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
        positions.push(i);
    }
}
console.log(positions);








