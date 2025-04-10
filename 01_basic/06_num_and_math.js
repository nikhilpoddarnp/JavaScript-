/*
const score = 400
console.log(score);  //400

const balance = new Number (300) 
console.log(balance); //[Number: 300]

console.log(balance.toString().length)  //3
console.log(balance.toFixed(2));  //300.00

const otherNumber = 253.8952

console.log(otherNumber.toPrecision(4));  //253.9
console.log(otherNumber.toPrecision(2));  //2.5e+2 
console.log(otherNumber.toPrecision(3));  //254

const hundred = 1000000
console.log(hundred.toLocaleString());  //10,00,000
console.log(hundred.toLocaleString('en-In'));  //10,00,000

*/

//+++++++++++++++++ Maths ++++++++++++++++++

console.log(Math);  //Object [Math] {}
console.log(Math.abs(-4));  //4
console.log(Math.abs(4));  //4
console.log(Math.round(4.25));  //4
console.log(Math.ceil(5.2));  //6
console.log(Math.floor(5.95));  //5
console.log(Math.sqrt(16));  //4
console.log(Math.min(4,3,6,2.22,2.25));  //2.22
console.log(Math.max(4,3,5.58,5.59));  //5.59


// for the random value
 
console.log(Math.random())  //any random value b/w 0 to 1

console.log((Math.random()*10) +1)  //any random value b/w 1 to 10
console.log(Math.floor(Math.random()*10) + 1) // onlu random int value b/w 1 to 10

//formula to find the random int number b/w the given range

const min = 10
const max = 20

console.log(Math.floor(Math.random() * ( max - min +1 ))+ min);





 





 