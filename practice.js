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
