const accountId = 145625
let accountEmail = "nikhl@gmail.com"
var accountPassword = "123456"
accountCity = "Jaipur"
let accountstate;
// accountId =2   // not allowed


accountEmail = "nk@fc.com"
accountPassword = "2512555"
accountCity = "Bihar"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope

*/

console.table([accountId, accountEmail,accountPassword,accountCity, accountstate])


 function mera (){
var a = 2 ;
let b =3;
const c =4
  

console.log( "value of a=" ,a,"value of b=",b,"value of c=",c);
console.log(` value of a = ${a} value of b = ${b} value of c = ${c}`);





 }
//  console.log(a);
 mera()
//  console.log(` ${b}`);
//  console.log(` ${c}`);

var d =5
console.log(d);