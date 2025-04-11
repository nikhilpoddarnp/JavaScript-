//note: there are two ways to declear a object
// 1) Literal   2) Constractor (ishne singleton(when we create a constractor the than a object is created which is called singleton) banta hai)
//  for detail read note



//   Object literals

const mySym = Symbol("key1")

const user = {
    name : "Nikhil",
   "full name" : "Nikhil Kumar",
    [mySym] : "mykey1",
    age : 25,
    lacation : "jaipur",
    email : "nikhil@gmail.com",
    isLogin : false,
    lastLoginDays : ["Monday","Tuesday"]
}

console.log(user);

console.log(user.name);  //Nikhil
console.log(user["full name"]); // Nikhil Kumar
console.log(user[mySym]);  //mykey1

//to change the key value
user.email = "nikhil@google.com"
console.log(user["email"]);  //nikhil@google.com

/*

//to fixed the key value
Object.freeze(user);
console.log(user.email);  //nikhil@google.com

*/

user.greeating = function(){
    console.log("Hello world");   
}
user.greeatingTwo = function(){
    console.log(`Hello ${this["full name"]} and your age is ${this.age}`);   
}

console.log(user.greeating());  //Hello world
console.log(user.greeatingTwo());  //Hello Nikhil Kumar and your age is 25




