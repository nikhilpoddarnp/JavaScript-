const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman","Batman","Flash"];


/*
// push method
marvel_heros.push(dc_heros)

console.log(marvel_heros);  // [ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Batman', 'Flash' ] ]
console.log(marvel_heros[3][1]);  //Batman
*/



/*
// concat method : it returns a new array
// limitation : we can mearge only two array in this method
 const allHeros = marvel_heros.concat(dc_heros)
 console.log(allHeros);  //[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Batman', 'Flash' ]

*/

/*
// sprade method : it returns a new array and we can mearge more than two 
// array in this method 

const all_new_heros = [...dc_heros, ...marvel_heros];
console.log(all_new_heros); //[ 'Superman', 'Batman', 'Flash', 'Thor', 'Ironman', 'Spiderman' ]
*/

//flat

const anotherArr = [1,2,3,[4,5,6],7,8,[9,10,[11,12]]]
const real_another_array = anotherArr.flat(Infinity)
console.log(real_another_array);
/* [
    1,  2, 3, 4,  5,
    6,  7, 8, 9, 10,
   11, 12
 ]
*/

// array is or not

console.log(Array.isArray("Nikhil"));  // false
console.log(Array.from("Nikhil"));  // [ 'N', 'i', 'k', 'h', 'i', 'l' ]
console.log(Array.from({name: "Nikhil"}));  // []


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));  //[ 100, 200, 300 ]






 
