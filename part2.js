// 1. Can the user Vote?
// edge case_1 - what if the user passes a string in the input, the output should be a proper error message ==> eg: "invalid input"

// console.log(NaN === NaN);
// console.log(NaN == NaN);
// console.log(isNaN(NaN));
// console.log(Number("kfdsj"));
// thus we'll use isNaN function in the loop

// var ans = Number(prompt("What is your age?"));

// if (isNaN(ans)) {
//   console.log("maare jaoge");
// } else if (ans >= 18) {
//   console.log("eligible to vote");
// } else {
//   console.log("chala ja");
// }

// 2. Shop discount - show the payable amount after discount
// Amount           Discount
// 0-5000              0%
// 5001-7000           5%
// 7001-9000           10%
// > 9001      20%

// payable amount = (discount * amount) / 100

// let amount = Number(prompt("What is the final price ?"));
// console.log(expense);
// console.log(typeof expense);

// brute force
// if (amount > 0 && amount <= 5000) {
//   console.log(amount);
// } else if (amount > 5000 && amount <= 7000) {
//   console.log("asd", amount - Math.floor((5 * amount) / 100));
// } else if (amount > 7000 && amount <= 9000) {
//   console.log("zxc", amount - Math.floor((10 * amount) / 100));
// } else if (amount > 9000) {
//   console.log("wer", amount - Math.floor((20 * amount) / 100));
// } else {
//   console.log("wrong input");
// }

// efficient approach
// dis = 0;
// if (amount > 0 && amount <= 5000) {
//   dis = 0;
// } else if (amount > 5000 && amount <= 7000) {
//   dis = 5;
// } else if (amount > 7000 && amount <= 9000) {
//   dis = 10;
// } else if (amount > 9000) {
//   dis = 20;
// } else {
//   console.log("wrong input");
// }

// console.log(amount - Math.floor((dis * amount) / 100));

// 3. Bidyut Bil -

// Unit             Price
// up to 100        4.2/unit
// 101-200          6/unit
// 201-400          8/unit
// >400             13/unit
