// // ex-1: Type Coercion

// let a = 12;
// // let a="12"       //if there's a string on either of the sides of {+} with a number, the operation becomes concatenation
// let b = 18;

// console.log(a + b);
// console.log("the sum = " + a + b); // {+} concatenates the variables
// console.log(a + b + " is the sum");
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// // ex-2: Type Casting
//"Number" is a function == converts a string --> number (if possible)
// eg.1: "69" --> 69
// eg.2: "string" --> NaN
// let age = Number(prompt("What is your age?"));
// console.log(age);

// // ex-3: swap 2 vars
// let a = 10;
// let b = 20;

// // // case-1
// // let c=a
// // a=b
// // b=c
// // console.log(a,b)

// // // case-2
// // a = a + b; // a=30
// // b = a - b; // b=10
// // a = a - b; // a=20
// // console.log(a, b);

// // // case-3
// // [a, b] = [b, a];
// // console.log(a,b);

// // ex-4:
// console.log(7 / 5);
// console.log(Math.floor(7 / 5));

// ex-5: math functions
// console.log(Math.round(10.5));
// console.log(Math.ceil(10.2)); //pushes num to next num
// console.log(Math.floor(10.7)); //pulls num to prev num
// console.log(Math.trunc(10.4)); // just removes decimal values
//Math.floor == Math.trunc
// console.log(Math.pow(2,5));
// console.log(2**5);
// console.log(Math.sqrt(69));
// console.log(Math.cbrt(27));
// console.log(Math.abs(-67)); // -ve --> +ve
// console.log(Math.max(14, 23));
// console.log(Math.min(14, 23));
// console.log(Math.random());// returns value between (0 --> 1)

// OTP generation:
// console.log(Math.trunc(Math.random() * 9999 + 1000));
// let OTP is 4 digit number ==> (0 -->9999)
// number may start with 0 ==> 0.04354535 ==> makes a 3-digit number
// add 1000 to make it 4-digit number
// truncate the decimal to make it proper OTP

// let a = 5.6846484;
// // console.log(a.toFixed(-1)); // digits arrangement must be between (0 --> 100)
// console.log(a.toFixed(2));

// // circle curcumference
// let r = 5;
// let c = Number((2 * Math.PI * r).toFixed(2));
// console.log(c);
// console.log(typeof c);
