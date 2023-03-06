const addr1 = '6969 Funky Town'
const addr2 = '420420 ZaZa Street'
const addr3 = '23 Main'
const addr4 = ' 42069 Poop Lane'

function convertAddressToObject(address){

    // here I am using index space to take parts of the
    // string and creating a substring
    const indexOfSpace = address.indexOf('');
    // it is important to remember that spaces are included
    const streetNumber = address.substring(0, indexOfSpace);
    const streetName = address.substring(indexOfSpace  + 1);
    // here I am returning the parts of the string that
    // I took as substrings
    return {
        streetNumber: streetNumber,
        streetName: streetName
    }
}
// the above is a function that could be simplified however,
// for learning reasons I will leave it as is!
const people = [
      {name: 'Fernando Mendoza', pets: 1},
       {name: 'Douglas Hirsh', pets: 8},
       {name: 'Kenneth Howell', pets: 2}
    ];

/* function totalPets(personsArray){
    // this is an accumulator variable
    let total = 0
    // this is a loop that will loop over the array adding
   // to the accumulator
    for (let i = 0; i < personsArray.length; i++){
        total += personsArray[i].pets;

    }
    return total;
}
*/ // above is the normal way

// they do the same thing

// below is the shorthand

function totalPets(personsArray) {
    let total = 0;
    personsArray.forEach(person => total += person.pets);
    return total;
}

function minMax(numsArray) {
    const minAndMax = [];
    // the ... is a spread and allows the Math.min and max to be able to read
    // the array
    minAndMax[0] = Math.min(...numsArray);
    minAndMax[0] = Math.max(...numsArray);
    return minAndMax
}
const drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}
]
drinks.sort(function(a, b){return a.price - b.price});

const budgets = [
    {name: "John", age: 21, budget:2300},
    {name: "Steve", age:32, budget:4000},
    {name: "Martin", age: 16, budget:2700}
]
function getBudgets(budgetArray){
    let totalBudget = 0;
    budgetArray.forEach(object => totalBudget += object.budget);
    return totalBudget;
}

/*  Below is a function that does the same thing as the function above however,
this one is using the reduce method to achieve the same end goal.

function getBudgets(budgetsArray){
return budgetArray.reduce((accumulator, currentObject) => accumulator }
 */
function hashPlusCount(input){
   return input.split(/[#+]/).length - 1;
}
function reverseOdd(input){
    if (input.length % 2 === 0){
        return input
    } else {
        input.reverse();
    }
}

const cities = [
    {
        name: "New York City",
        state: "New York",
        population: 8336817
    },
    {
        name: "Los Angeles",
        state: "California",
        population: 3979576
    },
    {
        name: "Chicago",
        state: "Illinois",
        population: 2693976
    },
    {
        name: "Houston",
        state: "Texas",
        population: 2320268
    },
    {
        name: "Phoenix",
        state: "Arizona",
        population: 1680992
    },
    {
        name: "Philadelphia",
        state: "Pennsylvania",
        population: 1584064
    },
    {
        name: "San Antonio",
        state: "Texas",
        population: 1547253
    },
    {
        name: "San Diego",
        state: "California",
        population: 1423851
    },
    {
        name: "Dallas",
        state: "Texas",
        population: 1343573
    },
    {
        name: "San Jose",
        state: "California",
        population: 1030119
    },
    {
        name: "Austin",
        state: "Texas",
        population: 964254
    },
    {
        name: "Jacksonville",
        state: "Florida",
        population: 903889
    },
    {
        name: "Fort Worth",
        state: "Texas",
        population: 895008
    },
    {
        name: "Columbus",
        state: "Ohio",
        population: 892533
    },
    {
        name: "San Francisco",
        state: "California",
        population: 883305
    },
    {
        name: "Charlotte",
        state: "North Carolina",
        population: 885708
    },
    {
        name: "Indianapolis",
        state: "Indiana",
        population: 876384
    },
    {
        name: "Seattle",
        state: "Washington",
        population: 753675
    },
    {
        name: "Denver",
        state: "Colorado",
        population: 727211
    },
    {
        name: "Washington",
        state: "District of Columbia",
        population: 702455
    }
];

for(let i = 0; i < cities.length; i++) {
    if (cities[i].state === "Texas" && cities[i].population > 1000000) {
        console.log(`${cities[i].name} ${cities[i].state}`);
    }
}

function isInTexas(cityObject){
    return cityObject.state === "Texas";
}
