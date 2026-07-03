// 1st method
function isPalindrome(str){
    let reversed = "";
    for (let i= str.length -1 ; i >= 0; i--){
        reversed += str[i];

    }
//     if(str === reversed){
//         return true;
//     }else {
//         return false ;
//     }
    return str === reversed;
 }



console.log(isPalindrome("madam"));
console.log(isPalindrome("papa"));

//2nd merhod

function isPalindrome2(str){
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome2("madam"));
console.log(isPalindrome2("raja"));

//3rd method
function isPalindrome3(str){
    for (let i = 0; i< str.length /2 ; i ++){
        if(str[i] !== str[str.length - 1 -i]){
            return false;
        }
    }
    return true;
    }
    console.log(isPalindrome3("madam"));
console.log(isPalindrome3("raja"));