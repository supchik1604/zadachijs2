let data = [
	{
		1: 11,
		2: 12,
		3: 13,
	},
	{
		1: 21,
		2: 22,
		3: 23,
	},
	{
		1: 24,
		2: 25,
		3: 26,
	},
];

const sum = data.reduce((total, obj) => {
	return total + Object.values(obj).reduce((objSum, val) => objSum + val, 0);
}, 0);

console.log(sum);

