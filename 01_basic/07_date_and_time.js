// Dates 

let myDate = new Date()
console.log(myDate)  //2025-04-10T17:32:06.939Z
console.log(myDate.toString())  //Thu Apr 10 2025 23:02:06 GMT+0530 (India Standard Time)
console.log(myDate.toDateString())  //Thu Apr 10 2025
console.log(myDate.toLocaleDateString())  //10/4/2025
console.log(myDate.toLocaleString())  //10/4/2025, 11:05:35 pm
console.log(myDate.toISOString())  //2025-04-10T17:32:06.939Z
console.log(myDate.toJSON())  //2025-04-10T17:32:06.939Z
console.log(myDate.getTime())  //1744306326939
console.log(typeof myDate);  //object

let myCreatedDate1 = new Date(2023, 0, 23)
console.log(myCreatedDate1.toDateString()); //Mon Jan 23 2023

let myCreatedDate2 = new Date(2023, 1, 23)
console.log(myCreatedDate2.toDateString()); //Thu Feb 23 2023

let myCreatedDate3 = new Date(2023, 1, 23, 13, 30) 
console.log(myCreatedDate3.toLocaleString()); //23/2/2023, 1:30:00 pm

let myCreatedDate4 = new Date("2023-04-23") 
console.log(myCreatedDate4.toLocaleString()); //23/4/2023, 5:30:00 am


let myCreatedDate5 = new Date("05-25-2024") 
console.log(myCreatedDate5.toLocaleString()); //25/5/2024, 12:00:00 am


let myTimeStamp = Date.now()
console.log(myTimeStamp)  // to get the output in milli second
console.log(Math.floor((myTimeStamp)/1000))  //to  get the output in second
console.log(myCreatedDate1.getTime());

// some methods

let againNewDate = new Date()
console.log(againNewDate.getDay());  //for day
console.log(againNewDate.getMonth() +1);  // for month or ishme 1 plush karna hai q ki month 0 se start hota hai


console.log(againNewDate.toLocaleString('default', {
    weekday : "long",
}));


