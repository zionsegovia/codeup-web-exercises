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

//// from here it is practice for arrays

let fruits = ["bananas", "apples", "oranges", "mangoes", "tomatoes"];
let var1  = fruits[2];
console.log(var1);
let numberOfFruits = fruits.length
console.log("the number of fruits => ", numberOfFruits );
let fruitsString = fruits.toString();
console.log('using tostring on fruits =>', fruitsString);

let fruitsAndNumbers = ['bananas', 2, "apples", 8675309, undefined];
console.log(fruitsAndNumbers);

const returnString = (input) => {
return input;

}
let stringsList = [returnString("jason"),
    returnString("Javier"), returnString("Justin")];
console.log('stringslist follows => ', stringsList);

//loop thru array

for(let i = 0; i < fruits.length; i++){
    let fruit = fruits[i];
    console.log(fruit)
}
cosnt forEach = (callback) => {
    ...
    callback(element, index, array);

}

let favFruits = [];
fruits.forEach(function(fruit , i,array){
    console.log(" The elements follows:", fruit);
    console.log("The index follows:", i);
    console.log("The array follows:", array);
});


////////// methods & objects?

const fighter = {
    name: "Cool guy",
    hitPoints: 25,
    maxDamage: 8,
    attack: function(enemy){
        console.log(`${enemy.name} has ${enemy.hitPoints} hit points `);
        console.log(this.name + "attacks!");
        const damage = Math.ceil(Math.random()* this.maxDamage);
        console.log(`${this.name} does ${damage} points of damage!`);
        enemy.hitPoints -= damage;
        console.log(`${enemy.name} has ${enemy.hitPoints} HP left!`);


    }

}
// use dot method to apply *fighter.attack*

const fighter2 = {
    name: 'Bigfoot',
    hitPoints: 17,
    maxDamage: 10,
    attack: function(){
        console.log("BigFoot attacks!");
    }
}
const monster = {
    name: "Goblin",
    hitPoints: 8,
    maxDamage: 5,

}

/* const gameLogic = {
    attack: function(attacker, defender){
      // console.log(`${defender.name} has ${defender.hitPoints} hit points.`)
      //  console.log(`${attacker} attacks!`);
        const damage = Math.ceil(Math.random()* attacker.maxDamage);
      //  console.log(`${attacker.name} does ${damage} hit points`)
        defender.hitPoints -= damage;
      //  console.log(`${defender.name} now has ${defender.hitPoints} hit points left`);
view.displayAttackResults(attacker.name, defender.name, startingHp, defender.hitPoints, damage)
    }

}
const view = {
    displayAttackResults: function(attackerName, defenderName, hpBeforeAttack, hpAfterAttack, damage );{
        console.log(`${defenderName} has ${hpBeforeAttack} hit points.`)
        console.log(`${attackerName} attacks!`);
        console.log(`${attackerName} does ${damage} hit points`)
        console.log(`${defenderName} now has ${hpAfterAttack} hit points left`);
    }

 */
