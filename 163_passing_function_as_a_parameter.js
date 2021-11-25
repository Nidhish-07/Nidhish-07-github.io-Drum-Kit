function add(num1, num2){
    return num1+num2;
}
function multiply(num1, num2){
    return num1*num2;
}
function subtract(num1, num2){
    return num1-num2;
}
function division(num1, num2){
    return num1/num2;
}

function Calculate(num1, num2, operator){
return operator(num1,num2);
}

console.log(Calculate(3,4,add));

debugger; 
multiply(20,1);


//* Higher order function = can take function as parameters

