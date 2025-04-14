// for loop
//syntex
/*
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

*/

for (let  i = 0;  i< 10; i++) {
       console.log(i);
    }
  //  console.log(i);  //ReferenceError: i is not defined

  for(let i = 0;i<10; i++){
   
    for(let j =0;j<10; j++ ){
        console.log(i, j);
        
    }
    
  }


  // break and continue

  for (let index = 1; index <= 20; index++) {
    if(index==5){
        console.log(`detectd 5`);
        break;
    }
    console.log(`value of i is : ${index}`);
    
  }
  for (let index = 1; index <= 20; index++) {
    if(index==6){
        console.log(`detectd 6`);
        continue;
    }
    console.log(`value of i is : ${index}`);
    
  }

  