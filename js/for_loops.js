function showMultiplicationTable(input) {
//let multiple = 1;
    let table = '';
    for (let i = 1; i <= 10; i++) {
//let result = multiple * i;
//console.log(multiple + ' * ' + i + '=' + result )
//}
//}
        let daMath = parseInt(input) * i;
        let output = `${input} x ${i} = ${daMath}`;
        table = table + output;
    }
    return table;
}
let sevenTable = showMultiplicationTable(7);


for (let i = 1; i <= 10; i++){
  let randomNumber = Math.floor(Math.random() * (20 - 200 + 1) + 20)
  if (randomNumber % 2 === 0) {
    console.log(`${randomNumber}` + " is even");
  } else {
    console.log(`${randomNumber}` + " is odd");
  }
}


for (let i = 1; i < 10; i++ ){
    console.log(`${i}`.repeat(i));


}


for (let i = 100; i > 0; i -= 5){
  console.log(i);
}









