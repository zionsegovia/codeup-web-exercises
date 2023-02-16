function getToDestination(age, isInsured, hasCar, canGetRideShare){
if (age > 16 && isInsured === true && hasCar === true)
    console.log("You need to use your own car weirdo!!");
else if (age <= 16 && isInsured === false || hasCar === false && canGetRideShare === true)
    console.log("You need to call a rideshare service homie");
else console.log("You should really call up one of your friends to get you then");

}
function canGetRideshare(driversNearby, hasCoin){
    return !!(driversNearby && hasCoin);
}

////below this is practice and notes for loops


let i = 1;
while (i <= 10) {
    console.log(`Loop #${i}`);
    i++;
}


do{
    console.log(`Loop #${i}`);
    i++;
} while (i <= 10);



for (let i = 1; i <= 10; i++) {
    console.log(`Loop #${i}`);
}

for (let i = 0; i < 10; i++){
    console.log(i + 1);

}


const getFactoial = (num) => {
    let result = num
    for(let i = num; i > 0; i--)
       let thisResult = i * result;



const buildPyramid = (rows) => {
    // loop through rows
    for (let i = 1; i <= rows; i++ ){
    let row = "";
    // loop to add spaces
    for (let j = 1; j <= row - i; j++){
        row+=" ";
    }
    // loop to add asterisks
        for (let k = 1; k <= 2 * rows - 1; k++ ) {
            row += "*";
        }
    }


    }
}


for (let i = 0; i < 5; i++){
    console.log('loop' + i);

}

let i = 0;
while(i < 10){
    console.log(i);
    i++;
    if( i === 5) continue;
}