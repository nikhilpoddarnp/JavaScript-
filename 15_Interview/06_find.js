function find (arr){
    let max1=-Infinity;
    let max2=-Infinity;
    let max3=-Infinity;

    if(arr.length>=3)
    
   { 
    for(i=0; i<arr.length; i++){

        if(arr[i]>max1){
            max3= max2
            max2= max1
             max1 = arr[i]
        }
   
        else if (arr[i]> max2 && arr[i] !==max1  ){
            max3= max2;
             max2 = arr[i]
        }
        else if (arr[i]> max3 && arr[i]!==max2 && arr[i] !==max3){
            max3 =arr[i]
        }
         
    }
    return { 
        "first higher" : max1,
        "2nd higher" : max2,
        "3rd higher" : max3

    }
}
else return "Enter three element array"
}

console.log(find([10,20,45,20,45,12,16,42,10,24,42,]));
