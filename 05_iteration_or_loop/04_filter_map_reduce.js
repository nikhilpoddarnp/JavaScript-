//for each do not return the value
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
const newcodding = myCodding.forEach((iteam) => {
    return(iteam.languageName);
    
})

console.log(newcodding);  // undefine 

//for return we use something different

// Filter
const mynum = [1,2,3,4,5,6,7,8,9,10]
const newNum = mynum.filter( (num) => num > 4 ) //here we don't use {} so we don't have to write return
console.log(newNum);  //[ 5, 6, 7, 8, 9, 10 ]

const newNum1 = mynum.filter( (num1) => {
    return num1 >6
    //return num +1 : we can't abel to use arthematic opration on filter
})
console.log(newNum1);


const book = [
    {
        title : 'Book One',
        genre : 'Non-Fiction',
        publish : 1999,
        edition : 2009
    },
    {
        title : 'Book Two',
        genre : 'Science',
        publish : 1988,
        edition : 1998
    },
    {
        title : 'Book Three',
        genre : 'Fiction',
        publish : 2003,
        edition : 2009
    },
    {
        title : 'Book Four',
        genre : 'History',
        publish : 1995,
        edition : 2005
    },
    {
        title : 'Book Five',
        genre : 'Science',
        publish : 2001,
        edition : 2004
    },
    {
        title : 'Book Six',
        genre : 'History',
        publish : 1991,
        edition : 2001
    },
   
    {
        title : 'Book Seven',
        genre : 'Non-Fiction',
        publish : 1984,
        edition : 2002
    },
    {
        title : 'Book Eight',
        genre : 'Science',
        publish : 2000,
        edition : 2010
    },
];

let userBook = book.filter((bk) => {
    return bk.publish <=2000 && bk.genre === 'History'
})
console.log(userBook);



// Map : for arthematic operations

const myNumber = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNumber.map((num) => {
    return num*num
})
console.log(newNums)
/*
[
   1,  4,  9, 16,  25,
  36, 49, 64, 81, 100
]
  */
 
// Chaning 
const newNums1 = myNumber
                .map((num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num>= 40)
    console.log(newNums1);
    //  [
    //     41, 51,  61, 71,
    //     81, 91, 101
    //   ]




    // Reduce

    const myNums3 = [1,2,3,4]
    const mytotal = myNums3.reduce( function (acc, curval) {
        console.log(`accumulator : ${acc} and current value : ${curval}`);
        return acc + curval
        
    },0)  //here 0 is the initial value of the accumulator
    console.log(mytotal); //10


const newmyTotal = myNums3.reduce( (acc,curval) => acc + curval ,0)
console.log(newmyTotal);  //10



    