//1st method
function findMax(arr){
    let max = arr[0];
    for (let i = 0 ; i< arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([20,30,40]));

//2nd method

function findMax2(arr){
    let max = arr[0];
    for (let num of arr) {
        if (num > max){
            max = num;
        }
    }
    return max;
}

console.log(findMax2([20,50,42,15]));

