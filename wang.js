//function sayHello(m){
    //console.log('Hello ' + myName);
   // console.log("You smell like "  + yourSmell);
//}

//let myName = 'Zion';
//let yourSmell = 'Fart';
//sayHello('Zion');


function toCelcius(f){
    return (f-32) * (5/9);
}
function toFarenheit(c){
    return (c * 9/5)+ 32;
}
let coolTemp = toCelcius(100);
    console.log("Your cool temp is", coolTemp, "degrees.");
toFarenheit(123);
let hotTemp = toFarenheit(123);
    console.log("Your hot temp is", hotTemp, "youre smoking baby");

    function isNumbericAndNotNan(input){
        return !isNaN(parseFloat(input)) && input !== null && typeof input !==
            "boolean" && typeof input !== "string";
    }



