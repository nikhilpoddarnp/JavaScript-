let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

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