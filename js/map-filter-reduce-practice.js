const prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
// foreach takes a function as an argument ie/ telling it what to do when it loops over the array
// the function that we pass to the foreach takes its own arguments
prices.forEach(price => console.log(price));

const pricesAfterTax = prices.map(price => {
    const tax = (price * 0.0825).toFixed(2);
    return (price + parseFloat(tax)).toFixed(2);
});
let randomNumbers = [70, 30, 73, 22, 40, 48, 76, 20, 13, 92, 20, 56, 97, 76, 26, 77, 57, 47, 83, 70 ];

const numbersSquared = randomNumbers.map(numbers => numbers ** 2);

const cars = [
    {
        make: "Honda",
        model: "Civic",
        mileage: 10428
    },
    {
        make: "Toyota",
        model: "Corolla",
        mileage: 9425
    },
    {
        make: "Ford",
        model: "Mustang",
        mileage: 2567
    },
    {
        make: "Audi",
        model: "A3",
        mileage: 14500
    },
    {
        make: "Mazda",
        model: "3",
        mileage: 11248
    }
];

const mileages = cars.map(car => car.mileage);

const carNames = cars.map(({make, model, mileage}) => `${make} ${model}`);

const books = [
    {
        title: "How to eat bugs like a monkey",
        author: {
            firstName: "Zion",
            lastName: "Segovia"
        }
    },
    {
        title: "10 reasons you should eat paint and cut your ear off",
        author: {
            firstName: "Vincent",
            lastName: "Van Gogh"
        }
    },
    {
        title: "Are kittens the cutest animal ever?",
        author: {
            firstName: "Joe",
            lastName: "Biden"
        }
    },
    {
        title: "3 hours at Walmart the horror story",
        author: {
            firstName: "Zion's",
            lastName: "Mom"
        }
    },
    {
        title: "Triple backflip off the mcdonalds roof: an autobiography",
        author: {
            firstName: "Cool",
            lastName: "Mc Guy"
        }
    }
];

const authorNames = books.map(book => `${book.author.firstName} ${book.author.lastName}`)
// this is sorting the array from highest to lowest for cars with mileage over 10k
const underTenThousandMiles = cars.filter(car =>car.mileage < 10000).sort((a, b) => b.mileage - a.mileage);

const smashers = ["Mario", "Donkey Kong", "Link", "Samus","Dark Samus", "Yoshi", "Kirby", "Fox", "Pikachu",
    "Luigi", "Ness", "Captain Falcon", "Jigglypuff",     "Peach", "Daisy", "Bowser", "Ice Climbers", "Sheik", "Zelda", "Dr. Mario", "Pichu", "Falco", "Marth",
    "Lucina", "Young Link", "Ganondorf", "Mewtwo", "Roy", "Chrom", "Mr. Game & Watch", "Meta Knight", "Pit", "Dark Pit", "Zero Suit Samus", "Wario", "Snake", "Ike", "Pokemon Trainer", "Squirtle", "Ivysaur",
    "Charizard", "Diddy Kong", "Lucas", "Sonic", "King Dedede", "Olimar", "Lucario", "R.O.B.", "Toon Link", "Wolf", "Villager", "Mega Man", "Wii Fit Trainer", "Rosalina & Luma", "Little Mac", "Greninja", "Mii Brawler", "Mii Swordfighter",
    "Mii Gunner", "Palutena", "Pac-Man", "Robin", "Shulk", "Bowser Jr.", "Duck Hunt", "Ryu", "Ken", "Cloud", "Corrin", "Bayonetta", "Inkling", "Ridley", "Simon", "Richter", "King K. Rool", "Isabelle", "Incineroar", "Piranha Plant", "Joker", "Hero",
    "Banjo & Kazooie", "Terry", "Byleth", "Min Min", "Steve", "Sephiroth", "Pyra", "Mythra", "Kazuya", "Sora"];

const namesWithFiveLetters = smashers.filter(smasher =>smasher.length === 5).sort()

const namesWithMoreThanTenLetters = smashers.filter(smasher=>smashers > 10).sort()

const usedCars = [
    {
        year: 2006,
        make: "Toyota",
        model: "Prius",
        price: 8044
    },
    {
        year: 2017,
        make: "Honda",
        model: "Civic",
        price: 18123
    },
    {
        year: 2004,
        make: "Ford",
        model: "Mustang",
        price: 9052
    },
    {
        year: 2013,
        make: "Cadillac",
        model: "ATS",
        price: 10991
    },
    {
        year: 2009,
        make: "Subaru",
        model: "Impreza",
        price: 7335
    },
    {
        year: 2008,
        make: "Dodge",
        model: "Charger",
        price: 8847
    },
    {
        year: 2014,
        make: "Chrysler",
        model: "300",
        price: 13517
    },
    {
        year: 2011,
        make: "Buick",
        model: "Regal",
        price: 8253
    },
    {
        year: 2012,
        make: "Chevrolet",
        model: "Impala",
        price: 6736
    },
    {
        year: 2015,
        make: "BMW",
        model: "3 series",
        price: 13767
    },
    {
        year: 2020,
        make: "Hyundai",
        model: "Elantra",
        price: 17892
    },
    {
        year: 2008,
        make: "Mercedes-Benz",
        model: "C-Class",
        price: 8444
    },
    {
        year: 2016,
        make: "Audi",
        model: "A3",
        price: 15900
    }
];

const usedCarPrices = usedCars.map(car => car.price);
// the first argument that we pass to reduce will be the first variable in
// the array(total). the second will be the second!(price)
let totalValueOfAllCars = usedCarPrices.reduce((total, price, index)=>
{
    return total + price
});

const averageCarValue = usedCarPrices.reduce((total,price,index,array) =>{
    total = total + price;
    if (index === array.length -1){
        return parseFloat((total/array.length).toFixed(2));
    } else {
        return total;
    }
});
const aHundredNums = [9225, 6397, 97, 5062, 2149, 4656, 6551,
    2145, 1073, 7963, 6279, 2873, 1820, 1468, 9611, 6431, 797,
    3433, 5518, 4932, 7880, 6996, 5761, 6828, 6909, 9431, 4313,
    2265, 7709, 5131, 2054, 8212, 9285, 7945, 612, 6055, 7189,
    8539, 8201, 2209, 98, 9329, 4281, 441, 7230, 3582, 2502,
    8432, 9749, 1267, 4111, 4289, 6793, 8238, 6892, 7665, 9252,
    2065, 9817, 8868, 2133, 4519, 1916, 3035, 7547, 9217, 9438,
    4473, 7162, 6652, 2540, 5290, 1502, 7302, 3917, 6100, 6211,
    286, 8413, 8380, 5514, 5858, 7280, 3490, 3907, 1, 1428, 8825,
    8339, 8809, 7713, 7770, 3873, 3474, 6775, 9126, 3081, 7613, 4017, 445];

const totalOfNumbers = aHundredNums.reduce((acc,curr) =>{
    return acc + curr;
});
const averageOfNumbers = aHundredNums.reduce((acc,curr, index,array)=>{
   acc = acc + curr;
   if (index === array.length - 1) {
       return acc / array.length;
   } else {
       return acc;
   }
});
const totalOfOdds = aHundredNums.reduce((acc, curr, index)=> {
    if (index % 2 === 1){
        return acc + curr;
    } else {
        return acc;
    }
});
// the zero here is a custom starting point
const valueOfUsedCars = usedCars.reduce((acc, curr)=> {
    return acc + curr.price},
    0
);
const totalMileage = cars.reduce((acc, curr) => {
    return acc + curr.mileage},
    0
);
const theHighestMileage = cars.reduce((acc, curr, index, array)=>{
    if (index === array.length - 1){
        acc.push(curr.mileage)
        return acc.push((a, b)=>b-a[0])
    } else {
        acc.push(curr.mileage)
        return acc;
    }
}, []);


const mileageReport = cars.reduce((acc, curr, index, array)=>{
    if (index=== array.length -1){
        acc.push(curr.mileage);
        let report = 'Yo mama is';
        report += acc.join(", ");
        const mileageSorted = acc.sort((a,b)=> b-a);
        const highestMileage = mileageSorted[0];
        const lowestMileage = mileageSorted[mileageSorted.length-1]
        report += '.\n';
        report += 'Yo mamalama is' + highestMileage + '.\n';
        report += 'Yo daddy is' + lowestMileage + '.';

    } else {
        acc.push(curr.mileage);
        return acc
    }
}, []);

// TODO: Given the following array, complete the todos...

const dogs = [
    {
        dogName: 'Bubbles',
        age: 10,
        isTrained: false
    },
    {
        dogName: 'Lexie',
        age: 3,
        isTrained: true
    },
    {
        dogName: 'Doggy',
        age: 5,
        isTrained: false
    },
    {
        dogName: 'Flopper',
        age: 3,
        isTrained: true
    },
    {
        dogName: 'Lexie',
        age: 1,
        isTrained: true
    },
    {
        dogName: 'Skip',
        age: 7,
        isTrained: true
    },
    {
        dogName: 'Blue',
        age: 4,
        isTrained: false
    }
];

// MAP

// TODO 1: using map, create a new array of dog names from the dogs array
console.log('Exercise 1:');

const arrayOfDogNames = dogs.map(name => name.dogName)
console.log(arrayOfDogNames)

// TODO 2: using map, create a new array of dog ages from the dogs array
console.log('Exercise 2:');
const arrayOfDogAges = dogs.map(dogAge => dogAge.age)
console.log(arrayOfDogAges)

// TODO 3: using map, create a new array of dog objects from the dogs array that only have dog names and age properties and values
console.log('Exercise 3:');
const arrayOfDogObjects = dogs.map(object => `${object.dogName} ${object.age}`)
console.log(arrayOfDogObjects)
// FILTER

// TODO 4: using filter, create a new array containing only dogs younger than 10 years old
console.log('Exercise 4:');
const dogsYoungerThanTen = dogs.filter(doggy =>doggy.age < 10).sort((a, b) => b.age - a.age);
console.log(dogsYoungerThanTen)
// TODO 5: using filter, create a new array containing only dogs named 'Lexie'
console.log('Exercise 5:');
const theDogsLexie = dogs.filter(doggy => doggy.dogName === 'Lexie')
console.log(theDogsLexie)

// TODO 6: using filter, create a new array containing only dogs that are trained and younger than 10
console.log('Exercise 6:');
const trainedDogsYoungerThanTen = dogs.filter(doggy => doggy.isTrained === true && doggy.age < 10 );
console.log(trainedDogsYoungerThanTen)
// REDUCE

// TODO 7: using reduce, return a string containing all dog names together with no spaces ("BubblesLexieDoggy...")
console.log('Exercise 7:');
// const allDogNamesNoSpace = dogs.reduce((acc, curr)=>{
//
// })
// TODO 8: using reduce, return the total of adding all dog ages together (33)
console.log('Exercise 8:');
const totalOfDogAges = dogs.reduce((acc, curr) =>{
    return acc + curr.age},
    0
);
console.log(totalOfDogAges)
// TODO 9: using reduce, return an array of dog objects with all isTrained properties set to true
console.log('Exercise 9:');


// EXTRA CHALLENGES

// TODO 10: what is the average age of each dog?
console.log('Exercise 10:');

// TODO 11: what is the average age of dogs that are trained?
console.log('Exercise 11:');

// TODO 12: what is the average length of names of untrained dogs?
console.log('Exercise 12:');

// TODO 13: what are the combined ages of all dogs in dog years? (7x more than a human year)
console.log('Exercise 13:');

// TODO 14: create a string of the first letters of each dog name for dogs three years old (should be "LF")
console.log('Exercise 14:');