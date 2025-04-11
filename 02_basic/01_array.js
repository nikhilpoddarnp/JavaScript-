// array


const myArr1 = [ 1, 2 ,58, true, "nikhil"]

const myArr2 = new Array(1,4,5,5)
console.log(myArr1[2]); // 58
console.log(myArr2 [1]);  //4
console.log(myArr2 );  //[ 1, 4, 5, 5 ]


//  Array Methods

// push : add element in the last of the array
myArr1.push(6)
console.log(myArr1 );  //[ 1, 2, 58, true, 'nikhil', 6 ]

// pop : we dont have to give them any argument, it removes the last element of the array
myArr1.pop()
console.log(myArr1 );  //[ 1, 2, 58, true, 'nikhil' ]

//unshift : to add an element from start of the array
myArr1.unshift(10)
console.log(myArr1 );  //[ 10, 1, 2, 58, true, 'nikhil' ]

//shift : to remove an element from start of the array
myArr1.shift()
console.log(myArr1 );  //[ 1, 2, 58, true, 'nikhil' ]

// include : to fine some element in the array
console.log(myArr1.includes(6) );  // false

// indexOf
console.log(myArr1.indexOf(58));  // 2
console.log(myArr1.indexOf(12) );  // -1 which value is not exsit in the array

// join : to convert our array to a string
let newarr = myArr1.join()
console.log(newarr);  // 1,2,58,true,nikhil
console.log(typeof(newarr));  // string

// slice , splice

console.log( "A", myArr1);  //A [ 1, 2, 58, true, 'nikhil' ]

const myn1 = myArr1.slice(1,3)  
console.log(  myn1);  //[ 2, 58 ]
console.log( "B", myArr1);  //B [ 1, 2, 58, true, 'nikhil' ]

const myn2 = myArr1.splice(1,3)
console.log( "C", myArr1);  // C [ 1, 'nikhil' ]  , it manipulate the orignal array
console.log( myn2);  // [ 2, 58, true ]















