function reverseNumber (num){
   let  reverse = 0;
   for ( ; num!==0; num= Math.floor(num/10)){
   
     let    mod= num%10
    reverse = reverse * 10 + mod;
    
   }
  
   return reverse;
   
}

console.log(reverseNumber(245));
