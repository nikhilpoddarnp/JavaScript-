let score = "33abc"

console.log(typeof score);  //string
console.log(typeof (score));  //string

let valueInNumber = Number(score)
console.log(typeof valueInNumber);  //number
console.log(valueInNumber);   //NaN

//score =
// "33"  => 33
// "33abx"  => NaN
// true => 1; false => 0
// null => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);   //true

// 1 => true; 0 => false
// "" => false
//"NIkhil" => true

let someNumber = 33
let stringNumber = String(someNumber)

console.log(stringNumber)
console.log(typeof(stringNumber))

// *********** Operations ***********

let value = 3
let newValue = -value
console.log(newValue);  // -3


//Basic operations

// console.log(2+3);
// console.log(2-3);
// console.log(2*3);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


let str1 = "hello"
let str2 = " Nikhil"
let str3 = str1 + str2

console.log(str3);    // hello Nkhil
console.log(1 + "2");  // 12
console.log("1" + 2);  // 12
console.log("1" + 2 + 3);  // 123
console.log(1 + 2 + "3");  // 33

let x= 4;
let y=x++;
console.log(`x:${x} and y: ${y}`);  //x:5 and y: 4


