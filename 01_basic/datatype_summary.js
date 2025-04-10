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