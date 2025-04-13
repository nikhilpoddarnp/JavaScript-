//read note first


var c =300  //global scope

if (true){   //block scope
    let a = 10
    const b = 20
    var c = 30
    d = 40
    
}

// console.log(a);  //not accessable
// console.log(b);  //not accessable
console.log(c);  //30  //accessable because var is function scope variable
console.log(d);  //40


//nested scope : in this scope child scope is access the data of parent scope

function one () {
    const username = "nikhil"

    function two(){
        const website = "youtube"
        console.log(username);  //nikhil
       
        
    }
    // console.log(website);  //error
  two()
    
    
}
one()

if (true){
   const username = "rupesh"
    if(username == "rupesh"){
        const website =" google"
        console.log(username + website);  //output : rupesh google
        
    }
    // console.log(website)  //error

}
// console.log(username);  //error


//++++++++++++  intreasting +++++++++++++++

function addOne(num) {
    return num + 1
}
console.log(addOne(5)); //6

//another method to declear a function 

const addTwo = function (num){
    return num +2
}
console.log(addTwo(6));  //8


//important! : read about hosting 


//but what happen when we call these function declarations


console.log(addOne1(5)); //6
function addOne1(num) {
    return num + 1
}

//another method to declear a function 

// console.log(addTwo1(6));  // ❌ TypeError
const addTwo1 = function (num){
    return num +2
}


