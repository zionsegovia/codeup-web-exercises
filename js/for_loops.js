function showMultiplicationTable(input){
let multiple = 1;
for (let i = 1; i <= 10; i++ ){
let result = multiple * i;
console.log(multiple + ' * ' + i + '=' + result )
}
}


for (let i = 0; i < 10; i++){
  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
  if (randomNumber % 2 === 0) {
    console.log(randomNumber + " is even");
  } else {
    console.log(randomNumber + " is odd");
  }
}

for (let i = 1; i < 9; i++ ){
    console.log(`${i}`.repeat(i));


}


for (let i = 5; i <= 20; i++){
  console.log(i + 5)
}









