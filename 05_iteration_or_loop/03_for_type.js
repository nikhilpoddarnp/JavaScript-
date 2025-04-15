// for of : array specific loop

//without using length operator find the length of array 
const arr =[1,2,3,4,5]
let count = 0;

for (const num of arr) {
    if(true){
     count++
    }
    
    console.log(`num : ${num}`);
    
    
}
console.log(`length of this array is : ${count}`);


const greetings = "hello world!"
for(const greet of greetings){
    if(greet == " "){  //space is not counted
        continue;
    }
    console.log(`each char is : ${greet}`)
}

// Maps : it is knows as for unique value means if you set same value then it not detect it 

const mapUse = new Map()
mapUse.set('IN', "India")
mapUse.set('USA', "United State Of America")
mapUse.set('Fr', "France")
mapUse.set('IN', "India")  //duplicate value is not consider

console.log(mapUse);
//output : lile a object
/*
Map(3) {
  'IN' => 'India',
  'USA' => 'United State Of America',
  'Fr' => 'France'
}
  */

//try to put for of loop on map
for( const [key, value] of mapUse){
    console.log(key, ':-', value);
     
}
/*
output:
IN :- India
USA :- United State Of America
Fr :- France
*/

//can we put for of loop on a object 

/*
const myobj = {
    name : "nikhil",
    age : 24,
    isStudent : true
}

for(const [key,value] of myobj){
    //console.log(key, ":" , value); //TypeError: myobj is not iterable
    
}
*/
//we don't do this type, for that we use 
// for in loop
const  lengObj ={
    hin : "Hindi",
    eng : "English",
    math : "Mahtematics",
    sci : "science"
}
for( const key in lengObj){
    console.log(key)

}
/* outputs: 
hin
eng
math
sci
*/
for( const key in lengObj){
    console.log(lengObj[key])

}
/* output:
Hindi
English
Mahtematics
science
*/

//do for in loop in array
const cityName =["Patna","Delhi","jaipur","Rachi" ]
for(const keys in cityName){
    console.log(keys);
    
}
// output: 0 1 2 3 | hare we see in forin loop we got the index value of the array
// where as in forof loop we get the value of these indexes

for(const keys in cityName){
    console.log(cityName[keys]);  // now we got the vlues of the ararys

}


// for each loop :higher order function

const cityNames =["Patna","Delhi","jaipur","Rachi" ]

cityNames.forEach(function (val) {
    console.log(val);
    
})

//with arrow function
cityNames.forEach((iteam) => {
    console.log(iteam);
    
})

function printMe(item){  //we can also define function first
    console.log(item);
    
}
cityNames.forEach(printMe)

cityNames.forEach((iteam,index,arr) => { //we can pass multiple parameters
    console.log(iteam,index,arr);
    
})


const myCodding =[
    {
        languageName : "Java",
        languageFilename: "java"
    },
    {
        languageName : "javascript",
        languageFilename: "js"
    },
    {
        languageName : "python",
        languageFilename: "py"
    },
]
myCodding.forEach((iteam) => {
    console.log(iteam.languageName);
    
})
/* output:
Java
javascript
python
*/
