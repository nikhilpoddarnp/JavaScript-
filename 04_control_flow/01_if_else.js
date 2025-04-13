// if

let score = 300
if (score>200){
    var power = "high"
    console.log(`power is ${power}`) //power is high
}
console.log(`power is ${power}`) //power is high

//in this program both console is execite because var is function scobe or globle scope variable not a block scope




if (score>200){
    let power2 = "high"
    console.log(`power is ${power2}`) //power is high
}
// console.log(`power is ${power2}`)  //ReferenceError: power2 is not defined


//short hand notation(not recommended to use it)
// in this we write code without {} but we have to the statement in a single line 
// if u want to use 2nd line then use , (comma) and end the 2nd line with semicolon(;)
const balance = 800;
if (balance> 500) console.log("test"), console.log("test2");  // test  test2
if (balance> 500) console.log("tes3"), //test3
 console.log("test4");  // test4


// else if

if (balance <500){
    console.log("less than 500");
    
}else if (balance<750){
    console.log("less than 750");
}else if (balance<950){
    console.log("less than 950");
    
}else {
    console.log("more than 950");
    
}
    console.log("less than 950");
    console.log("less than 950");
//output : less than 950

const loggedInGoogle = true
const loggedInEmail = false

if (loggedInEmail || loggedInGoogle){  //  || : or operator
    console.log("access allowed"); //access allowed
    
}
if (loggedInEmail && loggedInGoogle){  //  && : and operator
    console.log("access allowed");  //not executed because both condition is not true
}




