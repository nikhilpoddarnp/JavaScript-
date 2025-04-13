const user ={
    username : "nikhil",
    age : 25,
    welcomeMessage : function (){
        console.log(`${this.username}, welcome to wesite`) 
        console.log(this)
    }
}

user.welcomeMessage()  // nikhil, welcome to wesite
user.username="Jitesh" //here we change the contex(value)
user.welcomeMessage()  // Jitesh, welcome to wesite  // this happpen because in the console we  don't put the hardcore value of the object


function chai () {
    let userName = "rajan"
    console.log(this.userName);  //output: undefined , because we don't use this in a function but we use in as object
    
}
chai()

const chai2 = function () {
    let username = "Abhishek"
    console.log(this.username);  //output: undefined 
}
chai2()


const chai3 = () => {
    let username = "Abhi"
    console.log(this.username);  //output: undefined 
}
chai3()


//arrow  function declarations

//type 1
const addTwo = (num1,num2) =>{
    return num1 +num2
}
console.log(addTwo(5,8));  //13

//type 2 ( Implicit Return)
 //if we use {} the we have to write return keyword
 //  otherwise we don't use return 
const addTwo1 = (num1,num2) =>  num1 +num2 
const addTwo2 = (num1,num2) => ( num1 +num2 )
   

console.log(addTwo1(5,80));  //85
console.log(addTwo2(54,80));  //134
//if we want to return an object then we rapup the object in ()
const addTwo3 = (num1,num2) => ( {neme : "nikhil"} )
console.log(addTwo3());  //{ neme: 'nikhil' }

//we can use functios in loop with array

