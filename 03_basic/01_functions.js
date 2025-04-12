function sayMyName(){
    console.log("Nikhil");
    
}

// sayMyName  : function's refrence(refrence means function vaha rahta hai)
sayMyName()  // function's execution

//output : Nikhil


function addTwoNumber(number1,number2){
    console.log(number1 + number2)
}

addTwoNumber(10,12) //22 : here 10 and 12 are argument of this function
addTwoNumber(10,"a")  //10a : this heppen because we don't give any condition on numbers
addTwoNumber(10,"3")  //103 : this heppen because we don't give any condition on numbers

function subTwoNumber(num1,num2){
    console.log(num1 - num2);
    
}

const result = subTwoNumber(8,5)  //3

console.log(`result : ${result}`);  //result : undefined

function newsubTwoNumber(num1,num2){
    let result2 = num1 - num2
    return result2
    //insted of these two line we write only
    // return (num1 - num2)
    //and after return we don't write any thing in the function and 
    // if we write any thing then it dosen't consider by the function
    
}

const result3 = newsubTwoNumber(12,5)
console.log(`result : ${result3}`);

 
function loginUserMessage (username){   //we can pass a default value as well : (ussername = "hitesh")
    // if(username=== undefined)
     if(!username)  
        {
        console.log("please enter user name");
        return
    }
    return `${username} just logged in`
}

loginUserMessage("nikhil"); // output :  (noting) because we just return the value not tell them to print it
//for print
console.log(loginUserMessage("nikhil")); //nikhil just logged in
console.log(loginUserMessage()); //please enter user name


//with one parameter how to pass multiple values

/*
function calculateCartPrice(iteam1){
    return iteam1
}
console.log(calculateCartPrice(200,300,500)); //200
*/

function calculateCartPrice(...iteam1){   //here we rest operator not seprate operator
    return iteam1
}
console.log(calculateCartPrice(200,300,500)); //[ 200, 300, 500 ]


function newcalculateCartPrice(val1,val2,...iteam1){   //here we rest operator not seprate operator
    return iteam1
}
console.log(newcalculateCartPrice(200,300,500,600)); //[ 500 ,600 ] //here 200 goes in val1 and 300 goes in val2

//how to pass an object in a function

const user = {
    userName : "nikhil",
    price : 333,
}

function handelObject (anyObject){
    console.log(`Username is ${anyObject.userName} and price id ${anyObject.price}`);
    
}

handelObject(user)  //output : Username is nikhil and price id 333
handelObject({
    userName: "sem",
    price: 366
})  //output : Username is sem and price id 366


//how to pass an array in a function

const myNewArray = [200,300,4000,60];

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray)); //output : 300
console.log(returnSecondValue([400,54,254,85,45])); //output : 54
