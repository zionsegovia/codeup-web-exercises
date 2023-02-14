"use strict";

function sayHowdy(howdyTo){
    console.log("Howdy " + howdyTo);
}
let howdyTo = 'Zion'
sayHowdy(howdyTo);

function returnName(nam){
    console.log('Zion')
}
returnName();

function addThree(number){
    return number + 3;
}
console.log(addThree(5))

function sayString(str){
    return str;
}
console.log(sayString('Codeup'))
sayString();


function negativity(number){
    if (number > 0){
        return -number;
    } else if (number <=0){
        return number;
    } else if (typeof number === 'string'){
        return 'You fool, that is not a number..';
    }

}




function reverseString(string){
    let stringArray = string.split('');
    console.log(stringArray)
    let reversedString = stringArray.reverse();
    console.log(reversedString);
    let reversedStrings = reversedString.join('');
    return reversedString;
}


let flavor = prompt('Welcome to Codeup Ice Cream! What flavor do you want?');
//if (flavor === "chocolate"){
  //  alert("One chocolate coming right up");
//} else if (flavor === "vanilla") {
 //   alert("We dont have that flavor, sorry :(");
//} else {
  //  alert("We dont have that flavor, sorry :(");
//}

switch(flavor.toLowerCase()) {
    case "chocolate":
        alert("One chocolate coming right up!");
        break;
    case "vanilla":
        alert("One vanilla coming right up!");
        break;
    case "strawberry":
        alert("One strawberry coming right up");
        break;
    default:
        alert("We dont have that flavor, sorry");
}

function serveIceCream(flavor){
    if (flavor==="chocolate"|| flavor === "vanilla" || flavor ==="strawberry"){
        alert(`One ${flavor} coming right up!`);
    }


}

function divisibleByFive(number){
    if (number % 5 ===0){
        console.log("divisible by 5");
} else {
    console.log("Not divisible by 5");
}}





function divisible(dividend,divisor){
    return dividend % divisor === 0;
}










