const name = "Nikhil"
const repoCount = 10

// console.log( name + repoCount+ " value");  // but this old style

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//another way to inisilize the srting

const gameName = new String('nikhil')

console.log(gameName[0]); //n
console.log(gameName.__proto__);  //{}
console.log(gameName.length);  //6
console.log(gameName.toUpperCase());  //NIKHIL 

console.log(gameName.charAt(2));  //k
console.log(gameName.indexOf('h'));  //3
console.log(gameName.indexOf('b'));  //-1

const anotherString = gameName.slice(-5,4)
console.log(anotherString);  //ikh

const newString = gameName.substring(0,4)
console.log(newString);  //nikh

const newName = "  nikhil  "
console.log(newName);  //   nikhil
console.log(newName.trim());  //nikhil

const url = "https://nikhil.com/nikhil%20poddar"
console.log(url.replace('%20', '-'));  //https://nikhil.com/nikhil-poddar

//to find something is in the string or not

console.log(url.includes('nikhil'));  //true

const methodSplit = "convert the string into array"

console.log(methodSplit.split(' '));  //[ 'convert', 'the', 'string', 'into', 'array' ]










