const userEmail = "hit@gmail.com"

if (userEmail){
    console.log("got user email")
}else{
    console.log("don't have user email");  // got user email
    
}
const userEmail2 = ""

if (userEmail2){
    console.log("got user email")
}else{
    console.log("don't have user email");  // don't have user email
    
}
const userEmail3 = []

if (userEmail3){
    console.log("got user email")
}else{
    console.log("don't have user email");  // got user email
    
}


//know we have to know that which condition is true or false

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy

// "0", "false", " ", [], {}, function(){}

//detect array is empty or not

if(userEmail3.length ===0){
    console.log("Array is empty"); //Array is empty
    
}

const emptyObj = {}
if (Object.keys(emptyObj).length ===0){
    console.log("Object is empty"); //Object is empty
    
}

// Nullish Coalescing Operator (??) : null undefine

let val1;
val1 = 5 ?? 10
console.log(val1);  //5
let val2;
val1 = null ?? 10
console.log(val1); //10
let val3;
val1 = undefined ?? 10
console.log(val1); //10
let val4;
val1 = undefined ?? 15 ?? 30
console.log(val1); //15


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more then 80")
// output : more then 80