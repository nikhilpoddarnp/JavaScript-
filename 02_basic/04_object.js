//const tinderUser = {};  //without singleton object
const tinderUser = new Object() ;

tinderUser.id = "123abc"
tinderUser.name = "Veer"
tinderUser.isLogin = false 

console.log(tinderUser);

const regularUser = {
    email : "nikhil@gmail.com",
    fullName: {
        userFullname: {
        firstname: "Nikhil",
        lastname: "Poddar",
    }
    }
}

console.log(regularUser.fullName.userFullname.firstname);  //Nikhil
console.log(regularUser.fullName.userFull?.firstname);  //undefine  - because userFull key is not exist

//to add two object methods are:

const obj1 = {1: "a", 2: "b" }
const obj2 = {3: "c", 4: "d" }
const obj4 = {5: "h", 6: "d" }

//1)assign method
const obj3 = Object.assign(obj1, obj2,obj4)
console.log(obj3);  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'h', '6': 'd' }

//here
console.log(obj1===obj3); //true
//true because in assign first argument is take as target and other are take as resource

// if you don't want to store your all value in obj1 then use {} (empety object).

const obj5 = Object.assign({},obj1,obj2,obj4)
console.log(obj5); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'h', '6': 'd' } 

// 2) seprate method (best method)
const obj6 = {...obj1, ...obj2,...obj4}
console.log(obj6);  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'h', '6': 'd' } 

//but the values comes from database are 'array object'(means: object in a array - [{}] like this)

const users = [
    {
        id : 1,
        email : "sunil@google.com"
    },
    {
        id : 2,
        email : "krishna@google.com"
    },
    {
        id : 3,
        email : "raja@google.com"
    },
]

console.log(users[1].email);  //krishna@google.com

//to find all the keys of an object we use

console.log(Object.keys(tinderUser));  //[ 'id', 'name', 'isLogin' ]

// same as to find all the values of an object we use
console.log(Object.values(tinderUser));  //[ '123abc', 'Veer', false ]

//here we see one thing the results are come in the form of array so if 
// we want to use this values and keys the we take a loop on this array
// and easily we can use this 


console.log(tinderUser.hasOwnProperty('isLogin'));  //true

const course = {
    coursename: "js in hindi ",
    price: 999,
    courseInstructor: "hitesh"
}

const {courseInstructor: instructor} = course; // to avoid course.courseInstructor we assign variable as same as key name and 
// we can access the value with the key name only but  when we define a new name  after : then we access this with the new name
console.log(instructor); //hitesh

//and we this thing in react but not in detail

/*  destracturing in object in react 
 const navbar = ({company}) => {

   }

navbar(company = "hitesh")
*/

//api : api ka data objects ya array ke form me hota hai or is liye ham array or object padhte hai taki api ke data ko achhe tarike se samajh sake.









