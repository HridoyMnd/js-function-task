/*
// take a function with 4 parameters and multiply the 4 numbers
function calc(a, b , c ,d){
    let result = a * b * c * d;
    return result;
}
console.log(calc(2, 3, 4, 5));
*/
// //Take a number if the number is odd multiply the by 2 and if the number is even divide the number by 2 and return the  result

function nmbr(a){
    if(a % 2 === 0){
        console.log(" The number is odd ")
        return a * 2;
    }
    else{
        console.log("The number is even")
        return a / 2;
    }
}
console.log(nmbr(10));
console.log(nmbr(15));

