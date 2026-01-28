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

// 3. Bidyut Bill -

// Unit             Price
// up to 100        4.2/unit
// 101-200          6/unit
// 201-400          8/unit
// >400             13/unit

//bottom-up approach

// let unit = Number(prompt("Electricity unit = ")); //700
// let amount = 0;

// if (unit > 400) {
//   amount = (unit - 400) * 13; //3900
//   unit = 400; // 700 - (700 - 400)
// }
// if (unit > 200 && unit <= 400) {
//   amount += (unit - 200) * 8; //1600 + 3900 amount adds up
//   unit = 200; // 400 - (400 - 200)
// }
// if (unit > 100 && unit <= 200) {
//   amount += (unit - 100) * 6; //600 + 1600 + 3900
//   unit = 100;
// }
// amount += unit * 4.2;

// console.log("Total price = ", amount);

// 4. How many INR notes are required for the given amount

// let amount = 5641;
// if (amount >= 500) {
//   console.log("500 notes: " + Math.floor(amount / 500));
//   amount = amount % 500;
// }
// if (amount >= 200) {
//   console.log("200 notes: " + Math.floor(amount / 200));
//   amount = amount % 200;
// }
// if (amount >= 100) {
//   console.log("100 notes: " + Math.floor(amount / 100));
//   amount = amount % 100;
// }
// if (amount >= 50) {
//   console.log("50 notes: " + Math.floor(amount / 50));
//   amount = amount % 50;
// }
// if (amount >= 20) {
//   console.log("20 notes: " + Math.floor(amount / 20));
//   amount = amount % 20;
// }
// if (amount >= 10) {
//   console.log("10 notes: " + Math.floor(amount / 10));
//   amount = amount % 10;
// }
// if (amount >= 5) {
//   console.log("5 notes: " + Math.floor(amount / 5));
//   amount = amount % 5;
// }
// if (amount >= 2) {
//   console.log("2 notes: " + Math.floor(amount / 2));
//   amount = amount % 2;
// }
// if (amount === 1) {
//   console.log("1 notes: " + amount);
// }

// 5. switch case

let num = 0.1 + 0.2;
// in binary: 0.1 = 0.1000000000001
// in binary: 0.2 = 0.2000000000003
// thus 0.1 + 0.2 = 0.3000000000004 != 0.3

switch (Number(num.toFixed(1))) {
  case 0.3:
    console.log("asdsa");
    break;

  case 0.5:
    console.log("efsfrre");
    break;

  default:
    console.log("zhhha");
}
