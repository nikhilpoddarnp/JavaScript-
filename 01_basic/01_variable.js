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

