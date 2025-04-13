// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    console.log(`DB CONNECTED`);  //DB CONNECTED
    
})();  //HERE WE HAVE TO USE ;(SEMI COLON) TO END THIS FUNCTION 
//if we don't use ; the afther the no one function will execute 

( () => {
    console.log(`2ND DB CONNECTED`); //2ND DB CONNECTED
    
} ) ()