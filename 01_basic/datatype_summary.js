// Primitive

// 7 types : String, Number, Boolean, null, undefine, 
//           Symbol, BigInt


const name = "Nikhil"
const score = 102.3
const isLogin = false
const outSideTemp = null

let userEmail;   //or let userEmail = undefine; //typeof= undefine 

const id = Symbol('123')
const anotherId = Symbol('123')

console.table([id, anotherId]) 
console.log(id === anotherId);  //false

const bigNumber = 3256585556565256556n




// Reference (Non primitive)

// Array, Object, Functions


const heros = ["Shaktiman", "Naagraj", "Kriss"]

let myObj = {
    name : "Nikhil",
    age : 24
}

const myFunction = function (){
   console.log("hello");
   
}




//  +++++++++++++++++++++++++++++++++++++++++
// to better understand read more about that
// Stack memory : Primitive datatype use stack memory
// Heap memory : Non- primitive datatype use stack memory

let firstName = "Nikhil"
let anotherName = firstName
anotherName = "Rupesh"
console.log(firstName);  //Nikhil
console.log(anotherName); //Rupesh

//in stack memory they make a copy of primitive datatype.

let userOne ={
    email : "user@gmail.com",
    password : 123456,

}

let userTwo = userOne;
userTwo.email="nikhil@gmail.com"

console.log(userOne.email); // nikhil@gmail.com
console.log(userTwo.email); // nikhil@gmail.com
console.log(userTwo);



