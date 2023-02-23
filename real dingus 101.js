function isOdd (input){
    return input % 2 === 0 ;
}

function isEven (input){
return input % 2 !== 0 ;

}

function identity(input) {
   return input;
}
function isFive(input){
    if (input === 5 ){
    }else {
        return false
    }
}


function addFive(input){
    return input + 5 ;
}
function isMultipleOfFive(input){
    return input % 5 === 0;
}

function isThree(input){
    return input === 3;
}

function isMultipleOfThree(input){
    return input % 3 === 0;

}
function isMultipleOfThreeAndFive(input){
    return !!(input % 3 && input % 5 === 0);

}
function isMultipleOf(input, inputTwo){
    return input % inputTwo === 0;
}
function isTrue(input){

}
function isZero(input){
    return input === 0;
}
function isNotZero(input){
    return input !== 0
}
function double(input){
    return input * 2
}
function triple(input){
    return input * 3;
}
function quadruple(input){
    return input * 4
}
function isHalf(input){
    return input / 2;
}
function subtract (input, inputOne){
    return input - inputOne
}
function multiply (input, inputOne){
    return input * inputOne

}
function divide (input, inputOne){
    return input / inputOne
}

function remainder (input, inputOne){
    return input % inputOne
}

function cubed (input) {
    return input * input * input;
}
function invertSign(input){
  return  input *= -1
}

function radiusToDegrees(input){
    function radiansToDegrees(number) {
        return number * (180 / Math.PI);
    }

}
function areEqual(input, inputOne){
    return input == inputOne;
}
function areIdentical(input, inputOne){
    return input === inputOne;
}
function not(input){
    return !input
}
function notNot(input){
    return !!input;
}
function and (input, inputOne){
    return input && inputOne
}
function or (input, inputOne){
    return input || inputOne;
}
function identity(input){
    return input;

}
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function first(input){
    return input.charAt(0);
}
function last(input){
    return input.charAt(4);
}
function rest(input) {
    return input.slice(1);
}
function count(input){
   return input.length;
}
function doesItEndWith(input){
    return input.endsWith('a');
}
function itsTrueMessage(input){
    return alert ('Hello! It is indeed true');
}
function returnMessage(input){

}
function willLogInUser(user, password, age)

